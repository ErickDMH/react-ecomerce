import {useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Drawer from '@mui/material/Drawer'
import UIStore from '@/redux/ui'
import {ProductCartItem} from '../product/productCartItem'
import './cartAside.css'

export function CartAside() {
    const dispatch = useDispatch()
    const {anchor, open, products} = useSelector((state) => state.ui.cartAside)
    
    const total = useMemo(() => Object.values(products).reduce((prev, {data, quantity})=> {
        const price = data.prices?.regular_price  / 10 ** data.prices?.currency_minor_unit
        return prev + price * quantity
    }, 0), [products])

    return <Drawer
                anchor={anchor}
                open={open}
                onClose={() => {dispatch(UIStore.actions.toggleCartSide(false))}}
            >
                <aside id='cart'>
                    <h2>Cart</h2>
                    {
                        Object.values(products).length > 0 &&<>
                            {
                                Object.values(products).map(({data, quantity}) => {
                                    return (
                                        <ProductCartItem key={data.id} product={data} quantity={quantity}/>
                                )})
                            }
                        <h3 id='total'>{`Total:  $${total}`}</h3>
                        <button id='pay'>Pay</button>
                    </>
                }
                </aside>
          </Drawer>
}

export default CartAside