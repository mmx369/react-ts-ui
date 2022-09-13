import cn from 'classnames'
import React, { DOMAttributes } from 'react'
import { newGuid } from 'utils/guid'
import { ReactComponent as ArrowDown } from '../assets/icons/arrowDown.svg'
import { ReactComponent as Pdf } from '../assets/icons/pdf.svg'

import './Icon.scss'

export type IconType = 'Pdf' | 'ArrowDown'

const iconTypes = new Map([
  ['ArrowDown', <ArrowDown key={newGuid()} />],
  ['Pdf', <Pdf key={newGuid()} />],
])

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string
  type: IconType
}

const getIcon = (type: IconType): JSX.Element => {
  return iconTypes.get(type) as JSX.Element
}

export const Icon: React.FC<IIconProps> = ({ className, type, ...props }) => {
  return (
    <div className={cn('Icon', className)} {...props}>
      {getIcon(type)}
    </div>
  )
}
