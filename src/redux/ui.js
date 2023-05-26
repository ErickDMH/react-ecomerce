import { createSlice } from '@reduxjs/toolkit'

export default class UIStore {
    static _key = 'ui'
    constructor(cartAside){
        this.cartAside = cartAside;
    }
    static reduxSlice = createSlice({
        name: 'ui',
        initialState: new UIStore({open: false, anchor: 'right'}),
        reducers: {
            toggleCartSide: (state, action) => {
                const newCartAsideState = {...state.cartAside, open : action.payload || !state.cartAside.open}
                return {...state, cartAside: newCartAsideState}
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