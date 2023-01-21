import React from "react"
import Woocommerce from "../../src/WooCommerce"
import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../../src/Context/cartContext";
import Cart from "../../src/Functions/cart";
import Product from "../../src/blocks/Product/Product";


export default function SingleProduct({ product }) {
  const { cart, setcart } = useContext(CartContext)
  const [qty, setQty] = useState(1)
  console.log(product)

  const data = [
    {
        title: "Säkra betalningar",
        icon: '/icons/check.svg'
    },
    {
        title: "Trygg leverans",
        icon: '/icons/check.svg'
    },
    {
        title: "Fri frakt över 700 kr",
        icon: '/icons/check.svg'
    }
]

  return (
    <Style >
      <div className="container">
        <div className="contained small">
          <div className="imgBox">
            <img src={product.images[0].src} />
          </div>

          <div className="infoBox">
            <h2>{product.name}</h2>
            <h5 className="h4">{product.price} Kr</h5>
            <div className="description" dangerouslySetInnerHTML={{ __html: product.short_description }}></div>

            <div className="qtyBox">
              <div className="qty">
                <div className="min" onClick={() => Cart.decrementQty(qty, setQty)} ><b>-</b></div>
                <p>{qty}</p>
                <div className="plus" onClick={() => Cart.incrementQty(qty, setQty)}><b>+</b></div>
              </div>
              <p className='btn' onClick={() => Cart.addToCart(cart, setcart, qty, product)}>Lägg i varukorgen</p>

            </div>

          </div>

        </div>
        <div className="block">
          <div className="contained small blockInfo">
            <div className="wrapper">
              <div className="pInfo">
                <div className="h5">Produktinformation</div>
                <div className="des" dangerouslySetInnerHTML={{ __html: product.description }}></div>
              </div>
              <div className='sInfo'>
                <p className="h5">Specifikation</p>
                <p>Bredd: {product.dimensions.width}</p>
              </div>

            </div>


            <div className="checkBoxes">
              {data && data.map((c, index) => (
                <div className="checkBox" key={index}>
                  <img src={c.icon} />
                  <p className="p">{c.title}</p>
                </div>
              ))}

            </div>



          </div>

        </div>


      </div>
      
      <Product product={product} backgroundColor={'var(--color-dark-beige)'} title={'Vi rekommenderar'}/>
    </Style>
  )
}


export async function getServerSideProps(context) {
  let slug = context.params.product_slug;
  let product = await Woocommerce.getProductBySlug(slug);


  return {
    props: {
      product
    }
  }
}

const Style = styled.div`
padding-top: 200px;

.container{

  .contained.small {
    display: flex;
    justify-content: space-between;

    .mobile &{
        display: flex;
        flex-direction: column;
      }

    .imgBox{
      width: 50%;
      height: 500px;
      display: flex;
      justify-content: center;
      border: 1px solid ;

      .mobile &{
        width: 100%;
        height: 450px;
      }

      img{
        width: 70%;
        height: 100%;
        object-fit: cover;
        
        .mobile &{
        width: 100%;
        height: 100%;
      }

      }

    }

    .infoBox{
      display: flex;
      flex-direction: column;
      gap:20px;
      justify-content: center;

      .mobile &{
        margin-top: 50px;
        align-items: center;
        text-align: center;
      }


      .description{
        max-width: 390px;

        .mobile &{
          max-width: 300px;
        }

      }


      .qtyBox{
        display: flex;
        gap: 15px;
        margin-top: 25px;
        justify-content: space-between;

        .mobile & {
          justify-content: start;
          max-width: 400px;
        }


        .qty{
          display: flex;
          gap: 10px;
          align-items: center;

          .min{
            display: flex;
            cursor: pointer;
            width:23px;
            height:23px;
            border:1px solid var(--color-dark-green);
            border-radius:50px;
            align-items:center;
            justify-content:center;

            b{
              margin-bottom: 2px;
              color: var(--color-dark-green);
            }
         
          }

          .plus{
            display: flex;
            cursor: pointer;
            width:23px;
            height:23px;
            border:1px solid var(--color-dark-green);
            border-radius:50px;
            align-items:center;
            justify-content:center;

            b{
              margin-bottom: 2px;
              color: var(--color-dark-green);
            }
          }
          
      
        }

        .btn{
          width: 60%;
          padding: 5px 0;
          color: var(--color-beige);
          background-color: var(--color-green);
          text-align: center;
          cursor: pointer;

          .mobile & {
            padding: 5px 10px;
          }


        }

      
      }
    
    }

  }
  .block{
    display: flex;
    margin-top: 75px ;
    padding: 75px 0px;
    background-color: var(--color-beige);

    .contained.small.blockInfo{
      display: flex;
      width:100%;

      .wrapper{
        color: var(--color-dark-green);

        .mobile &{
          padding: 0px 50px;
        }
        
      .pInfo{

        p{
          margin-top: 10px;
        }
     
      }

      .sInfo{
        margin-top: 30px;

        p{
          margin-top: 10px;
        }
      }

      }


      .checkBoxes{
        padding: 50px;
        background-color: var(--color-white);
        border-radius:10px;

        .mobile & {
          margin-top: 50px;
          padding: 30p
        }

        .checkBox{
          display: flex;
          align-items: center;
          margin: 15px;
          gap: 15px;
        }
      }
    }
  }
}

`