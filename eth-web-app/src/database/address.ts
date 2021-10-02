import { useRecoilValue } from "recoil"
import { truncate } from "../libs/text"
import { addressState } from "./atoms"

export const useTruncated = () => {
  const value = useRecoilValue(addressState)
  return truncate(value, [6, 4])
}

export const useAddress = () => {
  const value = useRecoilValue(addressState)
  return value
}
