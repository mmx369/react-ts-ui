import React, { useState } from 'react'
import { Checkbox, CheckboxGroup } from 'ui'
import './CheckboxPage.scss'

export interface ICheckedGroup {
  [T: string]: string[]
}

export const CheckboxPage: React.FC = () => {
  const checkboxGroupOptions = {
    category: ['Phones', 'Laptops'],
  }

  const [checkBoxByGroup, setCheckboxByGroup] = useState<ICheckedGroup>({
    category: [],
  })
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  const handleChangeCheckedBoxGroup = (
    e: React.ChangeEvent<HTMLInputElement>,
    nameGroup: string
  ) => {
    if (e.target.checked) {
      if (checkBoxByGroup[nameGroup].includes(e.target.value)) {
        setCheckboxByGroup((prevState) => ({ ...prevState }))
      } else {
        setCheckboxByGroup((prevState) => ({
          ...prevState,
          [nameGroup]: [...prevState[nameGroup], e.target.value],
        }))
      }
    } else {
      setCheckboxByGroup((prevState) => ({
        ...prevState,
        [nameGroup]: [...prevState[nameGroup]].filter(
          (x) => x !== e.target.value
        ),
      }))
    }
  }
  return (
    <div className='CheckboxPage'>
      <h2>Checkbox</h2>
      <Checkbox
        id='1'
        isChecked={isChecked}
        label='Single'
        onChange={handleChange}
      />

      <h2>Checkbox Group</h2>
      <div className='CheckboxPage-CheckboxGroup'>
        {checkboxGroupOptions.category.map((label) => (
          <CheckboxGroup
            checkedBoxByGroup={checkBoxByGroup}
            id={label}
            key={label}
            nameGroup='category'
            label={label}
            onChange={handleChangeCheckedBoxGroup}
          />
        ))}
      </div>
      <div>
        <pre>{JSON.stringify(checkBoxByGroup, null, 2)}</pre>
      </div>
    </div>
  )
}
