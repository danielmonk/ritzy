import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFloors from '../components/BannerFloors'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import gallerypic1 from '../assets/images/img_1644.jpg'
import gallerypic2 from '../assets/images/img_2125.jpg'
import gallerypic3 from '../assets/images/img_2132.jpg'
import gallerypic4 from '../assets/images/img_2133.jpg'
import gallerypic5 from '../assets/images/img_2156.jpg'
import safetyImg from '../assets/images/safety2.png'

const Landing = (props) => (
<SimpleReactLightbox>
    <Layout>
        <Helmet>
            <title>Lux Floors</title>
            <meta name="description" content="Lux Floors" />
        </Helmet>

        <BannerFloors />

        <div id="main">
            <section id="one">
                <div className="inner padded-right">
                    <header className="major">
                        <h2>Long-lasting Luxury</h2>
                    </header>
                    <p>We offer endless different variations of high quality flooring options to meet your needs. From herringbone laminate wood flooring to luxurious all-purpose carpets, we specialise in having a a solution for all your flooring needs.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={gallerypic1} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Herringbone Flooring</h3>
                            </header>
                            <p>Speak to anyone about interior design trends, and herringbone wood floor will be at the forefront of many people’s minds. Its distinctive pattern often comes in the form of real wood or laminate options, herringbone offers affordability and endurance coupled with a very easy maintenance routine.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={gallerypic2} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>LVT Flooring</h3>
                            </header>
                            <p>Luxury Vinyl Flooring (LVT) gives you the look of a real wooden, stone or ceramic floor, but is more hardwearing and a fully waterproof option so they make an ideal kitchen or bathroom flooring. LVT flooring is the ultimate choice if you’re looking for an even blend of practicality and authenticity.</p>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two">
                <div className="inner">
                <header className="major smaller">
                        <h2 className="boxed">A solution for <span>all</span> your <span>flooring</span> needs</h2>
                </header>
                <p>Take a look at some of the high quality jobs we've completed for some of our clients.</p>
                    <div className="box alt">
                    <SRLWrapper>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span>
                            <p><span>Wooden</span> Effects</p></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic4} alt="" /></span><p><span>Bespoke</span> flooring</p></div>
                            <div className="col-4"><span className="image fit"><img src={safetyImg} alt="" /></span><p><span>Safety</span> flooring</p></div>
                        </div>
                        <ul className="actions">
                            <li><Link to="/gallery" className="button">View Full Gallery</Link></li>
                        </ul>
                    </SRLWrapper>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
    </SimpleReactLightbox>
)

export default Landing