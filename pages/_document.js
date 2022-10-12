import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
      />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="js/plugins/jquery-3.6.0.min.js"></Script>
      <Script src="js/plugins/bootstrap.min.js"></Script>
      <Script src="js/plugins/owl.carousel.min.js"></Script>
      <Script src="js/plugins/jquery.magnific-popup.min.js"></Script>
      <Script src="js/plugins/YouTubePopUp.js"></Script>
      <Script src="js/plugins/jquery.easing.1.3.js"></Script>
      <Script src="js/plugins/smooth-scroll.min.js"></Script>
      <Script src="js/plugins/wow.js"></Script>
      <Script src="js/custom.js"></Script>
      </body>
    </Html>
  )
}