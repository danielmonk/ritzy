import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleReactLightbox from "simple-react-lightbox";
import Fade from 'react-reveal/Fade';
import { SRLWrapper } from "simple-react-lightbox";
import instaPhoto1 from "../images/ig-1.jpeg";
import instaPhoto2 from "../images/ig-2.jpeg";
import instaPhoto3 from "../images/ig-3.jpeg";
import instaPhoto4 from "../images/ig-4.jpeg";
import instaPhoto5 from "../images/ig-5.jpeg";
import instaPhoto6 from "../images/ig-6.jpg";
import instaPhoto7 from "../images/ig-7.jpg";
import instaPhoto8 from "../images/ig-8.jpg";
import instaPhoto9 from "../images/ig-9.jpg";
import instaPhoto10 from "../images/ig-10.jpg";
import instaPhoto11 from "../images/ig-11.jpg";
import instaPhoto12 from "../images/ig-12.jpg";
import instaPhoto13 from "../images/ig-13.jpg";
import instaPhoto14 from "../images/ig-14.jpg";
import instaPhoto15 from "../images/ig-15.jpg";


class Gallery extends React.Component {

  componentDidMount () {

  }
  render () {
    return (
    <SimpleReactLightbox> 
      <Layout>
        <SEO title="Gallery" keywords={[`Ritzy Barbers`, `Ritzy`, `Peterborough Barbers`, `Hair Peterborough`, `Hair Stylist Peterborough`, `Hair Colouring Peterborough`, `Mens Hair Peterborough`, `Skin Fade Peterborough` ,`Beard Trim Peterborough` ,`Hair and Beard Peterborough`]} />
        <div className="page page--gallery">
            <div className="content--wrapper">
            <div id="gallery-page" className="gallery-page">
                <Fade>
                <header className="header--page">
                    <h2>Content</h2>
                </header>
                </Fade>
                <SRLWrapper>
                <Fade>
                <section className="gallery-block" id="gallery-block">
                    <div className="gallery-block__single">
                        <img src={instaPhoto1}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto2}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto3}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto4}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto5}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto6}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto7}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto8}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto9}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto10}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto11}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto12}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto13}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto14}></img>
                    </div>
                    <div className="gallery-block__single">
                        <img src={instaPhoto15}></img>
                    </div>
                </section>
                </Fade>
                </SRLWrapper>
            </div>
            </div>
        </div>
      </Layout>
      </SimpleReactLightbox>
    )
  }
}

export default Gallery