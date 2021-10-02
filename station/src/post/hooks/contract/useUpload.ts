import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MsgStoreCode } from '@terra-money/terra.js'
import { BankData } from '../../../types'
import { PostPage, CoinItem, Field } from '../../../types'
import { ConfirmProps } from '../../../types'
import { useAddress } from '../../../data/auth'
import useBank from '../../../api/useBank'
import useForm from '../../../hooks/useForm'
import { getFeeDenomList, isFeeAvailable } from '../validateConfirm'
import { stringify } from '../txHelpers'

interface Values {
  wasm: string
  name: string
  desc: string
  repo: string
}

export default (): PostPage => {
  const { t } = useTranslation()
  const address = useAddress()
  const { data: bank, loading, error } = useBank()

  const [submitted, setSubmitted] = useState(false)

  /* form */
  const validate = ({ wasm }: Values) => ({
    wasm: !wasm ? 'No wasm' : '',
    name: '',
    desc: '',
    repo: '',
  })

  const initial = { wasm: '', name: '', desc: '', repo: '' }
  const form = useForm<Values>(initial, validate)
  const { values, invalid, getDefaultProps, getDefaultAttrs } = form
  const { wasm, name, desc: description, repo: url } = values

  /* render */
  const fields: Field[] = [
    {
      ...getDefaultProps('wasm'),
      label: t('Post:Contracts:File'),
      attrs: {
        ...getDefaultAttrs('wasm'),
        placeholder: t('Post:Contracts:Choose a file'),
      },
      ui: { size: t('Post:Contracts:Size') },
    },
    {
      ...getDefaultProps('name'),
      label: t('Post:Contracts:Name'),
      attrs: getDefaultAttrs('name'),
    },
    {
      ...getDefaultProps('desc'),
      label: t('Post:Contracts:Description'),
      attrs: getDefaultAttrs('desc'),
    },
    {
      ...getDefaultProps('repo'),
      label: t('Post:Contracts:Repo URL'),
      attrs: getDefaultAttrs('repo'),
    },
  ]

  const disabled = invalid

  const formUI = {
    title: t('Post:Contracts:Code upload'),
    fields,
    disabled,
    submitLabel: t('Common:Form:Next'),
    onSubmit: disabled ? undefined : () => setSubmitted(true),
  }

  const getConfirm = (bank: BankData): ConfirmProps => ({
    msgs: [new MsgStoreCode(address, wasm)],
    memo: stringify({ name, description, url }),
    contents: [],
    feeDenom: { list: getFeeDenomList(bank.balance) },
    validate: (fee: CoinItem) => isFeeAvailable(fee, bank.balance),
    submitLabels: [
      t('Post:Contracts:Upload'),
      t('Post:Contracts:Uploading...'),
    ],
    message: t('Post:Contracts:Uploaded code'),
    cancel: () => setSubmitted(false),
  })

  return {
    error,
    loading,
    submitted,
    form: formUI,
    confirm: bank && getConfirm(bank),
  }
}
