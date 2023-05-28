import Axios from '@/utils/axios'
import { WP_SOCIAL_NETWORKS } from '@/utils/consts'

export class Base {
    static async basicInfo() {
        return await Axios.get()
            .then( res => res?.data )
            .catch(error => { console.error('Base basicInfo error:',error) })
    }
    static async socialNetworks() {
        return await Axios.get(WP_SOCIAL_NETWORKS)
            .then( res => res?.data )
            .catch(error => { console.error('Base socialNetworks error:',error) })
    }
}

export default Base