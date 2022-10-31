import React from 'react'
// import owl carousel
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Client = () => {
  const responsive = {
    0: {
          items: 1
      },
    600: {
          items: 2
      },
    1000: {
          items: 3
      }
  }
  return (
    <section id="clients" className="clients">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
        <OwlCarousel
      
      loop
      margin={10}
      mouseDrag = {true}
      autoplay = {false}
      dots =  {false}
      autoplayHoverPause = {true}
      nav =  {false}
      navText =  {["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]}
      responsiveClass= {true}
      responsive =  {responsive}
      >
          <div className="clients-logo">
              <a href="#0">
                <img src="images/clients/1.png" alt="" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="images/clients/2.png" alt="" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="images/clients/3.png" alt="" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="images/clients/4.png" alt="" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="images/clients/5.png" alt="" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="images/clients/6.png" alt="" />
              </a>
            </div>
      </OwlCarousel>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Client