import './productCard.css'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export function ProductCard({product}) {
    return (<div className='product-card'>
        <div className="glass"></div>
        <div className="slider">
            <figure style={{animation: `${(Math.floor(Math.random() * (30 - 10 + 1)) + 10)}s slidy infinite`}}>
                {
                    product.images?.map(image => {
                        return <img key={image.src} srcSet={image.srcset} src={image.src} />
                    })
                }
            </figure>
        </div>
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
                product.attributes?.map(attribute => {
                    return <>
                        <p>{attribute.name}</p>
                        <ButtonGroup variant="text" size="small">
                        {
                            attribute.terms?.map(term => {
                                return <Button key={term.slug}>{term.name}</Button>
                            })
                        }
                        </ButtonGroup>
                    </> 
                })
            }
            </div>
            <div className="buy glass">
                <p>{`
                    ${product.prices?.currency_symbol}
                    ${Math.floor(product.prices?.regular_price  / 10 ** product.prices?.currency_minor_unit)}
                `}</p>
                <Button>Add to cart</Button>
            </div>
        </div>
    </div>)
}

export default ProductCard