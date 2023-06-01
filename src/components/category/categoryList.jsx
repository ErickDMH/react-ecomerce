import { useSelector, useDispatch} from 'react-redux'
import Skeleton from '@mui/material/Skeleton'
import Chip from '@mui/material/Chip'
import { CategoryStore } from '@/redux'
import './categoryList.css'
import { useMemo } from 'react'

export function CategoryList() {
    const dispatch = useDispatch()
    const {data, isLoading, selected, used} = useSelector((state) => state.categories)

    const handleSelectCategory = category => {
        dispatch(CategoryStore.actions.setSelected(category.id === selected?.id ? undefined : category))
    } 
    const renderCategory = category => {
        return <Chip key={`${category.id}${category.slug}`}
            label={category.name}
            variant={category.id === selected?.id ? 'filled' : 'outlined'}
            onClick={()=>handleSelectCategory(category)}
            disabled={!category.hasProducts}
        />
    } 

    const categories = useMemo(() => {
        if (!used || !data) {
            return undefined
        }
        const ret = {}
        for(const {name, id, slug} of used) {
            ret[id] = {name, id, slug, hasProducts: true}
        }
        for(const {name, id, slug} of data) {
            if (!ret[id]) {
                ret[id] = {name, id, slug}
            }
        }
        return Object.values(ret)
    }, [used, data])

    if (isLoading) {
        return(
            <div className='categories-skeleton-holder'>
                {
                    [...new Array(4)].map((x, index) => {
                        return <Skeleton key={`RectSkeleton${index}${Date.now()}`} width={100} height={40}/>
                    })
                }
            </div>
        )
    }
    return (
        <div id='categories-holder'>{
            selected 
            ? renderCategory(selected)
            : categories?.map(category => {
                return renderCategory(category)
            })
        }</div>
    )
}