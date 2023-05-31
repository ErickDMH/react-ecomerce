
import ProductCard from './productCard'
import {useSelector} from 'react-redux'
import Skeleton from '@mui/material/Skeleton'

function ProductList() {
    const {data, isLoading} = useSelector((state) => state.products)

    if (isLoading) {
        return(
            <div className='skeleton-holder'>
                {
                    [...new Array(8)].map((x, index) => {
                        return <Skeleton key={`RectSkeleton${index}${Date.now()}`} width={400} height={330}/>
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