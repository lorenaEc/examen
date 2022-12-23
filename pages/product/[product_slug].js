import React from "react"
import Woocommerce from "../../src/WooCommerce"



export async function getServerSideProps(context){
    let slug = context.params.product_slug;
    let product = await Woocommerce.getProductBySlug(slug);


    return {
        props: {
            product
        }
    }
}


export default function Category(props) {
    console.log(props)
    
    

   
    
  
    return (
      <div>
        <div className="h1">Hej Produkt</div>
      </div>
    )
  }