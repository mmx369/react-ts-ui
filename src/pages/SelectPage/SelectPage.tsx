import * as productsApi from 'api/product'
import cn from 'classnames'
import { ProductList } from 'components'
import { useCallback, useEffect, useState } from 'react'
import ValueType from 'react-select'
import { IProduct } from 'types/product'
import { Select } from 'ui'
import { ISelectOption } from 'ui/Select'
import './SelectPage.scss'
import { SelectStyles } from './styles'

export const SelectPage: React.FC = () => {
  const PRICE_UP = 'по возрастанию'
  const PRICE_DOWN = 'по убыванию'
  const options = [
    { value: 'price', label: PRICE_UP },
    { value: '-price', label: PRICE_DOWN },
  ]

  const [selectedOption, setIsSelectedOption] = useState<ISelectOption>({
    value: 'price',
    label: PRICE_UP,
  })
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const [needReqIndicator, setNeedReqIndicator] = useState(0)

  const reqProducts = useCallback(() => {
    setNeedReqIndicator(needReqIndicator + 1)
  }, [setNeedReqIndicator, needReqIndicator])

  const fetchSortingProducts = useCallback((selectedOption: ISelectOption) => {
    productsApi
      .fetchProducts(selectedOption)
      .then((response) => {
        console.log(response)
        setProducts(response)
        setIsSelectOpen(false)
      })
      .catch((err) => {
        console.log(err)
        setIsSelectOpen(false)
      })
  }, [])

  useEffect(() => {
    fetchSortingProducts(selectedOption)
  }, [needReqIndicator])

  const handleBlur = () => {
    setIsSelectOpen(false)
  }

  const handleChange = (selectedOption: ValueType) => {
    // @ts-ignore
    setIsSelectedOption(selectedOption)
    reqProducts()
  }

  const handleFocus = () => {
    setIsSelectOpen(true)
  }

  return (
    <div className='SelectPage'>
      <h2>Select</h2>
      <Select
        className={cn('SelectPage-Select', {
          'SelectPage-Select__active': isSelectOpen,
        })}
        options={options}
        value={selectedOption}
        styles={SelectStyles}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <ProductList products={products} />
    </div>
  )
}
