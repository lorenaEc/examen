import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

function FullImage({image, title, textColor, button} ) {
  return (
    <Style style={{
        backgroundImage: `url(${image.url})`,
        '--textColor' : textColor
    }}>
        <div className='contained'>
        <div className='wrapper'>
          {title && <div className='h2'>{title}</div>}
          {button.link && <Link className='btn' href={button.link}>{button.linkTitle}</Link>}
          </div>
        </div>
    </Style>
    
  )
}

export default FullImage

const Style = styled.section`
width: 100%;
height: 75vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: var(--textColor);

.contained {
    height: 100%;
    .wrapper{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .h2{

            color: var(--textColor);
            text-align: center;
        }

        .btn{
            margin-top: 50px;
            padding: 10px 50px;
            background-color: var(--color-dark-green);
            color: var(--color-white);
            text-decoration: none;

            .mobile & {
                margin-top: 30px;
            }
        }
    }
}
`
