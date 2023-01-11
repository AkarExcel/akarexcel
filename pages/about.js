import React from 'react'
import Navbar from '../layout/Navbar'

const About = () => {
  return (
<>
<Navbar/>
  {/* About  */}
  <section id="about" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h6 className="wow" data-splitting="">
            About Me
          </h6>
          <h1 className="wow" data-splitting="">
            I Create Digital Future.
          </h1>
          <p className="mt-45 wow fadeInUp" data-wow-delay=".3s">
          I am a technically driven and creative problem solver. 
          I love learning new technologies and working with cutting edge frameworks 
          and tools to execute on various projects.
          </p>
          <p className="wow fadeInUp" data-wow-delay=".6s">
          I enjoy working in Analytics and Intelligence for a business, 
          but also have a passion for being able to use the latest technologies, both software and hardware, 
          to deliver solutions that meet the needs of clients wherever they are today and into the future.
          </p>
          <div
            className="btn-wrap wow fadeInUp text-left mt-45 mb-45"
            data-wow-delay=".9s"
          >
            <div className="btn-link">
              {" "}
              <a href="#">developerexcela@gmail.com </a>{" "}
              <span className="btn-block color1 animation-bounce" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="reveal-effect">
            {" "}
            <img src="images/slider3.jpg" className="img-fluid" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Resume */}
  <section id="resume" className="resume section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-12">
          <h6 className="wow" data-splitting="">
            Experience &amp; Education
          </h6>
          <h1 className="wow" data-splitting="">
            My Resume
          </h1>
        </div>
      </div>
      <div className="row mt-45">
        <div className="col-md-5">
          <div className="o-hidden full-width">
            <div className="profile mb-45">
              <div className="block">
                <h4>Experience</h4>
                <div className="item">
                  <h5>
                    DecentitService<span>2021 - Present</span>
                  </h5>
                  <p>Blockchain Developer</p>
                </div>
                <div className="item">
                  <h5>
                    Freelancer Web Developer<span>2017 - 2021</span>
                  </h5>
                  <p>Web Developer</p>
                </div>
                <div className="item">
                  <h5>
                    Freelance Designer <span>2016 - 2017</span>
                  </h5>
                  <p>Graphic & UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 offset-md-2 valign">
          <div className="o-hidden full-width">
            <div className="profile">
              <div className="block">
                <h4>Education</h4>
                <div className="item">
                  <h5>
                    Petroleum Training Institute <span>2015 - 2021</span>
                  </h5>
                  <p>NGN.</p>
                </div>
                <div className="item">
                  <h5>
                    BuildSpace <span>2020 - 2022</span>
                  </h5>
                  <p>BuildSpace.so</p>
                </div>
                <div className="item">
                  <h5>
                    FreeCodeCamp <span>2017 - 2018</span>
                  </h5>
                  <p>San Fransisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default About