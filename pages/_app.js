import { LayoutHandler } from '../src/utils/LayoutHandler'
import Menu from '../src/components/menu'
import '../styles/style.scss'
import {  useState, useMemo } from 'react'
import { CartContext } from '../src/Context/cartContext'

function MyApp({ Component, pageProps }) {
  LayoutHandler.listen()
  const [cart, setcart] = useState([])
  const cartValue = useMemo(() => ({cart, setcart}), [cart, setcart])
  console.log(cart)
  return(
    <CartContext.Provider value={cartValue}>
    <Menu/>
    <Component {...pageProps} />
    </CartContext.Provider>
  ) 
}

export default MyApp
