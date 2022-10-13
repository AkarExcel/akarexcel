import React from 'react'
import PortableText from 'react-portable-text'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from '../../layout/Navbar'
import { sanityClient, urlFor } from '../../sanity'
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'

const Portfolio = ({portfolio, morePortfolio}) => {
  return (
<>
<Head>
    <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{portfolio.title}</title>
      <link rel="icon" type="image/png" href="images/favicon.png" />
</Head>

    <Script src="js/plugins/jquery-3.6.0.min.js"></Script>
      <Script src="js/plugins/bootstrap.min.js"></Script>
      <Script src="js/plugins/owl.carousel.min.js"></Script>
      <Script src="js/plugins/jquery.magnific-popup.min.js"></Script>
      <Script src="js/plugins/YouTubePopUp.js"></Script>
      <Script src="js/plugins/jquery.easing.1.3.js"></Script>
      <Script src="js/plugins/smooth-scroll.min.js"></Script>
      <Script src="js/plugins/wow.js"></Script>
      <Script src="js/custom.js"></Script>  
<Navbar/>
<section className="section-padding portfolio-page">
  <div className="container">
    <div className="row">
      <div className="col-md-7">
        {/* Images */}
        <div className="row">
          <div className="col-md-12 gallery-item">
            <div className="owl-carousel owl-theme text-center">
              {/* {portfolio.gallery && portfolio.gallery.map((image, index) => (
                <div key={index} className="item">
                <div className="gallery-item-inner">
                  <a
                    href={urlFor(image).url()}
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src={urlFor(image).url()}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              ))} */}
              
              <div className="item">
                <div className="gallery-item-inner">
                  <a
                    href="images/portfolio/2.jpg"
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src="images/portfolio/2.jpg"
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="gallery-item-inner">
                  <a
                    href="images/portfolio/3.jpg"
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src="images/portfolio/3.jpg"
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="gallery-item-inner">
                  <a
                    href="images/portfolio/3.jpg"
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src="images/portfolio/3.jpg"
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-1">
        <h6 className="wow" data-splitting="">
          {portfolio.category}
        </h6>
        <h1 className="wow" data-splitting="">
          {portfolio.title}
        </h1>
        <p className="mt-45 wow fadeInUp" data-wow-delay=".1s">
          {portfolio.description}
        </p>
        <p className="mt-45 wow fadeInUp" data-wow-delay=".2s">
          <span>Date :</span> {new Date(portfolio.date).toLocaleDateString('en-EN', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
        <p className="wow fadeInUp" data-wow-delay=".3s">
          <span>Client :</span> {portfolio.client}
        </p>
        <p className="wow fadeInUp" data-wow-delay=".3s">
          <span>Firm Name :</span> {portfolio.firm}
        </p>
        <p className="wow fadeInUp" data-wow-delay=".3s">
          <span>Category :</span> {portfolio.tags.join(', ').split('')}
        </p>
        <div
          className="btn-wrap wow fadeInUp text-left mt-45"
          data-wow-delay=".9s"
        >
          <div className="btn-link">
            {" "}
            <a href={portfolio.link} target="_blank" rel='noreferrer'>
              Live website <i className="ti-arrow-top-right" />{" "}
            </a>{" "}
            <span className="btn-block color1 animation-bounce" />{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* Next & Prev */}
  <section className="nex-prv">
    <div className="container">
      <div className="row">
        <div className="col-md-5 rest">
          <div className="prv">
            <div
              className="img bg-img"
              data-background="images/portfolio/9.jpg"
            >
              <div className="text-left ontop">
                <h5>{morePortfolio[0].title}</h5>{" "}
                <span className="sub-title mb-0 mt-10">
                <Link  href={`/portfolio/${morePortfolio[0].slug.current}`}>
                  <a>Prev Project</a>
                  </Link>
                </span>
              </div>
              <div className="overly" />
            </div>
          </div>
        </div>
        <div className="col-md-2 text-center rest">
          <Link
            href='/portfolio'
            className="all-works d-flex align-items-center"
          >
            <a>{" "}<span className="icon full-width ti-layout-grid3" />{" "}</a>   
          </Link>
        </div>
        <div className="col-md-5 rest">
          <div className="nxt">
            <div
              className="img bg-img"
              data-background="images/portfolio/4.jpg"
            >
              <div className="text-right ontop">
                <h5>{morePortfolio[1].title}</h5>{" "}
                <span className="sub-title mb-0 mt-10">
                  <Link  href={`/portfolio/${morePortfolio[1].slug.current}`}>
                  <a>Next Project</a>
                  </Link>
                </span>
              </div>
              <div className="overly" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Portfolio

export const getStaticPaths = async() => {
  const query = `*[_type == 'portfolio']{
      _id,
      slug{
          current
      },
  }`

  const portfolio = await sanityClient.fetch(query)

  const paths = portfolio.map(portfolio => ({
      params: {
          slug: portfolio.slug.current
      }
      
  }))

  return{
      paths,
      fallback: false
  }
}

export const getStaticProps = async({params}) => {
  const query = `*[_type == "portfolio" && 
  slug.current == $slug ][0]{
    _id,
    title,
    link,
    tags,
    gallery,
    firm,
    client,
    date,
    description,
    category
    
}`
 const postFields = `
    _id,
    title,
    slug,
    portfolioImage,
    service
`
const moreQuery = `*[_type == "portfolio" && slug.current != $slug] | order(_updatedAt desc){
  ${postFields},
}[0...2]`

  const portfolio = await sanityClient.fetch(query, {
      slug: params?.slug
  })

  const morePortfolio = await sanityClient.fetch(moreQuery, {
      slug: params?.slug
  })

  if(!portfolio){
      return{
          notFound: true
      }
  }

  return {
      props: {
          portfolio
          ,morePortfolio
      },
      revalidate: 3600,
  }
}