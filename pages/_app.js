import { LayoutHandler } from '../src/utils/LayoutHandler'
import Menu from '../src/components/menu'
import Footer from '../src/components/footer'
import PreFooter from '../src/components/preFooter'
import '../styles/style.scss'
import {  useState, useMemo, useEffect } from 'react'
import { CartContext } from '../src/Context/cartContext'

function MyApp({ Component, pageProps }) {
  LayoutHandler.listen()
  const [cart, setcart] = useState([])
  const cartValue = useMemo(() => ({cart, setcart}), [cart, setcart])
  console.log(cart)

  // if (windowLoaded) return <></>
  return(
    <CartContext.Provider value={cartValue}>
    <Menu/>
    <Component {...pageProps} />
    <PreFooter/>
    <Footer/>
    </CartContext.Provider>
  ) 
}

export default MyApp
