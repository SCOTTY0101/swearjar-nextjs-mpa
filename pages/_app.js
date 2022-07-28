import Nav from '../components/Nav'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Nav></Nav>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
