import { configureStore } from '@reduxjs/toolkit'
import UIStore from './ui'
import ProductStore from './product'

const store = configureStore({
    reducer:{ 
        ui : UIStore.reducer,
        products : ProductStore.reducer,
    },
})

export default store;