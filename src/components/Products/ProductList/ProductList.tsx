import { isNil } from 'lodash'
import { IProduct } from 'types/product'
import { Product } from '../Product/Product'
import './ProductList.scss'

export interface IProductListProps {
  products: IProduct[]
}

export const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <div className='ProductList'>
      {!isNil(products) &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  )
}
