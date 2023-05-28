import { createSlice } from '@reduxjs/toolkit'

export default class ProductStore {
    static _key = 'products'
    constructor(products){
        this.arrayProducts = products
    }
    static reduxSlice = createSlice({
        name: this._key,
        initialState: new ProductStore([]),
        reducers: {
            setProducts: (state, action) => {
                return {...state, arrayProducts: action.payload || this.arrayProducts}
            },
        }
    })
    static get reducer() {
        return this.reduxSlice.reducer
    }
    static get actions() {
        return this.reduxSlice.actions
    }
}