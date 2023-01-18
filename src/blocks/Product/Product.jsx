import React, {useState, useEffect} from "react";
import Woocommerce from "../../WooCommerce";
import { useRouter } from 'next/router'
import styled from "styled-components";
import Link from "next/link";

function Product({ backgroundColor}) {
    const router = useRouter()
    const [products, setProducts] = useState()

  //Get all products from woocommerce categories
    useEffect(() => {
        async function getAllProducts() {
            const category = await Woocommerce.getCategoryBySlug(router.query.category)
            console.log('categoryy',category)
            
            const productsByC = await Woocommerce.getProductsByCategory(category[0].id)
            console.log(productsByC)
            setProducts(productsByC)
        }
        getAllProducts()
        
    },[])



    return (
        <Style style={{ '--backgroundColor': backgroundColor }}>
            <div className="contained">
                <div className="containerBox">
                    {products && products.map((product, index) => (
                        <Link  className='wrapper' href={`/product/${product.slug}`} key={index}>
                            <div className="overlay"></div>
                            {product.images && <div className='imageBox'><img src={product.images[0].src} /></div>}
                            <div className="infoWrapper">
                                <div className="info">
                                <p>{product.name}</p>
                                <p>{product.price} Kr</p>
                                </div>
                                <div className="button">
                                <p>Add to cart</p>
                                </div>
                            </div>
                            

                        </Link>
                    ))}

                </div>
            </div>

        </Style>
    )
}

export default Product;

const Style = styled.section`
background-color: var(--backgroundColor);


.contained{
    .containerBox{
        padding: 75px 0;
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

        a{
            text-decoration: none;
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




