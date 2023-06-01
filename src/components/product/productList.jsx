
import ProductCard from './productCard'
import { useSelector } from 'react-redux'
import Skeleton from '@mui/material/Skeleton'
import './productList.css'

export function ProductList() {
    const {data, isLoading} = useSelector((state) => state.products)

    if (isLoading) {
        return(
            <div className='products-skeleton-holder'>
                {
                    [...new Array(8)].map((x, index) => {
                        return <Skeleton key={`RectSkeleton${index}${Date.now()}`} width={'100%'} height={280} variant="rounded"/>
                    })
                }
            </div>)
    }
    
    return (
        <div id='products-holder'>{ 
            data?.map(product => {
                return (
                    <ProductCard key={product.sku} product={product} />)
            })
        }</div>
    )
}

export default ProductList