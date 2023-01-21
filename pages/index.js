import { useDevices } from "../src/utils/LayoutHandler"
import Wordpress from "../src/utils/Wordpress"
import Woocommerce from "../src/WooCommerce"
import BlockRenderer from "../src/BlockRenderer/blockrenderer"



export default function Home({page}) {
  const [mobile, tablet, desktop] = useDevices()
  console.log(page)

 
  

  return (
        <>
            <BlockRenderer blocks={page?.acf?.block} />
        </> 
   
  )
}

export async function getServerSideProps(context) {
  
  const page = await Wordpress.getHomePage()

  return {
    props: {
      page
    }
  }
}


