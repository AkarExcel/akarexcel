import Link from 'next/link'
import React from 'react'
import Navbar from '../layout/Navbar'
import { sanityClient } from '../sanity'

const Services = ({services}) => {
  console.log(services)
  return (
<>
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