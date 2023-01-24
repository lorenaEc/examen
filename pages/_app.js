import { LayoutHandler } from '../src/utils/LayoutHandler'
import Menu from '../src/components/menu'
import Footer from '../src/components/footer'
import PreFooter from '../src/components/preFooter'
import '../styles/style.scss'
import {  useState, useMemo, useEffect } from 'react'
import { CartContext } from '../src/Context/cartContext'
import { useRouter } from 'next/router'
import Router from 'next/router'
// import LottieAnimation from '../src/Lottie/Animation'


function MyApp({ Component, pageProps }) {
  LayoutHandler.listen()
  const [cart, setcart] = useState([])
  const cartValue = useMemo(() => ({cart, setcart}), [cart, setcart])
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);


  //Get cart from LocalStorage
  useEffect(() =>{
    let storage = localStorage.getItem("cart")
    const localCart = JSON.parse(storage)

    setcart(storage ? localCart : [])
    
  },[])

  //Loading animation
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleComplete = () => {
      setIsLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);

    return () => {
      setIsLoading(false)
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
    };
   
  }, [])
  // if (loading) return  <LottieAnimation />


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
