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
          Services That We Provide
        </h6>
        <h1 className="wow" data-splitting="">
          Services
        </h1>
      </div>
      <div className="col-md-7 offset-md-1 mt-45">
        <p className="wow fadeInUp" data-wow-delay=".6s">
          We are commited to giving you the best services, All our
          Services are done with 100% commitment to client satisfaction
          <strong>{" "}Get the Best Service Today</strong>
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
            <p className='text'>
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
      },
      revalidate: 900 // revalidate every 15mins
    }
  }