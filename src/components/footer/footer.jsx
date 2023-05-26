import { useCallback, useState } from 'react'
import {
    Instagram as InstagramIcon,
    Facebook as FacebookIcon
} from '@mui/icons-material'
import Axios from '@/utils/axios'
import { useOnMountUnsafe } from '@/utils/unsafeHooks'
import './footer.css'

export function Footer() {
    const [socialNetworks, setSocialNetworks] = useState()
    useOnMountUnsafe(() => {
        if (socialNetworks === undefined) {
            Axios.get('menus/v1/menus/social-network')
                .then( res => { setSocialNetworks(res?.data?.items) })
                .catch(error => { console.error('error',error) })
        }
    }, [socialNetworks])


    const getSocialNetworkSVG = socialNetwork => {
        switch(socialNetwork){
            case 'instagram': {
                return <InstagramIcon />
            }
            case 'facebook': {
                return <FacebookIcon />
            }
            default:
                return null
        }
    }
    const getSocialNetworks =  useCallback(
      () => {
        if (socialNetworks) {
            return socialNetworks.map(socialNetwork => {
                return (
                    <a key={`${socialNetwork?.ID}${socialNetwork?.title}${Date.now()}`} href={socialNetwork?.url || ''}>{
                        getSocialNetworkSVG(socialNetwork?.title?.toLowerCase())}
                    </a>
                )
            })
        }
        return null
      },
      [socialNetworks],
    )

    return (
        <footer>
            <h1>foot</h1>
            {
                getSocialNetworks()
            }
        </footer>
    )
}

export default Footer