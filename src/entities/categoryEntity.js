import Axios from '@/utils/axios'
import { WP_WOO_CATEGORIES, WP_WOO_CATEGORIES_USED } from '@/utils/consts'

export class Category {
    static async findAll() {
        return await Axios.get(WP_WOO_CATEGORIES)
            .then( res => res?.data.filter(option => option.slug.localeCompare('uncategorized')) )
            .catch(error => { console.error('Categories error:',error) })
    }
    static async findUsed() {
        return await Axios.get(WP_WOO_CATEGORIES_USED)
            .then( res => res?.data )
            .catch(error => { console.error('Categories used error:',error) })
    }
}

export default Category