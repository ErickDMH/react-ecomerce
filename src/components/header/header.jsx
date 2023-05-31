import {Avatar} from '@mui/material'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import {CartButton} from '../cart/cartButton'
import IconButton from '@mui/material/IconButton'
import './header.css'

export function Header() {
    const siteInfo = useSelector((state) => state.ui.siteInfo)
    const [activeSearch, setActiveSearch] = useState(false)

    const handleOnChangeSearch = e => {
        console.log('e',e.target.value)
    }

    return (
        <header>
            <img src={siteInfo?.site_icon_url} alt={siteInfo?.name ?? 'Shop'} />
            <div>
                <div id='search'>
                    <IconButton onClick={()=>setActiveSearch(true)}>
                        <SearchIcon />
                    </IconButton>
                    {activeSearch && <TextField id="outlined-basic" placeholder="Search" variant="standard" onChange={handleOnChangeSearch}/>}
                </div>
                <Avatar id='profile'/>
                <CartButton />
            </div>
        </header>
    )
}

export default Header