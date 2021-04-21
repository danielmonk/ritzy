import React, { Component } from "react";
import Slider from "react-slick";
//import { Grid, Cell } from 'react-foundation';
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      //centerMode: true,
      //centerPadding: 100,
      autoplay: true,
      touchThreshold:100,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
        }
      ]      
    };
    return (
        <section id="insta">
            <div className="content--wrapper content--wrapper--big">
              <div className="column centered">
                <Fade>
                  <h4>Follow us on <strong><a href="https://www.instagram.com/ritzybarber" target="_blank">Instagram</a><a className="insta" href="https://www.instagram.com/ritzybarber" target="_blank"></a></strong></h4>
                  <p>Keep up to date with all of our latest news.</p>
                </Fade>
              </div>
            </div>
        </section>
    );
  }
}