import React from 'react'
import TextBlock from './TextBlock'

export default function TextBlockWordpress({ data }) {
    
    return (
        <TextBlock
        title={data.title}
        description={data.description}
        link={data.button.link}
        linkText={data.button.linkText}
        text={data.text}
        textColor={data.textColor}
        backgroundColor={data.backgroundColor}
    />
    )
}
