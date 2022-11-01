import React from 'react'
import banner from './banner.jpg'
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


const Testimonial = () => {


  const responsive = {
    0: {
          items: 1
      },
    600: {
          items: 1
      },
    1000: {
          items: 1
      }
  }

  return (
<section id="testimonials" className="testimonials">
    <div
      className="background bg-img bg-fixed section-padding pb-0"
      //data-background="images/banner.jpg"
      style={
        {
          //backgroundImage: `url(${banner})`,
          backgroundImage: `url(/images/banner.jpg)`
        }}

    >
      <div className="container">
        <div className="row">
          {/* Work together */}
          <div className="col-md-6 mb-30">
            <h4 className="wow" data-splitting="">
              Need help with professional support? Let's work together!
            </h4>
            <div
              className="btn-wrap mt-30 text-left wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="btn-link">
                {" "}
                <a href="#" className="white">
                  developerexcela@gmail.com
                </a>{" "}
                <span className="btn-block color3 animation-bounce" />{" "}
              </div>
            </div>
          </div>
          {/* Testiominals */}
          <div className="col-md-5 offset-md-1">
            <div className="testimonials-box">
              <h5>What Are Clients Saying?</h5>
              <OwlCarousel
      
              loop
              margin={30}
              mouseDrag = {true}
              autoplay = {false}
              dots =  {false}
              nav =  {false}
              navText =  {["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]}
              responsiveClass= {true}
              responsive =  {responsive}
              >
                <div className="item">
                  <p>
                    Dan entesque magna magna semper daibus elisan neca aliuen
                    risus morbi tristique senectus et netus malesuada fames ac
                    urpis egestas. Nullam miss muris ulvinar miss in the libero
                    dictum.
                  </p>{" "}
                  <span className="quote">
                    <img src="images/quot.png" alt="" />
                  </span>
                  <div className="info">
                    <div className="author-img">
                      {" "}
                      <img src="images/team/1.jpg" alt="" />{" "}
                    </div>
                    <div className="cont">
                      <h6>Emily Brown</h6> <span>Project Owner</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <span className="quote">
                    <img src="images/quot.png" alt="" />
                  </span>
                  <p>
                    Dan entesque magna magna semper daibus elisan neca aliuen
                    risus morbi tristique senectus et netus malesuada fames ac
                    urpis egestas. Nullam miss muris ulvinar miss in the libero
                    dictum.
                  </p>
                  <div className="info">
                    <div className="author-img">
                      {" "}
                      <img src="images/team/2.jpg" alt="" />{" "}
                    </div>
                    <div className="cont">
                      <h6>Jason White</h6> <span>Project Owner</span>
                    </div>
                  </div>
                </div>
             </OwlCarousel> 
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default Testimonial