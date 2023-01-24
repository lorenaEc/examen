import Stripe from "stripe";
import { useContext } from "react";
import { CartContext } from "../../src/Context/cartContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";



import React from 'react'

function Checkout() {

    const { cart, setcart } = useContext(CartContext)

    const createCheckOutSession = async () => {
        const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
        const stripePromise = loadStripe(publishableKey);
        const stripe = await stripePromise;
        const checkoutSession = await axios.post("/api/createStripeSession", {
            items: cart,
            email: 'test@gmail.com'
        })
       
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
        if (result.error) {
          alert(result.error.message);
        }
      };
 
      //Loop prices to get totalprice
      let total = 0;
      for ( let product of cart) {
          total += Number(product.price * product.quantity) 
      }
   
 //Format currency
 const formatter = new Intl.NumberFormat('se-SE', {
    style: 'currency',
    currency: 'SEK',
  
  });
  
 const formatPrice = formatter.format(total)

  return (
    <Style>
          <div className='productWrapper'>
              {cart.length < 1 && <h3 className='empty'>Varukorgen är tom</h3>}
              {cart && cart.map((product, index) => {

                  const priceSingle = formatter.format(product.price)
                  const priceTotalFormat = formatter.format(product.price * product.quantity)

                  return (
                      <div className='productContainer' key={index}>
                          <div className='firstContainer'>
                              <div className='imgBox'><img src={product.img} /></div>
                              <div className='infoBox'>
                                  <h5>{product.title}</h5>
                                  <b>{priceSingle}</b>
                                  <div>Antal: {product.quantity}</div>
                                  <div>Summa: <b> {priceTotalFormat}</b></div>

                                  <div className='qtyBox'>
                                      <div className='qty'>
                                          <div onClick={() => dec(product.id)} className='border'>-</div>
                                          <b>{product.quantity}</b>
                                          <div onClick={() => inc(product.id)} className='border'><div className='plus'>+</div></div>
                                      </div>
                                      <div onClick={() => remove(product.id)} className='icon'><svg width="18" height="20" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd" d="M8.20013 2.14853C8.25838 2.06893 8.36997 2 8.51726 2C8.66455 2 8.77615 2.06893 8.83439 2.14853C9.07622 2.47901 9.60356 3.04615 10.4223 3.04615H15.1247C15.2117 3.04615 15.2793 3.07891 15.322 3.11938C15.3638 3.15896 15.3762 3.19845 15.3762 3.23155C15.3762 3.26464 15.3638 3.30413 15.322 3.34371C15.2793 3.38412 15.2119 3.41684 15.1251 3.41694C15.1249 3.41694 15.1248 3.41694 15.1247 3.41694H2.25155C2.25142 3.41694 2.25128 3.41694 2.25114 3.41694C2.16428 3.41684 2.09689 3.38412 2.05423 3.34371C2.01244 3.30413 2 3.26464 2 3.23155C2 3.19845 2.01244 3.15897 2.05423 3.11938C2.09696 3.07891 2.16449 3.04615 2.25155 3.04615H6.61224C7.43097 3.04615 7.95831 2.47901 8.20013 2.14853ZM0.829117 4.925C0.330163 4.53251 0 3.93335 0 3.23155C0 1.97411 1.05992 1.04615 2.25155 1.04615H6.51998L6.52325 1.04284C6.54192 1.02374 6.56332 0.998606 6.5861 0.967481C7.0213 0.372724 7.73268 0 8.51726 0C9.30185 0 10.0132 0.372724 10.4484 0.967481C10.4712 0.998606 10.4926 1.02374 10.5113 1.04284L10.5145 1.04615H15.1247C16.3163 1.04615 17.3762 1.97411 17.3762 3.23155C17.3762 3.93334 17.0461 4.5325 16.5471 4.92499V15.1902C16.5471 17.9516 14.3085 20.1902 11.5471 20.1902H5.82912C3.0677 20.1902 0.829117 17.9516 0.829117 15.1902V4.925ZM2.82912 5.41694V15.1902C2.82912 16.847 4.17227 18.1902 5.82912 18.1902H11.5471C13.204 18.1902 14.5471 16.847 14.5471 15.1902V5.41694H2.82912ZM6.13755 7.52742C6.13755 6.97513 5.68984 6.52742 5.13755 6.52742C4.58527 6.52742 4.13755 6.97513 4.13755 7.52742V15.0245C4.13755 15.5768 4.58527 16.0245 5.13755 16.0245C5.68984 16.0245 6.13755 15.5768 6.13755 15.0245V7.52742ZM8.83387 6.52742C9.38616 6.52742 9.83387 6.97514 9.83387 7.52742V15.0245C9.83387 15.5768 9.38616 16.0245 8.83387 16.0245C8.28159 16.0245 7.83387 15.5768 7.83387 15.0245V7.52742C7.83387 6.97514 8.28159 6.52742 8.83387 6.52742ZM12.5302 6.52742C13.0825 6.52742 13.5302 6.97514 13.5302 7.52742V15.0245C13.5302 15.5768 13.0825 16.0245 12.5302 16.0245C11.9779 16.0245 11.5302 15.5768 11.5302 15.0245V7.52742C11.5302 6.97514 11.9779 6.52742 12.5302 6.52742Z" fill="#373D2F" />
                                      </svg></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })}
              {cart.length > 0 &&
                  <div className='totalBox'>
                      <div className='total'>
                          <h5> Total</h5>
                          <h5><b>{formatPrice}</b></h5>

                      </div>
                      <div className='button' onClick={() => createCheckOutSession()}>Till betalning</div>

                  </div>
              }
          </div>
          </Style>
  )
}

const Style = styled.div`
margin-top: 200px;
.productWrapper{ 
        width:100%;
        overflow-y: auto;
        overflow-x: hidden;

        .empty{
            display:flex;
            justify-content:center;
            margin:40px 0;
            color:var(--color-dark-green);
        }
        .productContainer{
            margin:15px 0;
            background-color:var(--color-white);
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

            .firstContainer{
                display:flex;
                justify-content: space-around;

                .imgBox{
                    width:180px;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

                .infoBox{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    gap:10px;
                    width: 200px;

                    .qtyBox{
                        display:flex;
                        padding-top:20px;
                        gap:50px; 

                        .icon :hover{
                            fill:red;
                        }

                    .qty{
                        display:flex;
                        gap:15px; 

                        .border{
                            cursor: pointer;
                            width:20px;
                            height:20px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            border:1px solid var(--color-dark-green);
                            border-radius:50px;

                            .plus {
                                margin-bottom: 2px;
                            }
                        }
                    }

                    }

                }

            }

        }

        .totalBox{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-top:80px;
            width: 100%;
            padding: 0 30px;
            margin-bottom:30px;

            .total{
                margin:20px 0;
                width: 87%;
                display:flex;
                justify-content:space-between
            }

            .button{
                margin-top:20px;
                background-color:var(--color-green);
                color:var(--color-beige);
                text-decoration:none;
                width: 87%;
                padding:15px 0;
                text-align:center;
                cursor: pointer;
                
            }

        }
        

    }
`

export default Checkout