import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../layout/layout'
import { Router } from 'next/router';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
// import AOS
import AOS from "aos";
import "aos/dist/aos.css";
//import "../scss/style.scss";



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

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

    <Script src="js/plugins/jquery-3.6.0.min.js" />
    <Script src="js/plugins/bootstrap.min.js" />
    <Script src="js/plugins/jquery.magnific-popup.min.js" />
    <Script src="js/plugins/jquery.easing.1.3.js" />
    <Script src="js/plugins/smooth-scroll.min.js" />
    <Script src="js/plugins/wow.js" />
    <Script src="js/custom.js" strategy="afterInteractive"/>
  </>
  )
  
}

export default MyApp
