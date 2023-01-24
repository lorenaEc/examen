import React from 'react'
import styled from 'styled-components'

function Faq({title, textColor, backgroundColor, faq}) {

    const toggle = (index) => {
      document.querySelectorAll(".answer")[index].style.display = 'block'
       
    }

  return (
    <Style style={{'--textColor':textColor, '--backgroundColor':backgroundColor}}>
        <div className='contained extra-small'>
            <div className='wrapper'>
                <h3>{title}</h3>
                {faq && faq.map((f, index) =>(
                    <div  className='faqContainer' key={index}>
                        <div onClick={() => toggle(index)} className='que' dangerouslySetInnerHTML={{__html: f.question}}></div>
                        <div className='answer' dangerouslySetInnerHTML={{__html: f.answer}}></div>            
                    </div>

                ))}

            </div>

        </div>

    </Style>
  )
}
const Style = styled.div`
padding:100px 0px;

background-color: var(--backgroundColor);

.contained {
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        .faqContainer{
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap:20px;

            .que{
                padding: 10px 0px;
                border-top: #b7b1b1 solid 1px;
                color: var(--textColor);
                cursor: pointer;
            }

            .answer{
                color: var(--color-green);
                padding: 0px 18px;
                display: none;
                overflow: hidden; 
            }

        }
    }
}
`


export default Faq