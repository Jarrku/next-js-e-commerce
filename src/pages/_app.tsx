// import '../styles/globals.css'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import Layout from '../components/Layout'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
