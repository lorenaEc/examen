import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

function MobileMenu({ active, setToggle }) {
    
    const close = () => {
        setToggle(false)
    }

    const [categoryOpen, setcategoryOpen] = useState(false)
    const toggleCategory = () => {
        setcategoryOpen(!categoryOpen);
    }

    return (
        <Styled active={active}>
            <div className='mobileContainer'>
                <div onClick={close}><svg width="25" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.17725L19 15.2851" stroke="#373D2F" />
                    <path d="M1 15.4685L18.578 1.17725" stroke="#373D2F" />
                </svg>
                </div>
                <div className="navContainer">
                    <div className="dropDownContainer">
                        <div className="h3" onClick={toggleCategory}>Kategorier</div>
                        <div  className={`dropDownContent ${categoryOpen ? 'open' : ''}`}>
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
width: 55vw;
height: 100vh;
background-color: var(--color-beige);
position: absolute;
right: 0;
top: 0;
transition: ease .4s;
transform: translateX(100%);

.mobileContainer{
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    text-decoration: none;

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

/* ${props => {
        if (props.active) {
            return `
        transform: translateX(0%);
        `
        } else {
            return `
        transform: translateX(100%);
        `
        }
    }} */

`

export default MobileMenu