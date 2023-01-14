import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useDevices } from '../../utils/LayoutHandler'

/**
 * Text block.
 */

const TextBlock = ({ title, description, text, link, linkText, textColor, backgroundColor, ...rest }) => {
const [mobile, tablet, desktop] = useDevices()
    return (
        <Style style={{'--backgroundColor': backgroundColor, '--textColor': textColor}}>
            <div className='contained'>
                <div className='left'>
                    <h2 className='h1'>{title}</h2>
                    <div className='p'  dangerouslySetInnerHTML={{ __html: description }} />
                   {!desktop && <Link className='link' href={link}>{linkText}</Link>}

                </div>

                <div className='right'>
                    <div  dangerouslySetInnerHTML={{ __html: text }} ></div>
                    <Link className='link' href={link}>{linkText}</Link>

                </div>
            </div>

        </Style>

    )
}


export default TextBlock;

const Style = styled.section`
height: 60vh;
background-color: var(--backgroundColor);
color: var(--textColor);
padding:100px 0;

    .mobile &, .tablet &{
        height: auto;
    }

    .contained{
    display: flex;
    gap: 20px;

    .mobile &, .tablet &{
        flex-direction: column;
    }

    .left{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap:30px;

        .link{
            color:var(--textColor)
        }

        .mobile &, .tablet &{
        width:100%;
        text-align: center;


    }

    }

    .right{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap:30px;

        .link{
            color:var(--textColor)
        }

        .mobile &, .tablet &{
        display: none;


    }
    }
    }


`


