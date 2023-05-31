import {useSelector, useDispatch} from 'react-redux'
import UIStore from '@/redux/ui'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import './cartButton.css'

export function CartButton() {
    const dispatch = useDispatch()
    const products = useSelector((state) =>
        Object.values(state.ui.cartAside.products).reduce((prev, {quantity})=> {
        return prev + quantity
    }, 0))

    const handleToggleCart = () => {
        dispatch(UIStore.actions.toggleCartSide())
    }

    return (
        <IconButton id='cartIcon' onClick={handleToggleCart}>
            <Badge badgeContent={products} color="primary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}

export default CartButton