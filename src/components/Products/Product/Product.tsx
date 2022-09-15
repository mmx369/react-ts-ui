import { IProduct } from 'types/product'
import './Product.scss'

export interface IProductProps {
  product: IProduct
}

export const Product: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className='Product'>
      <img className='Product-Images' src={product.image} alt={product.title} />
      <div className='Product-Title'>{product.title}</div>
      <div className='Product-Price'>{product.price}</div>
    </div>
  )
}
