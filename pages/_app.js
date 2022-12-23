import { LayoutHandler } from '../src/utils/LayoutHandler'
import Menu from '../src/components/menu'
import '../styles/style.scss'

function MyApp({ Component, pageProps }) {
  LayoutHandler.listen()
  return(
    <>
    <Menu/>
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
