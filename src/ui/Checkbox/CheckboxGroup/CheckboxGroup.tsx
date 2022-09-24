import cn from 'classnames'
import React from 'react'
import { Icon } from 'ui'

interface ICheckboxGroupProps {
  className?: string
  checkedBoxByGroup: any
  id: string
  nameGroup: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, nameGroup: string) => void
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  className,
  checkedBoxByGroup,
  id,
  nameGroup,
  label,
  onChange,
}) => {
  const isChecked: boolean = checkedBoxByGroup[nameGroup].includes(label)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, nameGroup)
  }

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
          onChange={handleChange}
        />
      </span>
      {label && <span className='Checkbox-Label'>{label}</span>}
    </label>
  )
}
