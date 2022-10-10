import React from 'react'
import PortableText from 'react-portable-text'
import Navbar from '../../layout/Navbar'
import { sanityClient, urlFor } from '../../sanity'

const Service = ({service}) => {
  return (
<>
<Navbar/>
  {/* Services Page  */}
  <section className="section-padding services-page">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-12 text-center">
          <h6 className="wow" data-splitting="">
            Services
          </h6>
          <h1 className="wow" data-splitting="">
            {service.title}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          {" "}
          <img
            src={urlFor(service.mainImage).url()}
            className="mb-45 img-fluid"
            alt=""
          />
          {/* Body */}
          <PortableText  
                className=''
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={service.body}
                serializers = {{
                    h1: (props) => (
                        <h1 className='text-3xl font-bold my-5' {...props} />
                        ),
                    h2: (props) => (
                        <h2 className='text-xl font-bold my-5' {...props} />
                        ),
                    ul: (props) => (
                      <div className='ullist'><ul className='' {...props} /></div>
                       ),
                    li: ({children}) => (
                        <li className='ml-8 list-disc' >
                            {children}
                        </li>
                    ),
                    blockquote: ({children}) => (
                        <blockquote className='mx-4 italic font-thin text-slate-400 my-5'>{children}</blockquote>
                    )
                    ,
                    link: ({href,children}) => (
                        <a href={href} className="text-blue-500 hover:underline">
                            {children}
                        </a>
                    )
                }}
            />
            {(service.faq.length > 0  && 
              
                <div className="row">
                <div className="col-md-12 mb-30">
                  <h5>Frequently Asked Questions</h5>
                </div>
                <div className="col-md-12">
                  <ul className="accordion-box clearfix">
                  {service.faq.map(faq => (
                    <li key={faq._id} className="accordion block">
                      <div className="acc-btn">
                        <span className="count">1.</span> {faq.question}
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </li>
                    ))}
                    </ul>
                </div>
              </div>
              
              )}

        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12 mt-45">
              <h5>Service About</h5>
              <PortableText  
                className=''
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={service.about}
                serializers = {{
                    h1: (props) => (
                        <h1 className='text-3xl font-bold my-5' {...props} />
                        ),
                    h2: (props) => (
                        <h2 className='text-xl font-bold my-5' {...props} />
                        ),
                    ul: (props) => (
                      <div className='ullist'><ul className='' {...props} /></div>
                       ),
                    li: ({children}) => (
                        <li className='ml-8 list-disc' >
                            {children}
                        </li>
                    ),
                    blockquote: ({children}) => (
                        <blockquote className='mx-4 italic font-thin text-slate-400 my-5'>{children}</blockquote>
                    )
                    ,
                    link: ({href,children}) => (
                        <a href={href} className="text-blue-500 hover:underline">
                            {children}
                        </a>
                    )
                }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Other Services */}
  {/* <section className="services clear section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-12">
          <h6 className="wow" data-splitting="">
            Services That I Provide
          </h6>
          <h1 className="wow" data-splitting="">
            Other Services
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <a href="services-page.html">
                {" "}
                <span className="icon et-bargraph" />
                <h5>SEO Marketing</h5>
                <p>
                  Website ravida surna eveti semen the conse tusio anivite
                  dianne one nivam acestion vue artin dictum.
                </p>
                <div className="numb">02</div>
              </a>
            </div>
            <div className="item">
              <a href="services-page.html">
                {" "}
                <span className="icon et-basket" />
                <h5>eCommerce</h5>
                <p>
                  Website ravida surna eveti semen the conse tusio anivite
                  dianne one nivam acestion vue artin dictum.
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
                  Website ravida surna eveti semen the conse tusio anivite
                  dianne one nivam acestion vue artin dictum.
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
                  Website ravida surna eveti semen the conse tusio anivite
                  dianne one nivam acestion vue artin dictum.
                </p>
                <div className="numb">05</div>
              </a>
            </div>
            <div className="item">
              <a href="services-page.html">
                {" "}
                <span className="icon et-chat" />
                <h5>Social Media</h5>
                <p>
                  Website ravida surna eveti semen the conse tusio anivite
                  dianne one nivam acestion vue artin dictum.
                </p>
                <div className="numb">06</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
</>
  )
}

export default Service

export const getStaticPaths = async() => {
  const query = `*[_type == 'service']{
      _id,
      slug{
          current
      },
  }`

  const service = await sanityClient.fetch(query)

  const paths = service.map(service => ({
      params: {
          slug: service.slug.current
      }
      
  }))

  return{
      paths,
      fallback: 'blocking'
  }
}

export const getStaticProps = async({params}) => {
  const query = `*[_type == "service" && 
  slug.current == $slug ][0]{
    _id,
    title,
    body,
    about,
    mainImage,
    slug,
    "faq": *[
      _type == "faq" && 
      service._ref == ^._id
    ]{
      question,
      answer,
      _id,
      _updatedAt,
    },
}`
// const postFields = `
// _id,
// name,
// title,
// description,
// 'date': publishedAt,
// 'slug': slug.current,
// 'coverImage': mainImage,
// author -> {
//   image,
//   name
// },
// `
// const moreQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
//   ${postFields}
//   body,
// }[0...2]`

  const service = await sanityClient.fetch(query, {
      slug: params?.slug
  })

  // const morePost = await sanityClient.fetch(moreQuery, {
  //     slug: params?.slug
  // })

  if(!service){
      return{
          notFound: true
      }
  }

  return {
      props: {
          service
          // ,morePost
      },
      revalidate: 3600,
  }
}