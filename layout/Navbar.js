import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<>
  {/* Menu */}
  <nav className="nilsbrown-menu" id="nilsbrown-navbar-spy">
    <div className="nilsbrown-menu-inner" id="nilsbrown-navbar">
      <ul className="list-unstyled">
        <li>
        <Link href="/">
        <a >Home</a>
        </Link>
        </li>
        <li>
          <Link href="/about">
          <a >Resume</a>
          </Link>
         
        </li>
        <li>
          <Link href="/services">
          <a >Services</a>
          </Link> 
        </li>
        <li>
          <Link href="/portfolio">
          <a >Portfolio</a>
          </Link>
          
        </li>
        <li>
          <Link href="/blog">
          <a >Blog</a>
          </Link> 
        </li>
        {/* Dropdown menu
          <li class="dropdown"> <span>Dropdown <i class="ti-angle-down"></i></span>
              <ul class="dropdown-menu">
                  <li class="dropdown-item"><a href="#">Dropdown 1</a></li>
                  <li class="dropdown-item"><a href="#">Dropdown 2</a></li>
                  <li class="dropdown-item"><a href="#">Dropdown 3</a></li>
              </ul>
          </li>
          */}
        <li>
          <Link href="/contact">
          <a >Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  {/* Header */}
  <header className="nilsbrown-header">
    <div className="container">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-8 col-md-8">
          <div className="logo-wrap">
            <Link href="/">
            <a>
              <div className="logo">
                <img src="images/logo-dark.png" alt="" />
              </div>
            </a>
            </Link>
          </div>
        </div>
        {/* Menu Burger */}
        <div className="col-4 col-md-4 text-right nilsbrown-menu-burger-wrap">
          {" "}
          <a href="#" className="nilsbrown-nav-toggle nilsbrown-js-nav-toggle">
            <i />
          </a>{" "}
        </div>
      </div>
    </div>
  </header>
</>

  )
}

export default Navbar