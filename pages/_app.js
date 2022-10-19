import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../layout/layout'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
    <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Akar Excel</title>
      <link rel="icon" type="image/png" href="images/favicon.png" />
    </Head>
    <Layout>
    <Component {...pageProps} />
    </Layout>
       
      <Script src="js/plugins/jquery-3.6.0.min.js" strategy="lazyOnload"/>
      <Script src="js/plugins/bootstrap.min.js"/>
      <Script src="js/plugins/owl.carousel.min.js"/>
      <Script src="js/plugins/jquery.magnific-popup.min.js"/>
      <Script src="js/plugins/YouTubePopUp.js"/>
      <Script src="js/plugins/jquery.easing.1.3.js"/>
      <Script src="js/plugins/smooth-scroll.min.js"/>
      <Script src="js/plugins/wow.js"/>
      <Script src="js/custom.js"/>
      </>
  )
  
}

export default MyApp
