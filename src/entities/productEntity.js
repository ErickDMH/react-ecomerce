import Axios from '@/utils/axios'
import { WP_WOO_PRODUCTS } from '@/utils/consts'

export class Product {
    static async findAll(params) {
        return await Axios.get(WP_WOO_PRODUCTS, { params })
            .then( res => res?.data )
            .catch(error => { console.error('Base socialNetworks error:',error) })
    }
}

export default Product