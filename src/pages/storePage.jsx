import BasicLayout from '@/layouts/basicLayout'
import { ProductList, CategoryList } from '@/components'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ProductStore, CategoryStore } from '@/redux'
import { Product, Category } from '@/entities'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo } from 'react'

export default function StorePage() {
    const dispatch = useDispatch()
    const queryClient = useQueryClient();

    const {selected: categorySelected} = useSelector((state) => state.categories)
    const productsParams =  useMemo(() => {
        return categorySelected && {category: categorySelected.id}
    }, [categorySelected])
    useQuery({
        queryKey: [`${ProductStore._key}s-all`, productsParams],
        queryFn: () => {
            dispatch(ProductStore.actions.setLoading(true))
            return Product.findAll(productsParams).then(products => dispatch(ProductStore.actions.setProducts(products)))},
    })
    useEffect(() => {
        queryClient.invalidateQueries([`${ProductStore._key}s-all`])
    }, [categorySelected])
    
    useQuery({
      queryKey: [`${CategoryStore._key}s-all`],
      queryFn: () => {
        dispatch(CategoryStore.actions.setLoading(true))
        return Category.findAll().then(res =>{
            Category.findUsed()
                .then(response => dispatch(CategoryStore.actions.setUsed(response)))
            dispatch(CategoryStore.actions.setCategories(res))
            return res
        })
        }
    })

    return (
        <BasicLayout>
            <CategoryList />
            <ProductList />
        </BasicLayout>
    )
}