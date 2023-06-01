import { createSlice } from '@reduxjs/toolkit'

export class CategoryStore {
    static _key = 'category'
    data
    selected
    used
    constructor(loading){
        this.isLoading = loading
    }
    static reduxSlice = createSlice({
        name: this._key,
        initialState: new CategoryStore(false),
        reducers: {
            setCategories: (state, action) => {
                return {...state, data: action.payload}
            },
            setLoading: (state, action) => {
                return {...state, isLoading: action.payload ?? !this.isLoading}
            },
            setSelected: (state, action) => {
                return {...state, selected: action.payload}
            },
            setUsed: (state, action) => {
                return {...state, isLoading: false, used: action.payload}
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
export default CategoryStore