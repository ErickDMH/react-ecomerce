import { useSelector } from 'react-redux'
import BasicLayout from '@/layouts/basicLayout'
import ProductCard from '@/components/product/productCard'

export default function StorePage() {
    const products = useSelector((state) => state.products.arrayProducts)
    console.log('products',products)
    return (
        <BasicLayout>
            {
                products?.map(product => {
                    return (<ProductCard key={product.sku} product={product}/>)
                })
            }
        </BasicLayout>
    );
}