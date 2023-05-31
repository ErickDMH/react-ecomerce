import './productCard.css'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import {useDispatch, useSelector} from 'react-redux'
import React, {useMemo} from 'react'
import UIStore from '@/redux/ui'


export function ProductCard({product}) {
    const dispatch = useDispatch()
    const playImages = true
    const cartProduct = useSelector((state) => {
        const cartProducts = state.ui.cartAside.products
        return cartProducts && cartProducts[product.id]
    })
    const animationTime = useMemo(() => Math.floor(Math.random() * (30 - 10 + 1)) + 10, [])

    const handleAddToCart = () => {
        dispatch(UIStore.actions.addProduct(product))
    }
    const handleRemoveToCart = () => {
        dispatch(UIStore.actions.removeProduct(product))
    }
    
    return (<div className='product-card'>
        <div className="glass"></div>
        {
            playImages && <div className="slider">
                <figure style={{animation: `${animationTime}s slidy infinite`}}>
                    {
                        product.images?.map((image, index) => {
                            return <img key={`${image.src}-${index}-${Date.now()}`} srcSet={image.srcset} src={image.src} />
                        })
                    }
                </figure>
            </div>
        }
        {
            product.images[0]?.src && <img src={product.images[0]?.src}/>
        }
        <div className="info">
            <p>{product.name}</p>
            <div className="chips">
            {
                product.tags?.map(tag => {
                    return <Chip key={tag.slug} label={tag.name} variant="outlined" size="small"/>
                })
            }
            </div>
            <div className="chips">
            {
                product.attributes?.map((attribute, index) => {
                    return <div key={`${attribute.id}${index}`}>
                        <p>{attribute.name}</p>
                        <ButtonGroup variant="text" size="small">
                        {
                            attribute.terms?.map(term => {
                                return <Button key={term.slug}>{term.name}</Button>
                            })
                        }
                        </ButtonGroup>
                    </div> 
                })
            }
            </div>
            <div className="buy glass">
                <p id='price'>{`
                    ${product.prices?.currency_symbol}
                    ${Math.floor(product.prices?.regular_price  / 10 ** product.prices?.currency_minor_unit)}
                `}</p>
                {
                    cartProduct
                    ? <div className='productQuantity'>
                         <Button onClick={handleRemoveToCart}>-</Button>
                         <p>{cartProduct.quantity}</p>
                         <Button onClick={handleAddToCart}>+</Button>
                    </div>
                    : <Button onClick={handleAddToCart}>Add to cart</Button>
                }
            </div>
        </div>
    </div>)
}

export default ProductCard