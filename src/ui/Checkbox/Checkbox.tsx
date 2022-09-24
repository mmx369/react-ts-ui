import cn from 'classnames'
import React from 'react'
import Icon from 'ui/Icon'

import './Checkbox.scss'

interface ICheckboxProps {
  className?: string
  id: string
  isChecked: boolean
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  isChecked,
  label,
  id,
  onChange,
}) => {
  return (
    <label
      className={cn('Checkbox', className, {
        Checkbox__active: isChecked,
      })}
      htmlFor={id}
    >
      <span className='Checkbox-Inner'>
        <Icon className='Checkbox-Icon' type='Checkbox' />
        <input
          type='checkbox'
          id={id}
          name={label}
          value={label}
          checked={isChecked}
          onChange={onChange}
        />
      </span>
      {label && <span className='Checkbox-Label'>{label}</span>}
    </label>
  )
}
