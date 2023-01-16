import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

//Mobile popup meny
function MobileMenu({ active, setToggle }) {

    //Closing menu
    const close = () => {
        setToggle(false)
    }
    //Open and closing Category dropdown
    const [categoryOpen, setcategoryOpen] = useState(false)
    const toggleCategory = () => {
        setcategoryOpen(!categoryOpen);
    }
    return (
        <Styled active={active}>
            <div className='overlay'></div>
            <div className='mobileContainer'>
                <div onClick={close}><svg width="25" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.17725L19 15.2851" stroke="#373D2F" />
                    <path d="M1 15.4685L18.578 1.17725" stroke="#373D2F" />
                </svg>
                </div>
                <div className="navContainer">
                    <div className="dropDownContainer">
                        <div className="h3" onClick={toggleCategory}>Kategorier</div>
                        <div className={`dropDownContent ${categoryOpen ? 'open' : ''}`}>
                            <Link className="dropDownItem" href={"/shop/taklampor"}><span className="h4">Taklampor</span></Link>
                            <Link className="dropDownItem" href={"/shop/bordslampor"}><span className="h4">Bordslapor</span></Link>
                            <Link className="dropDownItem" href={"/shop/golvlampor"}><span className="h4">Golvlampor</span></Link>
                        </div>
                    </div>
                    <Link className="h3" href={'/om-oss'}>Om oss</Link>
                    <Link className="h3" href={'/kontakt'}>Kontakt</Link>
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
.mobileContainer{
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
    .navContainer{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        width: 100%;
        .dropDownContent{
            display: flex;
            flex-direction: column;
            transition: ease .4s;
            height: 0px;
            gap: 20px;
            overflow: hidden;
           .dropDownItem{
            text-decoration: none;
            color:var(--color-dark-green);
            text-align: end;
           }
            &.open {
                height: 140px;
                margin-top: 30px;
            }
        }
        .h3{
            text-decoration: none;
            color:var(--color-dark-green);
            border-bottom: 1px solid var(--color-dark-green);
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
}
`
export default MobileMenu