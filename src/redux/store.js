import { configureStore } from '@reduxjs/toolkit'
import UIStore from './ui'


const store = configureStore({
    reducer:{ 
        ui : UIStore.reducer,
    },
})

export default store;