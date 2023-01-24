import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useDevices } from "../../utils/LayoutHandler";
import Link from "next/link";

const Split = ({ image, link, buttonTitle, title, description, layout }) => {
    const [mobile, tablet, desktop] = useDevices()
    return (
        <Style className={`split ${layout == 'right' ? 'imageRight' : ''}`}>
            	<div className="left">
                    {image && <Image
                    className="image"
                    src={image.src} 
                    alt={image.alt} 
                    width={1392} 
                    height={1392} 
                    loading={'eager'} 
                    priority={true} />}
                </div>
                <div className='rightBox'>
                    <div className='contained'>
              
                    <h2>{title} </h2> 
                    <div className='box' dangerouslySetInnerHTML={{ __html: description }} />
                 {link && buttonTitle &&  <Link className='link' href={link}>{buttonTitle}</Link>} 

                    </div>
                </div>

        </Style>

    )
}


export default Split;

const Style = styled.section`
color: var(--color-dark-green);

.desktop & {
/* max-height: 80vh; */
}

&.split{
    display: flex;

    .mobile &, .tablet &{
        flex-direction: column;
    }

    &.imageRight {
        flex-direction: row-reverse;

          .mobile &, .tablet &{
            flex-direction: column;
          }
    }
    
    .left{
        width: 50%;
        height: 75vh;

        .mobile &, .tablet &{
             width:100%;
             height: 70vh;
    }

        .image {

            width: 100%!important;
            height: 100%!important;
            object-fit: cover;
            object-position: top;
        }
    }

    .rightBox {
        width: 50%;

        .mobile &, .tablet &{
             width:100%;
             height: 50vh;

    }

        
        .contained {
            height: 100%;
            display: flex;
            gap: 50px;
            text-align: center;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .box {
                max-width: 280px;
            }

            .link{
                color: var(--color-white);
                background-color: var(--color-green);
                padding: 12px 45px;
                text-decoration: none;
            }
        }
    }
}
`