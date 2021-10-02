import { CoinItem, Field, ButtonAttrs } from '..'

export interface CoinInput {
  denom: string
  input: string
}

export interface CoinInputGroup {
  denom: Field
  input: Field
  button?: ButtonAttrs
}

export interface CoinFields {
  label: string
  groups: CoinInputGroup[]
  coins: CoinItem[]
  invalid: boolean
}

export interface QueryResult {
  title: string
  label: string
  content: string
}
