import React from 'react'

const Services = () => {
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
      <div className="owl-carousel owl-theme">
        <div className="item">
          <a href="services-page.html">
            {" "}
            <span className="icon et-laptop" />
            <h5>Designer</h5>
            <p>
            I value simple content structure, clean design patterns, and thoughtful interactions.
            </p>
            <div className="numb">01</div>
          </a>
        </div>
        <div className="item">
          <a href="services-page.html">
            {" "}
            <span className="icon et-bargraph" />
            <h5>Frontend Developer</h5>
            <p>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <div className="numb">02</div>
          </a>
        </div>
        <div className="item">
          <a href="services-page.html">
            {" "}
            <span className="icon et-basket" />
            <h5>Blockchain Developer</h5>
            <p>
              i love the new Web3 Eco-system and the power it gives to the average individual
            </p>
            <div className="numb">03</div>
          </a>
        </div>
        <div className="item">
          <a href="services-page.html">
            {" "}
            <span className="icon et-browser" />
            <h5>Graphic Design</h5>
            <p>
              i create beautiful designs that will help your business create a long lastin impression on the mind of your audience.
            </p>
            <div className="numb">04</div>
          </a>
        </div>
        <div className="item">
          <a href="services-page.html">
            {" "}
            <span className="icon et-target" />
            <h5>Digital Marketing</h5>
            <p>
              I love creating Clean online campaign to boost business growth and drive sales.
            </p>
            <div className="numb">05</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Services