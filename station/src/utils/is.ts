import { bech32 } from 'bech32'

const isBech32 = (value: string) => {
  try {
    const words = bech32.decode(value)
    return words.prefix === `terra`
  } catch (error) {
    return false
  }
}

const nativeTerra = (string = '') =>
  string.startsWith('u') && string.length === 4

export default {
  address: (string: string = ''): boolean =>
    string.length === 44 && string.startsWith('terra') && isBech32(string),

  nativeTerra,
  nativeDenom: (string = '') => nativeTerra(string) || string === 'uluna',

  json: (param: any) => {
    try {
      JSON.parse(param)
      return true
    } catch {
      return false
    }
  },
}
