import {Avatar} from '@mui/material'
import Badge from '@mui/material/Badge'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
import './header.css'

export function Header({toggleCartAside}) {
    const siteInfo = useSelector((state) => state.ui.siteInfo)

    const handleToggleCart = () => {
        if (toggleCartAside) {
            toggleCartAside()
        }
    }
    return (
        <header>
            <img src={siteInfo?.site_icon_url} alt={siteInfo?.name ?? 'Shop'} />
            <div>
                <div>
                    <SearchIcon />
                    <TextField id="outlined-basic" placeholder="Outlined"/>
                </div>
                <Avatar/>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon onClick={handleToggleCart}/>
                </Badge>
            </div>
        </header>
    )
}

export default Header