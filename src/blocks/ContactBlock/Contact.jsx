

import styled from "styled-components"
import Link from "next/link";

function Contact({backgroundColor, title, textColor}){

    const data = [
        {
            label: "Instagram",
            icon: '/icons/instagram.svg',
            link: 'https://www.instagram.com/'
        },
        {
            label: "Mail",
            icon: '/icons/Message.svg',
            link: 'mailto:lorena.echeverry@hotmail.com'
        },
        {
            label: "Ring",
            icon: '/icons/Phone.svg',
            link:'tel:0735173059'
        }
    ]

    return (
        <Style style={{ '--backgroundColor': backgroundColor, '--textColor': textColor }}>
            <div className="contained small">
                <div className="wrapper">
                    <div className="h3">{title}</div>
                    <div className="boxes">
                        {data && data.map((b, index) => (
                            <Link href={b.link} className="box" key={index}>
                                <img className="icon" src={b.icon} />
                                <p>{b.label}</p>
                            </Link>
                        ))}
                    </div>




                </div>
            </div>
        </Style>
    )

}

export default Contact;

const Style = styled.section`
padding: 100px 0px;
background-color: var(--backgroundColor);
color: var(--textColor);

    a{
        text-decoration:none;
    }

    .mobile &{
        padding: 75px 0px;
    }

.contained{
    .wrapper{
        .h3{
            display: flex;
            justify-content: center;

            .mobile &{
                text-align: center;
          
            }
        }

        .boxes{
            padding-top:75px;
            display: flex;
            justify-content: center;
  
            .mobile &{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top:30px;
            gap: 30px;
           
            } 

            .box{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                border: #aba7a7 solid 1px;
                width: 250px;
                height:130px;
                margin: 0px 15px;
                border-radius: 10px;
                background-color: var(--color-white);

                :hover {
                    border: #7C846D solid 1px;
                }
          
            }
                    .icon{
                    width: 40px;
                    height: 40px;
                    color: var(--color-dark-green);
                    fill: var(--color-dark-green)!important;
                    }

                p{
                    margin-top: 15px;
                    color: var(--color-dark-green);
                    
                }
        }
    }

    

}
`
