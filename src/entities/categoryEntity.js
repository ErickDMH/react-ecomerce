import Axios from '@/utils/axios'
import { WP_WOO_CATEGORIES } from '@/utils/consts'

export class Category {
    static async findAll() {
        return await Axios.get(WP_WOO_CATEGORIES)
            .then( res => res?.data )
            .catch(error => { console.error('Base socialNetworks error:',error) })
    }
}

export default Category