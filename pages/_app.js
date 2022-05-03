import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
