import { useCallback } from 'react'
import {
    Instagram as InstagramIcon,
    Facebook as FacebookIcon
} from '@mui/icons-material'
import { useSelector } from 'react-redux'
import './footer.css'

export function Footer() {
    const siteInfo = useSelector((state) => state.ui.siteInfo)
    const socialNetworks = useSelector((state) => state.ui.socialNetworks)

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
            <h1>{siteInfo?.name ?? 'Shop'}</h1>
            {
                getSocialNetworks()
            }
        </footer>
    )
}

export default Footer