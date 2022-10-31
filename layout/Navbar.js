import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import $ from "jquery"



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
//  $('.nilsbrown-js-nav-toggle').on('click', function (e) {
//      var $this = $(this);
//      e.preventDefault();
//      if ($('body').hasClass('menu-open')) {
//          $this.removeClass('active');
//          $('.nilsbrown-menu .nilsbrown-menu-inner > ul > li').each(function (i) {
//              var that = $(this);
//              setTimeout(function () {
//                  that.removeClass('is-show');
//              }, i * 100);
//          });
//          setTimeout(function () {
//              $('.nilsbrown-menu').removeClass('nilsbrown-menu-show');
//          }, 800);
//          $('body').removeClass('menu-open');
//      }
//      else {
//          $('.nilsbrown-menu').addClass('nilsbrown-menu-show');
       
//          $this.addClass('active');
//          $('body').addClass('menu-open');
//          setTimeout(function () {
//              $('.nilsbrown-menu .nilsbrown-menu-inner > ul > li').each(function (i) {
//                  var that = $(this);
//                  setTimeout(function () {
//                      that.addClass('is-show');
//                  }, i * 100);
//              });
//          }, 500);
//      }
//  });
//  $('.nilsbrown-menu .dropdown').hover(function () {
//      var $this = $(this);
//      $this.addClass('show');
//      $this.find('> a').attr('aria-expanded', true);
//      $this.find('.dropdown-menu').addClass('show');
//  }, function () {
//      var $this = $(this);
//      $this.removeClass('show');
//      $this.find('> a').attr('aria-expanded', false);
//      $this.find('.dropdown-menu').removeClass('show');
//  });


   
}

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
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
        <li className={`${show?"is-show":""}`}>
        <Link href="/">
        <a >Home</a>
        </Link>
        </li>
        <li className={`${show?"is-show":""}`}>
          <Link href="/about">
          <a >Resume</a>
          </Link>
         
        </li>
        <li className={`${show?"is-show":""}`}>
          <Link href="/services">
          <a >Services</a>
          </Link> 
        </li>
        <li className={`${show?"is-show":""}`}>
          <Link href="/portfolio">
          <a >Portfolio</a>
          </Link>
          
        </li>
        <li className={`${show?"is-show":""}`}>
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
        <li className={`${show?"is-show":""}`}>
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