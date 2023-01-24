import React from "react";
import Link from "next/link";
import styled from "styled-components";
import MobileMenu from "../popups/MobileMenu";
import { useDevices } from "../utils/LayoutHandler";
import { useState, useEffect } from "react";
import CartPopup from "../popups/CartPopup";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

export default function Menu() {
    const [toggle, setToggle] = useState(false)
    const [toggleCart, setToggleCart] = useState(false)
    const [scrollPx, setScrollPx] = useState(0)
    const [mobile, tablet, desktop] = useDevices();
    const { cart, setcart } = useContext(CartContext)

    //Get Y px when you scroll
    useEffect(() => {
        const scrollY = () => {
            setScrollPx(window.scrollY)
        }

        addEventListener('scroll', scrollY)
    }, [])


    //Open mobile an tablet meny
    const toggleMenu = () => {
        setToggle(true)
    }

    const toggleCartHandle = () => {
        setToggleCart(true)
    }

    let items = 0;
    for (let product of cart) {
        items += product.quantity
    }

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

    return (
        <>
            <Styled>
                <div className={scrollPx > 90 ? 'scroll' : 'scrollOff'}>
                    <div className='contained'>
                        <div className="menuContainer">
                            <Link href={'/'}><img className='logo' src="/icons/fill.svg" /></Link>
                            {desktop ?
                                <>
                                    <div className="navContainer">
                                        <div className="dropDownContainer">
                                            <Link className="nav" href={'#collection'}>Kategorier</Link>
                                            <div className="dropDownContent">
                                                <Link className="dropDownItem" href={"/shop/taklampor"}><span className="h4">Taklampor</span></Link>
                                                <Link className="dropDownItem" href={"/shop/bordslampor"}><span className="h4">Bordslapor</span></Link>
                                                <Link className="dropDownItem" href={"/shop/golvlampor"}><span className="h4">Golvlampor</span></Link>
                                            </div>
                                        </div>

                                        <Link className="nav" href={'/om-oss'}>Om oss</Link>
                                        <Link className="nav" href={'/kontakt'}>Kontakt</Link>
                                    </div>

                                    <div className="icons">
                                        {/* <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.24132 11.3043L12.0922 11.3043C13.776 10.6727 15.0668 8.95192 15.0668 6.78261C15.0668 4.03025 12.989 2 10.6668 2C8.34454 2 6.26677 4.03025 6.26677 6.78261C6.26677 8.95192 7.55749 10.6727 9.24132 11.3043ZM6.09761 11.5319C4.96513 10.3084 4.26677 8.63192 4.26677 6.78261C4.26677 3.03668 7.13214 0 10.6668 0C14.2014 0 17.0668 3.03668 17.0668 6.78261C17.0668 8.63194 16.3684 10.3084 15.2359 11.5319C18.7357 12.3857 21.3333 15.5417 21.3333 19.3043V23C21.3333 24.6568 19.9902 26 18.3333 26H3C1.34315 26 -6.83358e-08 24.6568 0 23L1.52431e-07 19.3043C3.07627e-07 15.5416 2.59774 12.3856 6.09761 11.5319ZM8.90284 13.3043H8C4.68629 13.3043 2 15.9906 2 19.3043L2 23C2 23.5523 2.44772 24 3 24H18.3333C18.8856 24 19.3333 23.5523 19.3333 23V19.3043C19.3333 15.9906 16.647 13.3043 13.3333 13.3043H12.4307C11.8704 13.4742 11.2786 13.5652 10.6668 13.5652C10.0549 13.5652 9.46317 13.4742 8.90284 13.3043Z" fill="#373D2F" />
                                        </svg> */}

                                        <div className="cartWrap">
                                            <svg className="cart" onClick={toggleCartHandle} width="30" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M31.6384 1.34561C31.852 0.836268 31.6068 0.263726 31.0908 0.0667979C30.5748 -0.130131 29.9834 0.123127 29.7699 0.632465L27.9155 5.0559C27.6201 4.95818 27.3021 4.90481 26.968 4.90481H3.0024C0.943635 4.90481 -0.503372 6.93111 0.164784 8.87844L3.88603 19.7239C4.30196 20.9362 5.44204 21.7503 6.72364 21.7503H23.2467C24.5283 21.7503 25.6684 20.9362 26.0843 19.7239L29.8056 8.87844C30.1114 7.98706 29.9741 7.07913 29.5377 6.35657L31.6384 1.34561ZM27.1347 6.91843L26.7183 7.91169C26.5048 8.42103 26.7499 8.99357 27.2659 9.1905C27.3629 9.22752 27.4626 9.24863 27.5619 9.25512L24.1926 19.0748C24.054 19.4789 23.6739 19.7503 23.2467 19.7503H6.72364C6.29644 19.7503 5.91642 19.4789 5.77777 19.0748L2.05653 8.22935C1.83381 7.58025 2.31614 6.90481 3.0024 6.90481H26.968C27.025 6.90481 27.0807 6.90949 27.1347 6.91843ZM23.7429 27.0841C23.7429 28.6056 22.4224 29.9973 20.5935 29.9973C18.7646 29.9973 17.4441 28.6056 17.4441 27.0841C17.4441 25.5626 18.7646 24.1708 20.5935 24.1708C22.4224 24.1708 23.7429 25.5626 23.7429 27.0841ZM25.7429 27.0841C25.7429 29.7976 23.4374 31.9973 20.5935 31.9973C17.7496 31.9973 15.4441 29.7976 15.4441 27.0841C15.4441 24.3706 17.7496 22.1708 20.5935 22.1708C23.4374 22.1708 25.7429 24.3706 25.7429 27.0841ZM11.9728 27.0841C11.9728 28.6056 10.6523 29.9974 8.82341 29.9974C6.99454 29.9974 5.67402 28.6056 5.67402 27.0841C5.67402 25.5626 6.99454 24.1709 8.82341 24.1709C10.6523 24.1709 11.9728 25.5626 11.9728 27.0841ZM13.9728 27.0841C13.9728 29.7976 11.6673 31.9974 8.82341 31.9974C5.97948 31.9974 3.67402 29.7976 3.67402 27.0841C3.67402 24.3706 5.97948 22.1709 8.82341 22.1709C11.6673 22.1709 13.9728 24.3706 13.9728 27.0841Z" fill="#373D2F" />
                                            </svg>
                                            {items !== 0 && <div className="circle" onClick={toggleCartHandle}>{items}</div>}
                                        </div>
                                    </div>
                                </>
                                :
                                <>

                                    <div className="icons">
                                        <svg onClick={toggleCartHandle} width="30" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M31.6384 1.34561C31.852 0.836268 31.6068 0.263726 31.0908 0.0667979C30.5748 -0.130131 29.9834 0.123127 29.7699 0.632465L27.9155 5.0559C27.6201 4.95818 27.3021 4.90481 26.968 4.90481H3.0024C0.943635 4.90481 -0.503372 6.93111 0.164784 8.87844L3.88603 19.7239C4.30196 20.9362 5.44204 21.7503 6.72364 21.7503H23.2467C24.5283 21.7503 25.6684 20.9362 26.0843 19.7239L29.8056 8.87844C30.1114 7.98706 29.9741 7.07913 29.5377 6.35657L31.6384 1.34561ZM27.1347 6.91843L26.7183 7.91169C26.5048 8.42103 26.7499 8.99357 27.2659 9.1905C27.3629 9.22752 27.4626 9.24863 27.5619 9.25512L24.1926 19.0748C24.054 19.4789 23.6739 19.7503 23.2467 19.7503H6.72364C6.29644 19.7503 5.91642 19.4789 5.77777 19.0748L2.05653 8.22935C1.83381 7.58025 2.31614 6.90481 3.0024 6.90481H26.968C27.025 6.90481 27.0807 6.90949 27.1347 6.91843ZM23.7429 27.0841C23.7429 28.6056 22.4224 29.9973 20.5935 29.9973C18.7646 29.9973 17.4441 28.6056 17.4441 27.0841C17.4441 25.5626 18.7646 24.1708 20.5935 24.1708C22.4224 24.1708 23.7429 25.5626 23.7429 27.0841ZM25.7429 27.0841C25.7429 29.7976 23.4374 31.9973 20.5935 31.9973C17.7496 31.9973 15.4441 29.7976 15.4441 27.0841C15.4441 24.3706 17.7496 22.1708 20.5935 22.1708C23.4374 22.1708 25.7429 24.3706 25.7429 27.0841ZM11.9728 27.0841C11.9728 28.6056 10.6523 29.9974 8.82341 29.9974C6.99454 29.9974 5.67402 28.6056 5.67402 27.0841C5.67402 25.5626 6.99454 24.1709 8.82341 24.1709C10.6523 24.1709 11.9728 25.5626 11.9728 27.0841ZM13.9728 27.0841C13.9728 29.7976 11.6673 31.9974 8.82341 31.9974C5.97948 31.9974 3.67402 29.7976 3.67402 27.0841C3.67402 24.3706 5.97948 22.1709 8.82341 22.1709C11.6673 22.1709 13.9728 24.3706 13.9728 27.0841Z" fill="#373D2F" />
                                        </svg>

                                        <svg onClick={toggleMenu} width="36" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1.96162L15.9382 1.96163" stroke="#373D2F" />
                                            <path d="M0 9.96162L15.9382 9.96163" stroke="#373D2F" />
                                            <path d="M0 5.96162L15.9382 5.96163" stroke="#373D2F" />
                                            <path d="M0 13.9616L15.9382 13.9616" stroke="#373D2F" />
                                        </svg>
                                    </div>

                                </>
                            }

                        </div>
                    </div>
                </div>
            </Styled>
            {!desktop &&
                <MobileMenu active={toggle} setToggle={setToggle} />
            }
            <CartPopup active={toggleCart} setToggleCart={setToggleCart} />
        </>
    )

}

const Styled = styled.header`
position: sticky;
top: 0;
z-index: 998;
margin-top: -100px;

.scrollOff {
    background-color: transparent;
    transition: ease .4s;
}

.scroll {
    background-color: var(--color-white);
    transition: ease .4s;
}

.contained{
    
    .menuContainer{
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-weight: 530px;

        .logo{
            .mobile & {
                width: 50px;
                height: 50px;
            }
        }
        

        .navContainer{
            display: flex;
            gap: 50px;
            
            .nav{
                color: var(--color-dark-green);
                text-decoration:none;
            }

            .dropDownContainer {
                display: flex;
                flex-direction: column;
                position: relative;

                &:hover > .dropDownContent {
                    opacity: 1;
                    visibility: visible;
                }
                

                .dropDownContent {
                    padding-top: 49px;
                    position: absolute;
                    opacity: 0;
                    visibility: hidden;
                    cursor: pointer;
                    transition: ease-in-out .2s;

                    .dropDownItem {
                        padding: 0 30px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        color: var(--color-dark-green);

                        &:nth-child(1) {
                            background-color: var(--color-dark-beige);
                        }

                        &:nth-child(2) {
                            background-color: var(--color-beige);
                        }

                        &:nth-child(3) {
                            background-color: var(--color-white);
                        }
                    }
                }

            } 
        }

        .icons{
            display: flex;
            gap: 15px;
            align-items: center;

            .mobile &{
                gap: 10px;
            }

            .cartWrap {
                position: relative;
                margin-top: 5px;

                .cart{
                    cursor: pointer;
                }

                .circle {
                width: 20px;
                height: 20px;
                border-radius: 50px;
                background-color: var(--color-dark-green);
                color: var(--color-white);
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: -5px;
                left: 0px;
                cursor: pointer;
            }
            }

            

        }

        
    }
}
    
`