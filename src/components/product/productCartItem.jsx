import './productCartItem.css'
import Button from '@mui/material/Button'
import {useSelector, useDispatch} from 'react-redux'
import UIStore from '@/redux/ui'

export function ProductCartItem({product, quantity = 1}) {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.ui.cartAside.products)

    const handleAddToCart = () => {
        dispatch(UIStore.actions.addProduct(product))
    }
    const handleRemoveToCart = () => {
        dispatch(UIStore.actions.removeProduct(product))
    }
    
    const price = product.prices?.regular_price  / 10 ** product.prices?.currency_minor_unit
    return (<div className='product-cart-item'>
        <div>
            {
                product.images[0]?.src && <img width={20} height={20} src={product.images[0]?.src}/>
            }
            <p>{product.name}</p>
        </div>
        <div>
            <p>{`
                ${product.prices?.currency_symbol}
                ${price * quantity}
                `}</p>
            {
                cartProducts && cartProducts[product.id] 
                && <div className='productQuantity'>
                        <Button onClick={handleRemoveToCart}>-</Button>
                        <p>{cartProducts[product.id].quantity}</p>
                        <Button onClick={handleAddToCart}>+</Button>
                </div>
            }
        </div>
    </div>)
}

export default ProductCartItem