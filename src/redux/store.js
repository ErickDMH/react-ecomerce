import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import UIStore from './ui'
import ProductStore from './product'
import CategoryStore from './category'

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

const store = configureStore({
    reducer:{ 
        ui: UIStore.reducer,
        products: ProductStore.reducer,
        categories: CategoryStore.reducer,
    },
    middleware: customizedMiddleware
})

export default store;