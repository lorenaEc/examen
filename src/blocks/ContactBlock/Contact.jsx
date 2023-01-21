

import styled from "styled-components"
import Link from "next/link";

function Contact({backgroundColor, title, textColor}){

    const data = [
        {
            label: "Instagram",
            icon: '/icons/instagram.svg',
            link: ''
        },
        {
            label: "Mail",
            icon: '/icons/Message.svg',
            link: ''
        },
        {
            label: "Ring",
            icon: '/icons/Phone.svg',
            link:''
        }
    ]

    return (
        <Style style={{ '--backgroundColor': backgroundColor, '--textColor': textColor }}>
            <div className="contained small">
                <div className="wrapper">
                    <div className="h3">{title}</div>
                    <div className="boxes">
                        {data && data.map((b, index) => (
                            <div className="box" key={index}>{b.link}
                                <img className="icon" src={b.icon} />
                                <p>{b.label}</p>
                            </div>
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
          
            }

                img{
                    .icon{
                    width: 60px;
                    height: 60px;
                    color: var(--color-dark-green);
                    fill: var(--color-dark-green)!important;
                    }
                
                }

                p{
                    margin-top: 15px;
                    color: var(--color-dark-green);
                }
        }
    }

    

}
`
