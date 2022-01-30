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
let insta1Link = "https://www.instagram.com/p/CD9PcGcD_Nd/"

let insta2Link = "https://www.instagram.com/p/CC36kx5jV-L/"

let insta3Link = "https://www.instagram.com/p/CCl3PJVjol4/"

let insta4Link = "https://www.instagram.com/p/CAujdf_julb/"

let insta5Link = "https://www.instagram.com/p/CABSzWsjSFD/"
let instaPhoto6 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/94837887_243375443533012_3976964820012419774_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=hS5SKhneGWIAX8X4SHk&_nc_tp=15&oh=9275146e28285fe61c460c3ce167e510&oe=5F935FE2"
let insta6Link = "https://www.instagram.com/p/B_k2-5IjwsF/"
let instaPhoto7 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/94444109_534106800844687_5954877744533653086_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kQt0522P7NwAX-aHubH&_nc_tp=18&oh=4e0c305bc2fa473190b758981079fc2a&oe=5F90E2A6"
let insta7Link = "https://www.instagram.com/p/B_P3suajaLZ/"
let instaPhoto8 = "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/84348364_122408482546961_7316840853933633656_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=juSIGrTOBm4AX9oSXQo&_nc_tp=18&oh=a9669465d5d0c09c829badfc81c0f1a9&oe=5F93C7D5"
let insta8Link = "https://www.instagram.com/p/B8uP5W0g5Pi/"
let instaPhoto9 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/82424935_151815782913748_6485747346384039280_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=xXPbbeFlWXEAX_kVa7B&_nc_tp=19&oh=9ba3731bc63f718b2ee6d7f0a5210763&oe=5F93AFF7"
let insta9Link = "https://www.instagram.com/p/B7UK7tpAzmb/"
let instaPhoto10 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/75616364_189920152056493_571939182375379545_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=101&_nc_ohc=de4f6vAfvbIAX8mFquU&_nc_tp=18&oh=eaf35d61e732ba1bf234ca74f2f85a11&oe=5F93BE7D"
let insta10Link = "https://www.instagram.com/p/B56A-1agxCN/"


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
                    <h2>Gallery</h2>
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