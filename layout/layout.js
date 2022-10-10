import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
    {/* <Navbar/> */}
    {/* Preloader */}
    <div className="preloader-bg" />
    <div id="preloader">
        <div id="preloader-status">
        <div className="preloader-position loader">
            {" "}
            <span />{" "}
        </div>
        </div>
    </div>
    {/* Cursor */}
    <div className="cursor js-cursor" />

    <body>{children}</body>
      <Footer />
    </>
    
  )
}

export default Layout