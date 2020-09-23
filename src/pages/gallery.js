import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleReactLightbox from "simple-react-lightbox";
import Fade from 'react-reveal/Fade';
import { SRLWrapper } from "simple-react-lightbox";
let instaPhoto1 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/117795878_1250199461991549_3576501364359053768_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=_G5PxI7NTm4AX9rZB43&oh=513fe279817825e6e0d30e7eca901d25&oe=5F894506"
let insta1Link = "https://www.instagram.com/p/CD9PcGcD_Nd/"
let instaPhoto2 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/109811559_586866545310110_141645576686131022_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=cTFLx5f9H9oAX-2itLJ&_nc_tp=18&oh=c590959ebd566da74a7ee4f72116b482&oe=5F942440"
let insta2Link = "https://www.instagram.com/p/CC36kx5jV-L/"
let instaPhoto3 = "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/107869648_609295649723384_3063073575809310173_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=KFA1s29EyIwAX_enfig&_nc_tp=15&oh=27ac359a1c64d13c2686307348704299&oe=5F91565E"
let insta3Link = "https://www.instagram.com/p/CCl3PJVjol4/"
let instaPhoto4 = "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/101013839_723611708178978_1691840401939268412_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=106&_nc_ohc=ePkf91iDhJoAX_HD8kG&_nc_tp=19&oh=855f96c16d64f0b551e13dffcd6453ab&oe=5F91F86B"
let insta4Link = "https://www.instagram.com/p/CAujdf_julb/"
let instaPhoto5 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/97572216_1092615757781995_5210964166121146314_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=107&_nc_ohc=01yQ3H-jS3YAX_3gCEV&_nc_tp=15&oh=2e93bb5ca784c33f00f1993172c7b41a&oe=5F92092B"
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
        <SEO title="Gallery" keywords={[`gatsby`, `application`, `react`]} />
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