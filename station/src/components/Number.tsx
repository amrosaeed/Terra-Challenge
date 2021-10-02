import { FC } from 'react'
import { format, DisplayCoin } from '../lib'

interface Props extends Partial<DisplayCoin> {
  children?: string
  className?: string

  /* config */
  fontSize?: number
  estimated?: boolean
  integer?: boolean
}

const Number: FC<Props> = ({ value, unit, children, className, ...config }) => {
  const { estimated, integer: hideDecimal, fontSize } = config
  const number = value ?? children ?? format.amount('0')
  const [integer, decimal] = number.split('.')

  return (
    <span className={className} style={{ fontSize }}>
      {estimated && '≈ '}
      {integer}

      <small>
        {decimal && !hideDecimal && `.${decimal}`}
        {unit && ` ${unit}`}
      </small>
    </span>
  )
}

export default Number
