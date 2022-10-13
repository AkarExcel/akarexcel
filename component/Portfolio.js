import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const Portfolio = ({portfolio}) => {

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
            {portfolio.map((project) => (
              <div key={project._id} className="item">
              <Link href={`/portfolio/${project.slug.current}`}>
              <a>
                <div className="img-block">
                  <div className="wrapper-img">
                    {" "}
                    <img
                      src={urlFor(project.portfolioImage).url()}
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div className="title-block">
                    <h4>{project.title}</h4>
                    <p>{project.service}</p>
                  </div>
                </div>
              </a>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio

