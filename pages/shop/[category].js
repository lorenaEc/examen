import React from "react"
import Woocommerce from "../../src/WooCommerce"
import BlockRenderer from "../../src/BlockRenderer/blockrenderer";



export async function getServerSideProps(context){
    let categories = await Woocommerce.getCategories();
    let slug = context.params.category;

    const category = categories?.find(c => slug == c.slug)
    const products = await Woocommerce.getProductsByCategory(category.id);

    return {
        props: {
            products,
            category
        }
    }
}


export default function Category(props) {
    console.log(props)
    return (
         <>
            <BlockRenderer blocks={props.category?.acf?.block} />
        </> 
   
    )
  }