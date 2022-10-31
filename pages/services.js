import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import Navbar from '../layout/Navbar'
import { sanityClient } from '../sanity'

const Services = ({services}) => {

  return (
<>
<Head>
  <title>Services</title>

</Head>
<Navbar/>
<section className="services section-padding">
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
          Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss
          the drana risus tincidunt convallis velit orci congue tortor eu
          dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet
          metus ornare.
        </p>
      </div>
    </div>
    <div className="row">
      {services.map((service,index) => (
        <div key={service._id} className="col-md-4">
        <Link href={`/service/${service.slug.current}`}>
        <a>
          <div className="item mb-30">
            {" "}
            <span className="icon et-laptop" />
            <h5>{service.title}</h5>
            <p>
              {service.description}
            </p>
            <div className="numb">{index+1> 9? "":0}{index+1}</div>
          </div>
        </a>
        </Link>
      </div>
      ))}
    </div>
  </div>
</section>
<Script src="js/plugins/jquery-3.6.0.min.js"></Script>
      <Script src="js/plugins/bootstrap.min.js"></Script>
      <Script src="js/plugins/owl.carousel.min.js"></Script>
      <Script src="js/plugins/jquery.magnific-popup.min.js"></Script>
      <Script src="js/plugins/YouTubePopUp.js"></Script>
      <Script src="js/plugins/jquery.easing.1.3.js"></Script>
      <Script src="js/plugins/smooth-scroll.min.js"></Script>
      <Script src="js/plugins/wow.js"></Script>
      <Script src="js/custom.js"></Script> 
</>

  )
}

export default Services

export async function getStaticProps(){
    const serviceQuery = `*[_type == 'service']{
      _id,
      description,
      title,
      slug,
      iconType
    }`
  
    const services = await sanityClient.fetch(serviceQuery)
    return{
      props: {
        services
      }
    }
  }