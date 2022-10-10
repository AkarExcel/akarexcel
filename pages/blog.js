import React from 'react'
import Navbar from '../layout/Navbar'

const Blog = () => {
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
            <div className="col-md-12">
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    {" "}
                    <img src="images/blog/1.jpg" alt="" />{" "}
                  </a>
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>14</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="post-cont">
                  <div className="blog-post-categorydate-wrapper">
                    <a href="blog.html">
                      <div>Blog</div>
                    </a>
                    <div className="blog-post-categorydate-divider" />
                    <div>Advertising</div>
                  </div>
                  <h4>
                    <a href="post.html">Get Started With Tiktok Ads.</a>
                  </h4>
                  <p>
                    Graphic potenti fringilla pretium ipsum non blandit. Vivamus
                    eget nisi non mi iaculis iaculis imserie quiseros sevin
                    elentesque habitant morbi tristique senectus et netus et
                    malesuada fames actur sisenestion mauris suscipit mis nec
                    esta a tincidunt eros.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    {" "}
                    <img src="images/blog/4.jpg" alt="" />{" "}
                  </a>
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>14</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="post-cont">
                  <div className="blog-post-categorydate-wrapper">
                    <a href="blog.html">
                      <div>Blog</div>
                    </a>
                    <div className="blog-post-categorydate-divider" />
                    <div>Technology</div>
                  </div>
                  <h4>
                    <a href="post.html">The Metaverse – how’s it going?</a>
                  </h4>
                  <p>
                    Graphic potenti fringilla pretium ipsum non blandit. Vivamus
                    eget nisi non mi iaculis iaculis imserie quiseros sevin
                    elentesque habitant morbi tristique senectus et netus et
                    malesuada fames actur sisenestion mauris suscipit mis nec
                    esta a tincidunt eros.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    {" "}
                    <img src="images/blog/5.jpg" alt="" />{" "}
                  </a>
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>14</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="post-cont">
                  <div className="blog-post-categorydate-wrapper">
                    <a href="blog.html">
                      <div>Blog</div>
                    </a>
                    <div className="blog-post-categorydate-divider" />
                    <div>UX Design</div>
                  </div>
                  <h4>
                    <a href="post.html">UX in Ecommerce – 5 things to avoid.</a>
                  </h4>
                  <p>
                    Graphic potenti fringilla pretium ipsum non blandit. Vivamus
                    eget nisi non mi iaculis iaculis imserie quiseros sevin
                    elentesque habitant morbi tristique senectus et netus et
                    malesuada fames actur sisenestion mauris suscipit mis nec
                    esta a tincidunt eros.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* Pagination */}
              <ul className="pagination-wrap align-center mb-30 mt-30">
                <li>
                  <a href="blog2.html#">
                    <i className="ti-angle-left" />
                  </a>
                </li>
                <li>
                  <a href="blog2.html#">1</a>
                </li>
                <li>
                  <a href="blog2.html#" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="blog2.html#">3</a>
                </li>
                <li>
                  <a href="blog2.html#">
                    <i className="ti-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="col-md-4">
          <div className="row blog-sidebar">
            <div className="col-md-12">
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
            </div>
            <div className="col-md-12">
              <div className="widget">
                <div className="widget-title">
                  <h5>Recent Posts</h5>
                </div>
                <ul className="recent">
                  <li>
                    <div className="thum">
                      {" "}
                      <img src="images/blog/1.jpg" alt="" />{" "}
                    </div>{" "}
                    <a href="post.html">Get Started With Tiktok Ads.</a>
                  </li>
                  <li>
                    <div className="thum">
                      {" "}
                      <img src="images/blog/4.jpg" alt="" />{" "}
                    </div>{" "}
                    <a href="post.html">The Metaverse – how’s it going?</a>
                  </li>
                  <li>
                    <div className="thum">
                      {" "}
                      <img src="images/blog/5.jpg" alt="" />{" "}
                    </div>{" "}
                    <a href="post.html">UX in Ecommerce – 5 things to avoid.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
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
            </div>
            <div className="col-md-12">
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
            </div>
            <div className="col-md-12">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Blog