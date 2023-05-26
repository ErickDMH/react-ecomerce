import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@mui/material/Drawer'
import UIStore from '@/redux/ui'
import {Header, Footer} from '@/components'

export default function BasicLayout({children}) {
    const dispatch = useDispatch()
    const cartAside = useSelector((state) => state.ui.cartAside)
    
    return (
        <>
            <Header toggleCartAside={()=>{dispatch(UIStore.actions.toggleCartSide())}}/>
                <main>
                    {children}
                </main>
            <Footer />
            <Drawer
                anchor={cartAside.anchor}
                open={cartAside.open}
                onClose={() => {dispatch(UIStore.actions.toggleCartSide(false))}}
            >
                <h2>Cart</h2>
          </Drawer>
        </>
    );
}