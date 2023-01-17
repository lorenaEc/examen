import React from 'react'
import Split from './Split'

export default function SplitWordpress({ data }) {
    return (
        <Split
        image={{
            src: data.image.url,
            alt: data.image.alt,
        }}

        title={data.title}
        description={data.description}
        layout={data.layout}
        link={data.link}
        buttonTitle={data.buttonTitle}
    />
    )
}