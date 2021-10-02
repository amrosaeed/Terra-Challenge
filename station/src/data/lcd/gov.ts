import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import BigNumber from 'bignumber.js'
import { Deposit, Proposal, Vote } from '@terra-money/terra.js'
import { div, format, percent } from '../../lib'
import useLCD from '../../api/useLCD'

/* gov */
export const useQueryVotingParams = () => {
  const lcd = useLCD()
  return useQuery(['govParams', 'voting'], () => lcd.gov.votingParameters())
}

export const useQueryDepositParams = () => {
  const lcd = useLCD()
  return useQuery(['govParams', 'deposit'], () => lcd.gov.depositParameters())
}

/* proposal */
export const useProposal = (id: number) => {
  const lcd = useLCD()
  return useQuery(['proposal', id], () => lcd.gov.proposal(id))
}

export const useProposer = (id: number) => {
  const lcd = useLCD()
  const { data } = useQuery(['proposer', id], () => lcd.gov.proposer(id))
  return data
}

/* proposals: details */
export const useDeposits = (id: number) => {
  const lcd = useLCD()
  return useQuery(
    ['deposits', id],
    async () => (await lcd.gov.deposits(id)) as unknown as Deposit[]
  )
}

export const useVotes = (id: number) => {
  const lcd = useLCD()
  return useQuery(['votes', id], () => lcd.gov.votes(id))
}

export const useTally = (id: number) => {
  const lcd = useLCD()
  return useQuery(['tally', id], () => lcd.gov.tally(id))
}

export const useTallyParams = () => {
  const lcd = useLCD()
  return useQuery(['tallyParams'], () => lcd.gov.tallyParameters())
}

/* helpers */
export const useProposalId = () => {
  const params = useParams<{ id: string }>()
  return Number(params.id)
}

export interface ProposalStatusItem {
  key: string
  label: string
  color: string
}

export const useProposalStatusList = (): Record<number, ProposalStatusItem> => {
  const { t } = useTranslation()

  return {
    2: {
      key: 'voting_period',
      label: t('Page:Governance:Voting'),
      color: 'badge-info',
    },
    1: {
      key: 'deposit_period',
      label: t('Page:Governance:Deposit'),
      color: 'badge-success',
    },
    3: {
      key: 'passed',
      label: t('Page:Governance:Passed'),
      color: 'badge-primary',
    },
    4: {
      key: 'rejected',
      label: t('Page:Governance:Rejected'),
      color: 'badge-danger',
    },
  }
}

export const useProposalStatus = ({ status }: Proposal) => {
  const list = useProposalStatusList()
  return list[status]
}

type VotedAmount = Partial<Record<Vote.Option, string>>
const { YES, NO, NO_WITH_VETO, ABSTAIN } = Vote.Option

export const useVotesContents = (id: number) => {
  const { t } = useTranslation()

  const { data: proposal } = useProposal(id)
  const { data: tally } = useTally(id)

  if (!(proposal && tally)) return

  const tallies: VotedAmount = {
    [YES]: tally.yes.toString(),
    [NO]: tally.no.toString(),
    [NO_WITH_VETO]: tally.no_with_veto.toString(),
    [ABSTAIN]: tally.abstain.toString(),
  }

  const total = BigNumber.sum(...Object.values(tallies)).toString()
  const getWeigthItem = (option: Vote.Option) => {
    const voted = tallies[option] ?? '0'
    const ratio = div(voted, total)
    return { voted, ratio, percent: percent(ratio) }
  }

  const options = {
    [YES]: {
      ...getWeigthItem(YES),
      label: t('Page:Governance:Yes'),
      color: '#6292ec',
    },
    [NO]: {
      ...getWeigthItem(NO),
      label: t('Page:Governance:No'),
      color: '#ce4a6f',
    },
    [NO_WITH_VETO]: {
      ...getWeigthItem(NO_WITH_VETO),
      label: t('Page:Governance:NoWithVeto'),
      color: '#f19f4d',
    },
    [ABSTAIN]: {
      ...getWeigthItem(ABSTAIN),
      label: t('Page:Governance:Abstain'),
      color: '#a757f4',
    },
  }

  const list = Object.values(options)

  const contents = [
    { title: 'Ends in', content: format.date(proposal.voting_end_time) },
  ]

  return { list, total, contents }
}
