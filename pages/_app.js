import { LayoutHandler } from '../src/utils/LayoutHandler'
import '../styles/style.scss'

function MyApp({ Component, pageProps }) {
  LayoutHandler.listen()
  return <Component {...pageProps} />
}

export default MyApp
