import { useDispatch } from 'react-redux'
import UIStore from '@/redux/ui'
import {Header, Footer, CartAside} from '@/components'
import './basicLayout.css'

export default function BasicLayout({children}) {
    const dispatch = useDispatch()
    
    return (
        <>
            <Header toggleCartAside={()=>{dispatch(UIStore.actions.toggleCartSide())}}/>
                <main className='content'>
                    {children}
                </main>
            <Footer />
            <CartAside />
        </>
    );
}