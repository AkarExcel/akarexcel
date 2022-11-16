import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import Pagination from '../component/Pagination'
import Navbar from '../layout/Navbar'
import { sanityClient, urlFor } from '../sanity'

const Blog = ({posts}) => {
  const recentPost = posts.filter((post,index) => index < 3)
  // const[post,setPosts]= useState([])
  const [currentPage,setCurrentPage]= useState(1)
  const [postPerPage,setPostPerPage]= useState(2)
  // useEffect(
  //   setPosts(posts)
  // ,[post])
  const indexOflastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOflastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOflastPost)

  //change pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
<>
<Navbar/>
  {/* Blog */}
  <section className="blog section-padding">
    <div className="container">
      <div className="row mb-45">
        <div className="col-md-12">
          <h6 className="wow" data-splitting="">
            Recent Articles
          </h6>
          <h1 className="wow" data-splitting="">
            From Our Blogs
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {
              currentPosts.map(post => (
                
              <div key={post._id} className="col-md-12">
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    {" "}
                    <img src={urlFor(post.mainImage).url()} alt="" />{" "}
                  </a>
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-EN',{month: 'short'})}</span> <i>{new Date(post.publishedAt).toLocaleDateString('en-EN',{ day: 'numeric'})}</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="post-cont">
                  <div className="blog-post-categorydate-wrapper">
                    <a href="blog.html">
                      <div>Blog</div>
                    </a>
                    <div className="blog-post-categorydate-divider" />
                    <div>{post.categories[0].title}</div>
                  </div>
                  <h4>
                    <Link href={`post/${post.slug.current}`}><a>{post.title}</a></Link>
                  </h4>
                  <p>
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
              ))
            }
            <div className="col-md-12">
              {/* Pagination */}
              <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="col-md-4">
          <div className="row blog-sidebar">
            {/* search */}
            {/* <div className="col-md-12">
              <div className="widget search">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Type here ..."
                  />
                  <button type="submit">
                    <i className="ti-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div> */}
            {/* Recent Posts */}
            <div className="col-md-12">
              <div className="widget">
                <div className="widget-title">
                  <h5>Recent Posts</h5>
                </div>
                <ul className="recent">
              {recentPost.map((post) => (
                <li key={post._id}>
                <div className="thum">
                  {" "}
                  <img src={urlFor(post.mainImage).url()} alt="" />{" "}
                </div>{" "}
                <Link href={`post/${post.slug.current}`}><a>{post.title}</a></Link>
              </li>
              ))}
                </ul>
              </div>
            </div>
            {/* Archives */}
            {/* <div className="col-md-12">
              <div className="widget">
                <div className="widget-title">
                  <h5>Archives</h5>
                </div>
                <ul>
                  <li>
                    <a href="#">December 2022</a>
                  </li>
                  <li>
                    <a href="#">November 2022</a>
                  </li>
                  <li>
                    <a href="#">October 2022</a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* Categories */}
            {/* <div className="col-md-12">
              <div className="widget">
                <div className="widget-title">
                  <h5>Categories</h5>
                </div>
                <ul>
                  <li>
                    <a href="blog.html">
                      <i className="ti-angle-right" />
                      Website Design
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i className="ti-angle-right" />
                      E-Commerce
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i className="ti-angle-right" />
                      Web Development
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* Tags */}
            {/* <div className="col-md-12">
              <div className="widget">
                <div className="widget-title">
                  <h5>Tags</h5>
                </div>
                <ul className="tags">
                  <li>
                    <a href="#">Website</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">Branding</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Blog

export async function getStaticProps(){
  const query = `*[_type == "post"][0...100]{
    _id,
    title,
    publishedAt,
    categories[] -> {
      title,         
},
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  // const serviceQuery = `*[_type == 'service']{
  //   _id,
  //   description,
  //   name,
  //   title,
  //   slug,
  //   images[] -> {
  //     title,
  //     mainImage,
  //     _id,
  //   }
  // }`

  // const services = await sanityClient.fetch(serviceQuery)

  const posts = await sanityClient.fetch(query)
  // const services = data;
  return{
    props: {
      posts
      // ,services
    },
    revalidate: 900 // revalidate every 15mins
  }
} 