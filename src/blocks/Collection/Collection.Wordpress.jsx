import React from 'react'
import Collection from './Collection'

export default function CollectionWordpress({ data }) {
    return (
        <Collection
        backgroundColor={data.backgroundColor}
        textColor={data.textColor}
        limit={data.limit}
        title={data.title}
    />
    )
}