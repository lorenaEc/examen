import React from 'react'
import Hero from './Hero'

export default function HeroWordpress({ data }) {
    return (
        <Hero
        image={{
            src: data.image.url,
            alt: data.image.alt,
        }}

        title={data.title}
        description={data.description}
        layout={data.layout}
    />
    )
}

