import React from "react";
import styled from "styled-components";


export default function PreFooter() {

    const data = [
        {
            title: "Säkra betalningar",
            icon: '/icons/card.svg'
        },
        {
            title: "Trygg leverans",
            icon: '/icons/truck.svg'
        },
        {
            title: "Fri frakt över 700 kr",
            icon: '/icons/box.svg'
        }
    ]
    return (
        <Style>
            <div className="contained">
                <div className="container">
                    {data && data.map((a, index) => (
                    <div className="payContainer" key={index}>
                       <img src={a.icon}/>

                       <p className="p">{a.title}</p>
                   </div> 
                    ))}

                </div>
            </div>

        </Style>
    )
}
const Style = styled.div`
padding: 50px 0px;
background-color: var(--color-white);
color:var(--color-dark-green);


.mobile & {
    padding: 50px;
    background-color: var(--color-beige);
    border-top: 1px solid var(--color-dark-green);
}


.contained{
    .container{
        padding-top: 50px;
        border-top: 1px solid var(--color-dark-green);
        display: flex;
        justify-content: space-between;
        align-items:center;

        .mobile & {
            padding: 0px ;
            display: flex;
            flex-direction: column;
            margin: 20px 0px;
            gap: 20px;
            border-top: none;
        }
        

        .payContainer{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            .p{
                text-align: center;

                .mobile & {
                    max-width: 105px;
                    
                }
            }

        }
    }
}
`