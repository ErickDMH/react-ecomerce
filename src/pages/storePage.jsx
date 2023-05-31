import BasicLayout from '@/layouts/basicLayout'
import ProductList from '@/components/product/ProductList'
import Skeleton from '@mui/material/Skeleton'
import {useQuery} from "@tanstack/react-query"
import ProductStore from '@/redux/product'
import CategoryStore from '@/redux/category'
import {Product, Category} from '@/entities'
import {useDispatch, useSelector} from 'react-redux'
import Chip from '@mui/material/Chip'
import './storePage.css'
import { useEffect } from 'react'

export default function StorePage() {
    const dispatch = useDispatch()

    const {isLoading} = useQuery({
        queryKey: [`${ProductStore._key}s-all`],
        queryFn: () => Product.findAll().then(products => dispatch(ProductStore.actions.setProducts(products)))
    })
    useEffect(() => {
        dispatch(ProductStore.actions.setLoading(isLoading))
    }, [isLoading])
    
    const categories = useQuery({
      queryKey: [`${CategoryStore._key}s-all`],
      queryFn: () => Category.findAll().then(res =>{
        const cleanCategories = res.filter(option => option.slug.localeCompare('uncategorized'))
        dispatch(CategoryStore.actions.setCategories(cleanCategories))
        return cleanCategories
      })
    })

    const renderCategories = () => {
        if (categories.isLoading) {
            return(
                <div className='skeleton-holder'>
                    {
                        [...new Array(8)].map((x, index) => {
                            return <Skeleton key={`RectSkeleton${index}${Date.now()}`} width={100} height={30}/>
                        })
                    }
                </div>
            )
        }
        return categories?.data?.map(category => {
            return ( <Chip key={`${category.id}${category.slug}`} label={category.name} variant="outlined" />)
        })
    }

    return (
        <BasicLayout>
            <div id='categories-holder'>{ renderCategories() }</div>
            <ProductList />
        </BasicLayout>
    )
}