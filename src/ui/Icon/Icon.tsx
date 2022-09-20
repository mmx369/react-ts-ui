import cn from 'classnames'
import React, { DOMAttributes } from 'react'

import './Icon.scss'
import { IconType, iconTypes } from './IconType'

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
