import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="header-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header-section-wrap">
            <div className="header-view-on-mobile">
              <h1>Akar Excel</h1>
              <h6>Creative Web &amp; Web3 Developer</h6>
            </div>
            <div className="transform-banner position-relative">
              <img
                className="img header-img header-img-left wow imago"
                src="images/slider3.jpg"
                alt=""
              />
            </div>
            <div className="header-cont header-cont-right">
              <div className="header-cont-absolute header-cont-absolute-right">
                <div className="header-not-view-on-mobile">
                  <h1 className="wow" data-splitting="">
                    Akar Excel
                  </h1>
                  <h6 className="wow" data-splitting="">
                    Creative Web &amp; Web3 Developer
                  </h6>
                </div>
                <div className="header-cont-text">
                  <p className="wow" data-splitting="">
                    Hi, I’m Akar Excel and I am creative web &amp; Web3
                    developer who dream making the world better place by
                    creating captivating products.
                  </p>
                </div>
                <div className="btn-wrap text-center">
                  <div className="btn-link">
                    {" "}
                    
                    <a href='frontend.pdf'>
                      Download CV <i className="ti-download" />{" "}
                    </a>
                       
                    <span className="btn-block color1 animation-bounce" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero