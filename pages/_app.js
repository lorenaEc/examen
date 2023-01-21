import { LayoutHandler } from '../src/utils/LayoutHandler'
import Menu from '../src/components/menu'
import Footer from '../src/components/footer'
import PreFooter from '../src/components/preFooter'
import '../styles/style.scss'
import {  useState, useMemo, useEffect } from 'react'
import { CartContext } from '../src/Context/cartContext'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  LayoutHandler.listen()
  const [cart, setcart] = useState([])
  const cartValue = useMemo(() => ({cart, setcart}), [cart, setcart])
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    let storage = localStorage.getItem("cart")
    const localCart = JSON.parse(storage)

    setcart(storage ? localCart : [])
    
  },[])

  
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setLoading(false);
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  // if (loading) return <LottieAnimation />


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
