import React from "react"
import Woocommerce from "../../src/WooCommerce"



export async function getServerSideProps(context){
    let categories = await Woocommerce.getCategories();
    let slug = context.params.category;

    const category = categories?.find(c => slug == c.slug)
    const products = await Woocommerce.getProductsByCategory(category.id);

    return {
        props: {
            products
        }
    }
}


export default function Category(props) {
    console.log(props)
    
    

   
    
  
    return (
      <div>
        <div className="h1">Hej Category</div>
      </div>
    )
  }