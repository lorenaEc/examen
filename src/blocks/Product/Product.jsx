import React, {useState, useEffect, useContext} from "react";
import Woocommerce from "../../WooCommerce";
import { useRouter } from 'next/router'
import { CartContext } from "../../Context/cartContext";
import styled from "styled-components";
import Cart from "../../Functions/cart";
import Link from "next/link";

function Product({ backgroundColor, title, textColor, product}) {
    const {cart, setcart} = useContext(CartContext)
    const router = useRouter()
    const [products, setProducts] = useState([])

  //Get all products from woocommerce categories
    useEffect(() => {
        async function getAllProducts() {
            const category = await Woocommerce.getCategoryBySlug(router.query.category)
            
            const productsByC = await Woocommerce.getProductsByCategory(category[0].id)
            setProducts(productsByC)
        }
        if(router.query.category !== undefined) {
            getAllProducts()
        }
        async function getRelatedProducts() {
            let relatedProducts = []
            for(const relatedId of product.related_ids) {
                const relatedProduct = await Woocommerce.getProductsById(relatedId)
                relatedProducts.push(relatedProduct)
            }
            setProducts(relatedProducts)
        }
        if(router.query.product_slug !== undefined) {
            getRelatedProducts()
        }
        
    },[router.query.category, router.query.product_slug ])

    const formatter = new Intl.NumberFormat('se-SE', {
        style: 'currency',
        currency: 'SEK',
      
      });
      



    return (
        <Style style={{ '--backgroundColor': backgroundColor, 'textColor': textColor }}>
            <div className="wrapper">
                {title && <div className='h3'> {title}</div>}
                <div className="contained small">

                    {products && products.map((product, index) => {
                        const formatPrice = formatter.format(product.price)
                        return (
                            <div className='wrapper' key={index}>

                                <div className="overlay"></div>

                                {product.images && <Link href={`/product/${product.slug}`} className='imageBox'><img src={product.images[0].src} /></Link>}
                                <div className="infoWrapper">
                                    <div className="info">
                                        <Link href={`/product/${product.slug}`} ><p>{product.name}</p></Link>
                                        <p>{formatPrice}</p>
                                    </div>
                                    <div className="button">
                                        <p onClick={() => Cart.addToCart(cart, setcart, 1, product)}>Add to cart</p>
                                    </div>
                                </div>


                            </div>
                        )
                    })}

                </div>
            </div>

        </Style>
    )
}

export default Product;

const Style = styled.section`
background-color: var(--backgroundColor);
color: var(--textColor);
padding: 100px 0;

.mobile & {
    padding: 75px 0;
}


.wrapper{

    .h3 {
        text-align: center;
        color: var(--color-dark-green);
    }

    .contained{
        padding-top: 75px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 50px;
        column-gap: 50px;

        .tablet &{
            margin: 0;
            grid-template-columns: repeat(2, 1fr); 
            width: 100%;
        }

        .mobile & {
            margin: 0;
            padding-top:30px ;
            grid-template-columns: repeat(1, 1fr); 
            width: 100%;
        }

       
       .wrapper{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        background-color: var(--color-beige);
        height: 450px;
        max-width: 400px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;

        &:hover > .imageBox  {
            transform: scale(1.05);
            transition: ease .3s;
        }

        a{
            text-decoration: none;
            color: var(--color-dark-green);
        }

        .overlay{
            background: linear-gradient(180deg, rgba(94,79,56,0.4654236694677871) 0%, rgba(0,212,255,0) 100%);
            width: 100%;
            height: 100%;
            border-radius: 10px;
            z-index: 1;
            position: absolute;
        }

        .imageBox{
            width: 100%;
            z-index: 2;
            display: flex;
            justify-content: center;
            height: 60%;
            position: absolute;   
            transition: ease .3s;  

            .img{
                width: 100%;
                height: 100%;
            }
        }

        .infoWrapper{
            padding: 20px;
            z-index: 3;
            bottom: 0;
            width: 100%;
            background-color: var(--color-white);
            height: 150px;
            border-radius: 10px;
            position: absolute;
        
            .info{
                display: flex;
                justify-content: space-between;
                color: var(--color-dark-green);
            }

            .button{
                margin-top: 30px;
                background-color: var(--color-green);
                color: var(--color-beige);
                border-radius: 20px;
                max-width: 160px;
                height: 40px;
                cursor: pointer;

                p{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;

                }



            }


        }

        } 
    
        
    }
}


`




