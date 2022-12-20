import React from 'react'
import Wordpress from '../src/utils/Wordpress'
import BlockRenderer from '../src/BlockRenderer/blockrenderer'


export async function getStaticProps(context) {
   const page = await Wordpress.getPageBySlug(context.params.slug)

    return {
        props: {
            page
        }
    }
}

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
    console.log(page)
	return (
        <>
            <BlockRenderer blocks={page?.acf} />
            {/* {page.acf.test} */}
        </> 
	
	)
}