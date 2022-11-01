import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
//import $ from "jquery"
import NavList from './NavList'
import FakeSuspense from './FalseSuspense'



if(typeof window !== "undefined"){
    // Menu Navigation
    

//     var OnePageNav = function () {
//       var navToggler = $('.nilsbrown-js-nav-toggle');
//      $(".smoothscroll[href^='#'], #nilsbrown-navbar ul li a[href^='#']").on('click', function (e) {
//          e.preventDefault();
//          var hash = this.hash;
//          $('html, body').animate({
//              scrollTop: $(hash).offset().top
//          }, 700, 'easeInOutExpo', function () {
//              window.location.hash = hash;
//          });
//      });
//      $("#nilsbrown-navbar ul li a[href^='#']").on('click', function (e) {
//          if (navToggler.is(':visible')) {
//              navToggler.click();
//          }
//      });
//  };
//  OnePageNav();
 $(window).scroll(function () {
     var $this = $(this)
         , st = $this.scrollTop()
         , navbar = $('.nilsbrown-header')
         , logo = $(".nilsbrown-header .logo> img");
     if (st > 150) {
         if (!navbar.hasClass('scrolled')) {
             navbar.addClass('scrolled');
             logo.attr('src', 'images/logo-dark.png');
         }
     }
     if (st < 150) {
         if (navbar.hasClass('scrolled')) {
             navbar.removeClass('scrolled sleep');
             logo.attr('src', 'images/logo-dark.png');
         }
     }
     if (st > 350) {
         if (!navbar.hasClass('awake')) {
             navbar.addClass('awake');
         }
     }
     if (st < 350) {
         if (navbar.hasClass('awake')) {
             navbar.removeClass('awake');
             navbar.addClass('sleep');
         }
     }
 });

}

const Navbar = () => {
  const [show, setShow] = useState(false);

  const Links = [{
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Portfolio',
    link: '/portfolio'
  },
  // {
  //   name: "Resume",
  //   link: "/resume"
  // },
  {
    name: "Services",
    link: "/services"
  },
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
]

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show)
    if(typeof window !== "undefined"){
    document.querySelector('body').classList.toggle("menu-open")
    }
  }
  return (
<>
  {/* Menu */}
  {/* <nav className={`nilsbrown-menu ${show?"nilsbrown-menu":""}`}id="nilsbrown-navbar-spy"> */}
  <nav className={`nilsbrown-menu ${show?"nilsbrown-menu-show": ""}`}id="nilsbrown-navbar-spy">
    <div className="nilsbrown-menu-inner" id="nilsbrown-navbar">
      <ul className="list-unstyled">

        {Links.map((link, index) => (
 
          <li key={index} className={`${show?"is-show":""}`}>
              <Link href={link.link}>
              <a >{link.name}</a>
              </Link>
            
            </li>
        ))}
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
              <div className="logo" style={{
                paddingDown: "200px"
              }}>
                <Image 
                src="/images/logo-dark.png"
                alt=""
                width={300}
                height={75} />
              </div>
            </a>
            </Link>
          </div>
        </div>
        {/* Menu Burger */}
        <div className="col-4 col-md-4 text-right nilsbrown-menu-burger-wrap">
          {" "}
          <a href="#" className={`nilsbrown-nav-toggle nilsbrown-js-nav-toggle ${show?" active": ""}`} onClick={handleShow}>
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