import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-4">
          <h6 className="wow" data-splitting="">
            My Works
          </h6>
          <h1 className="wow" data-splitting="">
            Portfolio
          </h1>
        </div>
        <div className="col-md-7 offset-md-1 mt-45">
          <p className="wow fadeInUp" data-wow-delay=".6s">
            i may not be the most seasoned Developer, but take pride in my design and Developer Skill
            to create the the best Web App, Smart contract that both look good and are fully functional.
          </p>
        </div>
      </div>
    </div>
    <div className="full-width">
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <a href="portfolio-page.html">
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src="images/portfolio/1.jpg"
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>Lab. 001</h4>
                    <p>Website Design</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="portfolio-page.html">
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src="images/portfolio/2.jpg"
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>Aer Agency</h4>
                    <p>Website / Development</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="portfolio-page.html">
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src="images/portfolio/3.jpg"
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>Joker Card</h4>
                    <p>UX Design / Web App</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="portfolio-page.html">
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src="images/portfolio/4.jpg"
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>Peaky Blinders</h4>
                    <p>Website / UX Design</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="portfolio-page.html">
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src="images/portfolio/5.jpg"
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>Design Zoom</h4>
                    <p>Branding / Design</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="portfolio-page.html">
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src="images/portfolio/6.jpg"
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>Out Zone</h4>
                    <p>UX Design / Web App</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio