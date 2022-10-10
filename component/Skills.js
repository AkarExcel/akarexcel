import React from 'react'

const Skills = () => {
  return (
<section id="about" className="section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-7">
          <h6 className="wow" data-splitting="">
            I make the future
          </h6>
          <h1 className="wow" data-splitting="">
            I Develop &amp; Create Digital Future.
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <p className="wow fadeInUp" data-wow-delay=".2s">
            Pellentesque magna magna semper dapibus felis necatin aliuen risus.
            Pellentesque habitant morbi senectus dictum.
          </p>
          <p className="wow fadeInUp" data-wow-delay=".4s">
            Web design magna magna semper dapibus felis necatin aliuen risus.
            Pellentesque habitant morbi tristique senectus the neuse malesuada
            nullam ac lorem miss the duru.
          </p>
          <div
            className="btn-wrap text-left mt-45 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="btn-link">
              {" "}
              <a href="#">developerexcela@gmail.com</a>{" "}
              <span className="btn-block color1 animation-bounce" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-1 wow fadeInUp" data-wow-delay=".8s">
          <p className="bar-title">
            Design<span className="percent align-right">90%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-design start" />
          </div>
          <p className="bar-title">
            Branding <span className="percent align-right">80%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-branding start" />
          </div>
          <p className="bar-title">
            Web Design<span className="percent align-right">95%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-webdesign start" />
          </div>
          <p className="bar-title">
            Social Media<span className="percent align-right">85%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-socialmedia start" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills