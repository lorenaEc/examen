import React from 'react'
import Wordpress from '../src/utils/Wordpress'
import BlockRenderer from '../src/BlockRenderer/blockrenderer'

//Get current page by slug

export async function getStaticProps(context) {

   const page = await Wordpress.getPageBySlug(context.params.slug)
   
    return {
        props: {
            page
        },
        revalidate: 60 * 5,
    }
}

//Loops all paths 

export async function getStaticPaths() {
    const pages = await Wordpress.getPages()
    let paths = pages.map((page) => (
        `/${page.slug}`
    ))
    return {
        paths,
        fallback: false
    }
}

export default function Page({ page }) {
	return (
        <>
            <BlockRenderer blocks={page?.acf?.block} />
        </> 
	
	)
}