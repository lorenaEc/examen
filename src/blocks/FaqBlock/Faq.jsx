import React from 'react'
import styled from 'styled-components'
import Accordions from './Accordions';

function Faq({title, textColor, backgroundColor, faq}) {


  return (
    <Style style={{'--textColor':textColor, '--backgroundColor':backgroundColor}}>
        <div className='contained extra-small'>
            <div className='wrapper'>
                <h3>{title}</h3>
                {faq && faq.map((f, index) =>(
                    
                 <Accordions  question={f.question} answer={f.answer} key={index} />

                ))}

            </div>

        </div>

    </Style>
  )
}
const Style = styled.div`
padding:100px 0px;
color: var(--textColor);
background-color: var(--backgroundColor);

.mobile & {
    padding: 75px 0px;
}

.contained {
    display: flex;
    justify-content: center;
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        h3{
            width: 100%;
            text-align: center;
        }

        .faqContainer{
            width: 100%;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap:20px;
            border-bottom: #b7b1b1 solid 1px;
            padding-bottom: 15px;
            width: 720px;

            .mobile & {
                width: 100%;
            }

            .question{
                width: 100%;
                display: flex;
                justify-content: space-between;
                gap: 10px;
                

                .title{
                padding: 5px 0px;
                
                color: var(--textColor);
                cursor: pointer;

            }
            .plus{
                    font-size: 20px;
                    cursor: pointer;
                }

            .answer{
                color: var(--color-green);
                padding: 0px 18px;
            }

            }           

        }
    }
}
`


export default Faq