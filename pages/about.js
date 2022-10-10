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
            Nulla posuere tortor sed semper scelerisque. Etiam ornare iros
            metusan the gravidane sodales vel. Integer ac molestie nisi. Orci
            varius natoque penatis magnis the duru parturient montes, nascetur
            ridiculus mus.
          </p>
          <p className="wow fadeInUp" data-wow-delay=".6s">
            Fusce posuere quis sem quis efficitur. Etiam ac cursus lacus a
            retium arus crase eratodio congue a nulla quis iaculis laoreet
            risus.
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
                    HMM Space Inc.<span>2022 - Present</span>
                  </h5>
                  <p>UI/UX Designer</p>
                </div>
                <div className="item">
                  <h5>
                    Robinhood Inc. <span>2018 - 2022</span>
                  </h5>
                  <p>Web Developer</p>
                </div>
                <div className="item">
                  <h5>
                    Bauen Software Inc. <span>2016 - 2018</span>
                  </h5>
                  <p>Senior Developer</p>
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
                    Stanford University <span>2013 - 2015</span>
                  </h5>
                  <p>of California.</p>
                </div>
                <div className="item">
                  <h5>
                    Specialization Course. <span>2011 - 2013</span>
                  </h5>
                  <p>MIT University</p>
                </div>
                <div className="item">
                  <h5>
                    Level High School. <span>2009 - 2011</span>
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