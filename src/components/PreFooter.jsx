import React from "react";
import Link from "next/link";
import styled from "styled-components";


export default function PreFooter() {
    return (
        <Style>
            <div className="contained">
                <div className="container">
                    <div className="payContainer">
                        <svg class="feather feather-credit-card" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="22" x="1" y="4" /><line x1="1" x2="23" y1="10" y2="10" /></svg>

                        <p>Säkra betalningar</p>
                    </div>
                    <div className="deliveryContainer">

                        <svg className="feather feather-truck" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="13" width="15" x="1" y="3" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                        <p>Trygg leverans</p>
                    </div>
                    <div className="sendContainer">

                        <svg className="feather feather-package" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><line x1="16.5" x2="7.5" y1="9.4" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg>
                        <p>Gratis frakt över 700 kr</p>
                    </div>

                </div>
            </div>

        </Style>
    )
}
const Style = styled.div`
height: 250px;
padding-top: 50px;
background-color: var(--color-white);
color:var(--color-dark-green);


.contained{
    .container{
        padding-top: 50px;
        border-top: 1px solid var(--color-dark-green);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;

        .payContainer{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .deliveryContainer{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .sendContainer{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
}
`