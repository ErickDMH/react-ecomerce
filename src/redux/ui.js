import { createSlice } from '@reduxjs/toolkit'

export class UIStore {
    static _key = 'ui'
    constructor(cartAside, siteInfo, socialNetworks){
        this.cartAside = cartAside;
        this.siteInfo = siteInfo;
        this.socialNetworks = socialNetworks;
    }
    static reduxSlice = createSlice({
        name: this._key,
        initialState: new UIStore({open: false, anchor: 'right', products: {}}),
        reducers: {
            toggleCartSide: (state, action) => {
                const newCartAsideState = {...state.cartAside, open : action.payload || !state.cartAside.open}
                return {...state, cartAside: newCartAsideState}
            },
            addProduct: (state, action) => {
                if (state.cartAside.products[action.payload.id]) {
                    state.cartAside.products[action.payload.id].quantity ++
                } else{
                    state.cartAside.products[action.payload.id] = {
                        data : action.payload,
                        quantity : 1
                    }
                }
            },
            removeProduct: (state, action) => {
                if (state.cartAside.products[action.payload.id]) {
                    if (state.cartAside.products[action.payload.id].quantity === 1) {
                        delete state.cartAside.products[action.payload.id]
                    } else {
                        state.cartAside.products[action.payload.id].quantity --
                    }
                }
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
export default UIStore