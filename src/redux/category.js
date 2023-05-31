import { createSlice } from '@reduxjs/toolkit'

export default class CategoryStore {
    static _key = 'category'
    static reduxSlice = createSlice({
        name: this._key,
        initialState: [],
        reducers: {
            setCategories: (state, action) => {
                return action.payload || state
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