import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../Context/cartContext'

//Mobile popup cart
function CartPopup({ active, setToggle }) {
    const {cart, setcart} = useContext(CartContext)
    console.log(cart)

    //Closing cart
    const close = () => {
        setToggle(false)
    }
    return (
        <Styled active={active}>
            <div className='overlay'></div>
            <div className='cartContainer'>
                <div className='cartHeader'>
                    <div onClick={close}><svg width="25" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.17725L19 15.2851" stroke="#373D2F" />
                        <path d="M1 15.4685L18.578 1.17725" stroke="#373D2F" />
                    </svg>
                    </div>
                </div>
                <div className='productWrapper'>
                    {cart && cart.map((product, index) => {
                        
                        return(
                        <div className='productContainer'>
                        <div className='imgBox'><img src={product.img}/></div>
                        <div className='infoBox'>
                            <div>{product.title}</div>
                            <div>{product.price} Kr</div>
                            <div>Antal: {product.quantity}</div>
                        </div>
                                <div className='qtyBox'>
                                    <div>+</div>
                                    <div>{product.quantity}</div>
                                    <div>-</div>
                                    <div><svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20013 2.14853C8.25838 2.06893 8.36997 2 8.51726 2C8.66455 2 8.77615 2.06893 8.83439 2.14853C9.07622 2.47901 9.60356 3.04615 10.4223 3.04615H15.1247C15.2117 3.04615 15.2793 3.07891 15.322 3.11938C15.3638 3.15896 15.3762 3.19845 15.3762 3.23155C15.3762 3.26464 15.3638 3.30413 15.322 3.34371C15.2793 3.38412 15.2119 3.41684 15.1251 3.41694C15.1249 3.41694 15.1248 3.41694 15.1247 3.41694H2.25155C2.25142 3.41694 2.25128 3.41694 2.25114 3.41694C2.16428 3.41684 2.09689 3.38412 2.05423 3.34371C2.01244 3.30413 2 3.26464 2 3.23155C2 3.19845 2.01244 3.15897 2.05423 3.11938C2.09696 3.07891 2.16449 3.04615 2.25155 3.04615H6.61224C7.43097 3.04615 7.95831 2.47901 8.20013 2.14853ZM0.829117 4.925C0.330163 4.53251 0 3.93335 0 3.23155C0 1.97411 1.05992 1.04615 2.25155 1.04615H6.51998L6.52325 1.04284C6.54192 1.02374 6.56332 0.998606 6.5861 0.967481C7.0213 0.372724 7.73268 0 8.51726 0C9.30185 0 10.0132 0.372724 10.4484 0.967481C10.4712 0.998606 10.4926 1.02374 10.5113 1.04284L10.5145 1.04615H15.1247C16.3163 1.04615 17.3762 1.97411 17.3762 3.23155C17.3762 3.93334 17.0461 4.5325 16.5471 4.92499V15.1902C16.5471 17.9516 14.3085 20.1902 11.5471 20.1902H5.82912C3.0677 20.1902 0.829117 17.9516 0.829117 15.1902V4.925ZM2.82912 5.41694V15.1902C2.82912 16.847 4.17227 18.1902 5.82912 18.1902H11.5471C13.204 18.1902 14.5471 16.847 14.5471 15.1902V5.41694H2.82912ZM6.13755 7.52742C6.13755 6.97513 5.68984 6.52742 5.13755 6.52742C4.58527 6.52742 4.13755 6.97513 4.13755 7.52742V15.0245C4.13755 15.5768 4.58527 16.0245 5.13755 16.0245C5.68984 16.0245 6.13755 15.5768 6.13755 15.0245V7.52742ZM8.83387 6.52742C9.38616 6.52742 9.83387 6.97514 9.83387 7.52742V15.0245C9.83387 15.5768 9.38616 16.0245 8.83387 16.0245C8.28159 16.0245 7.83387 15.5768 7.83387 15.0245V7.52742C7.83387 6.97514 8.28159 6.52742 8.83387 6.52742ZM12.5302 6.52742C13.0825 6.52742 13.5302 6.97514 13.5302 7.52742V15.0245C13.5302 15.5768 13.0825 16.0245 12.5302 16.0245C11.9779 16.0245 11.5302 15.5768 11.5302 15.0245V7.52742C11.5302 6.97514 11.9779 6.52742 12.5302 6.52742Z" fill="#373D2F" />
                                    </svg></div>
                                </div>
                            </div>
                        )
                    })}

                    <div className='totalBox'>
                        <div className='total'> Total</div>
                        <Link href={'/checkout'}> Till kassan</Link>

                    </div>
                    
                </div>

            </div>
        </Styled>
    )
}
const Styled = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
transition: ease .4s;
top: 0;
z-index: 999;
overflow: hidden;
visibility: hidden;
opacity: 0;
    ${props => {
        if (props.active) {
            return `
            visibility: visible;
            opacity: 1;
        `
        } else {
            return `
            visibility: hidden;
            opacity: 0;
        `
        }
    }}
    .overlay {
        background-color: black;
        opacity: .6;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        position: absolute;
    }
.cartContainer{
    width: 55vh;
    height: 100vh;
    position: absolute;
    background-color: beige;
    right: -100%;
    display: flex;
    padding: 20px 15px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: start;
    text-decoration: none;
    z-index: 9999;
    opacity: 1;
    transition: ease .4s;
    ${props => {
        if (props.active) {
            return `
            right: 0;
        `
        } else {
            return `
            right: -100%;
        `
        }
    }}
    
}
`
export default CartPopup