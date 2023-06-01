import { createSlice } from '@reduxjs/toolkit'

export class ProductStore {
    static _key = 'product'
    constructor(loading, products){
        this.isLoading = loading
        this.data = products
    }
    static reduxSlice = createSlice({
        name: this._key,
        initialState: new ProductStore(false, undefined),
        reducers: {
            setProducts: (state, action) => {
                return {isLoading: false, data: action.payload}
            },
            setLoading: (state, action) => {
                return {...state, isLoading: action.payload ?? !this.isLoading}
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
export default ProductStore