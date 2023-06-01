import Link from 'next/link'
import React from 'react'
import {urlFor} from "../sanity"

const Blog = ({posts}) => {
  const months = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
  return (
    <section id="blog" className="homepage-blog section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-12">
          <h6 className="wow" data-splitting="">
            Recent Articles
          </h6>
          <h1 className="wow" data-splitting="">
            Latest News
          </h1>
        </div>
      </div>
      {posts.map((post,index) => (
        (index+1)%2 != 0 ?
        <div key={post._id} className="row mb-30">
        <div className="col-md-6">
          <div className="img left">
            <Link href={`/post/${post.slug.current}`}>
              <img src={urlFor(post.mainImage).url()} alt="" />
            </Link>
          </div>
        </div>
        <div className="col-md-6 valign">
          <div className="content">
            <div className="date">
              
              <h1>{post.publishedAt.match(/\d+/g)[2]}</h1>
              <h6>{months[parseInt(post.publishedAt.match(/\d+/g)[1])]} {post.publishedAt.match(/\d+/g)[0]}</h6>
            </div>
            <div className="cont">
              <h5>{post.title}</h5>
              <p>
               {post.description}
              </p>
              <div className="btn-wrap">
                <div className="btn-link">
                  {" "}
                  <Link href={`/post/${post.slug.current}`}>
                  <a>
                    Read more <i className="ti-arrow-right" />
                  </a>
                  </Link>
                  {" "}
                  <span className="btn-block color1 animation-bounce" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="row mb-30">
        <div className="col-md-6 order2 valign">
          <div className="content">
            <div className="date">
              <h1>{post.publishedAt.match(/\d+/g)[2]}</h1>
              <h6>{months[parseInt(post.publishedAt.match(/\d+/g)[1])]} {post.publishedAt.match(/\d+/g)[0]}</h6>
            </div>
            <div className="cont">
              <h5>{post.title}</h5>
              <p>
              {post.description}
              </p>
              <div className="btn-wrap">
                <div className="btn-link">
                  {" "}
                  <Link href={`/post/${post.slug.current}`}>
                  <a>
                    Read more <i className="ti-arrow-right" />
                  </a>
                  </Link>{" "}
                  <span className="btn-block color1 animation-bounce" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order1">
          <div className="img left">
            <Link href={`/post/${post.slug.current}`}>
            <img src={urlFor(post.mainImage).url()} alt="" />
            </Link>
          </div>
        </div>
      </div>
      ))}

    </div>
  </section>
  )
}

export default Blog