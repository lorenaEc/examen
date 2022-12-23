import { useEffect, useState } from "react"
import { useDevices } from "../src/utils/LayoutHandler"
import Wordpress from "../src/utils/Wordpress"
import Woocommerce from "../src/WooCommerce"



export default function Home(props) {
  const [mobile, tablet, desktop] = useDevices()
  // console.log([mobile, tablet, desktop])
  console.log(props)

  // useEffect(() => {
    // const getCategories  = async () => {
    //   const categories = await Woocommerce.getCategories()
    //   const ca = categories.json()
    //   console.log(ca)
    // }
    // getCategories()
  // }, [])
 
  

  return (
    <div>
      <div className="h1">Hej</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  
  const products = await Woocommerce.getProductBySlug('golvlampa-neteyam')
  console.log(products)

  return {
    props: {
      products
    }
  }
}


