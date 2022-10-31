import Link from 'next/link'
import React from 'react'
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

const Services = ({services}) => {
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
// {/* Services */}
<section id="services" className="services clear section-padding">
<div className="container">
  <div className="row mb-45">
    <div className="col-md-4">
      <h6 className="wow" data-splitting="">
        Services That I Provide
      </h6>
      <h1 className="wow" data-splitting="">
        Services
      </h1>
    </div>
    <div className="col-md-7 offset-md-1 mt-45">
      <p className="wow fadeInUp" data-wow-delay=".6s">
        These are my best Services, i always gives my best Efforts.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <OwlCarousel
      
      loop
      margin={10}
      mouseDrag = {true}
      autoplay = {false}
      dots =  {false}
      autoplayHoverPause = {true}
      nav =  {false}
      navText =  {`<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>`}
      responsiveClass= {true}
      responsive =  {responsive}
      >
      {services.map((service,index) => (
         <div key={service._id} className="item">
          <Link  href={`/service/${service.slug.current}`}>
         <a>
           {" "}
           <span className={`icon ${service.iconType}`} />
           <h5>{service.title}</h5>
           <p>
           {service.description}
           </p>
           <div className="numb">{index+1> 9? "":0}{index+1}</div>
         </a>
         </Link>
       </div>
       ))}
      </OwlCarousel>
      <div className="owl-carousel owl-theme">
       
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Services