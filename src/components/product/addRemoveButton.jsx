import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import {useDispatch, useSelector} from 'react-redux'
import UIStore from '@/redux/ui'

export function AddRemoveButton({product}) {
    const dispatch = useDispatch()
    const cartProduct = useSelector((state) => {
        const cartProducts = state.ui.cartAside.products
        return cartProducts && cartProducts[product.id]
    })
    const handleAddToCart = () => {
        dispatch(UIStore.actions.addProduct(product))
    }
    const handleRemoveToCart = () => {
        dispatch(UIStore.actions.removeProduct(product))
    }

    return (
        <div className="buy glass">
            <p id='price'>{`
                ${product.prices?.currency_symbol}
                ${Math.floor(product.prices?.regular_price  / 10 ** product.prices?.currency_minor_unit)}
            `}</p>
            {
                cartProduct
                ? <div className='productQuantity'>
                     <Button onClick={handleRemoveToCart}>-</Button>
                     <p>{cartProduct.quantity}</p>
                     <Button onClick={handleAddToCart}>+</Button>
                </div>
                : <Button onClick={handleAddToCart}>Add to cart</Button>
            }
        </div>
    )
}
export default AddRemoveButton