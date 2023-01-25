import React from "react";
import { useState } from "react";

function Accordions({answer, question}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='faqContainer'>
            <div className="question" onClick={() => setIsActive(!isActive)}>
            <div className='title'  dangerouslySetInnerHTML={{ __html: question }}></div>
            <div className="plus">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className='answer' dangerouslySetInnerHTML={{ __html: answer }}></div>}
        </div>
    )
}

export default Accordions