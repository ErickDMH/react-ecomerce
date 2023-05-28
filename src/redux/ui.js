import { createSlice } from '@reduxjs/toolkit'

export default class UIStore {
    static _key = 'ui'
    constructor(cartAside, siteInfo, socialNetworks){
        this.cartAside = cartAside;
        this.siteInfo = siteInfo;
        this.socialNetworks = socialNetworks;
    }
    static reduxSlice = createSlice({
        name: this._key,
        initialState: new UIStore({open: false, anchor: 'right'}),
        reducers: {
            toggleCartSide: (state, action) => {
                const newCartAsideState = {...state.cartAside, open : action.payload || !state.cartAside.open}
                return {...state, cartAside: newCartAsideState}
            },
            setSiteInfo: (state, action) => {
                return {...state, siteInfo: action.payload}
            },
            setSocialNetworks: (state, action) => {
                return {...state, socialNetworks: action.payload}
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