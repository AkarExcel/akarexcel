import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Client from '../component/Client'
import Testimonial from '../component/Testimonial'
import Navbar from '../layout/Navbar'

const Contact = () => {
  return (
<>
<Head>
  <title>Contact Us</title>

</Head>
<Navbar/>
  <section className="contact section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-12">
          <h6 className="wow" data-splitting="">
            Get in touch
          </h6>
          <h1 className="wow" data-splitting="">
            Contact Details
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-45">
          <div className="item">
            <div className="wrap-block">
              {" "}
              <span className="icon et-phone" />
              <div className="text-block">
                <h5>Phone</h5>
                <p>+234 902 066 9843</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="wrap-block">
              {" "}
              <span className="icon et-map-pin" />
              <div className="text-block">
                <h5>Address</h5>
                <p>Port Harcourt Rivers State, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="wrap-block">
              {" "}
              <span className="icon et-notebook" />
              <div className="text-block">
                <h5>E-Mail</h5>
                <p>developerexcela@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 offset-md-1">
          <h5>Get in touch!</h5>
          <form
            method="post"
            className="contact__form"
            action="https://duruthemes.com/demo/html/nils/nils-light/mail.php"
          >
            {/* Form message */}
            <div className="row">
              <div className="col-12">
                <div
                  className="alert alert-success contact__msg"
                  style={{ display: "none" }}
                  role="alert"
                >
                  {" "}
                  Your message was sent successfully.{" "}
                </div>
              </div>
            </div>
            {/* Form elements */}
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Name *"
                  required=""
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required=""
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone *"
                  required=""
                />
              </div>
              <div className="col-md-12 form-group">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject *"
                  required=""
                />
              </div>
              <div className="col-md-12 form-group">
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={4}
                  placeholder="How can we help you? Feel free to get in touch! *"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12">
                <div className="btn-wrap">
                  <div className="btn-link">
                    <input type="submit" defaultValue="Get in touch" />{" "}
                    <span className="btn-block color1 animation-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Maps */}
  <section id="map">
    <div className="full-width">
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2734843657886!2d7.000347514090398!3d4.893814541317066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d18148d471df%3A0x583a0128b91480a9!2s24%20Airport%20Rd%2C%20Rukpokwu%20500102%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1664984566729!5m2!1sen!2sng"
          width="100%"
          height={500}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
  <Testimonial/>
  <Client/>
   
</>

  )
}

export default Contact