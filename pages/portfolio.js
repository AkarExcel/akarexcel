import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../layout/Navbar'
import { sanityClient, urlFor } from '../sanity'

const Portfolio = ({portfolios}) => {
  return (
<>
<Head>
  <title>Portfolio</title>
</Head>
<Navbar/>
<section className="portfolio section-padding">
  <div className="container">
    <div className="row mb-45">
      <div className="col-md-4">
        <h6 className="wow" data-splitting="">
          Our Works
        </h6>
        <h1 className="wow" data-splitting="">
          Portfolio
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
    {portfolios.map((portfolio,index) => (
            <div key={portfolio._id} className="col-md-4">
            <div className="item mb-30">
            <Link href={`/portfolio/${portfolio.slug.current}`}>
              <a>
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img src={urlFor(portfolio.portfolioImage).url()} className="img-fluid" />{" "}
                  </div>
                  <div className="title-block">
                    <h4>{portfolio.title}</h4>
                    <p>{portfolio.service}</p>
                  </div>
                </div>
              </a>
              </Link>
            </div>
            
          </div>
      ))}
    </div>
  </div>
</section>

</>
  )
}

export default Portfolio


export async function getStaticProps(){
  const portfolioQuery = `*[_type == 'portfolio']{
    _id,
    description,
    title,
    slug,
    portfolioImage,
    portfolio
  }`

  const portfolios = await sanityClient.fetch(portfolioQuery)
  return{
    props: {
      portfolios
    }
  }
}
