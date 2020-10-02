import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Logo from "../components/images/logoImage"
import Logo from "../images/ritzy-small.png"
import LogoScroll from "../images/ritzy-r.png"
import FacebookIcon from "../images/facebook-inline.svg"
import LinkedInIcon from "../images/linkedin-inline.svg"
import instagramIcon from "../images/instagram-icon.svg"
import githubIcon from "../images/github-logo.svg"
import MailIcon from "../images/envelope-inline.svg"
import '../js/helpers';

export default class Header extends React.Component {
  componentDidMount(){
    var scrollpos = window.scrollY;
    var header = document.querySelector(".header");

    function add_class_on_scroll() {
        header.classList.add("scrolled");
    }

    function remove_class_on_scroll() {
        header.classList.remove("scrolled");
    }

    window.addEventListener('scroll', function(){ 
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if(scrollpos > 800){
          add_class_on_scroll();
      }
      else {
          remove_class_on_scroll();
      }
    });

    // menu 
    const burger = document.querySelectorAll(".burger")
    const close = document.querySelectorAll(".close")
    const body = document.querySelectorAll("html")
    for (let i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function() {
        body[0].classList.toggle("menu-open");
      });
    }
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function() {
        body[0].classList.toggle("menu-open");
      });
    }
    
  }
  render() {
    return (
//const Header = ({ siteTitle }) => (
  <div>
    <header className="header">
      <div className="header--logo">
        <div className="logo">
          <Link to="/"></Link><img src={LogoScroll}></img>
          <h1>Ritzy Studios</h1>
        </div>
      </div>
      <div className="header--nav">
          <svg className="burger" width="86" height="60" view-box="0 0 150 150">
            <g stroke-width="12">   
                <line x1="6" y1="6" x2="50" y2="6"></line>
                <line x1="6" y1="18" x2="50" y2="18"></line>
                <line x1="6" y1="30" x2="50" y2="30"> </line>
            </g>
          </svg>
          <a className="close"></a>
        <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className="book"><a href="https://www.fresha.com/providers/ritzy-studios-kk1eohva?pId=392894">Book Now</a></li>
        </ul>
      </div>
    </header>
    <div className="mobile-menu">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="https://www.fresha.com/providers/ritzy-studios-kk1eohva?pId=392894">Book</a></li>
        </ul>
    </div>
  </div>
)}}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}