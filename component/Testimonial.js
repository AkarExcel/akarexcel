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
import { urlFor } from '../sanity'


const Testimonial = ({testimonial}) => {

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
                {testimonial && testimonial.map((testimony) => (
              <div key={testimony._id} className="item">
              <p>
                {testimony.description}
              </p>{" "}
              <span className="quote">
                <img src="images/quot.png" alt="" />
              </span>
              <div className="info">
                <div className="author-img">
                  {" "}
                  <img src={urlFor(testimony.authorImage).url()} alt="" />{" "}
                </div>
                <div className="cont">
                  <h6>{testimony.name}</h6> <span>{testimony.position}</span>
                </div>
              </div>
            </div>
                ))}
  
 
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