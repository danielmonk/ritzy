import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import gallerypic1 from '../assets/images/img_1644.jpg'
import gallerypic2 from '../assets/images/img_2125.jpg'
import gallerypic3 from '../assets/images/img_2132.jpg'
import gallerypic4 from '../assets/images/img_2133.jpg'
import gallerypic5 from '../assets/images/img_2156.jpg'
import gallerypic6 from '../assets/images/img_2533.jpg'
import gallerypic7 from '../assets/images/img_2534.jpg'
import gallerypic8 from '../assets/images/img_3266.jpg'
import gallerypic9 from '../assets/images/img_3505.jpg'
import safety1 from '../assets/images/safety2.png'
import safety2 from '../assets/images/safety3.png'
import safety3 from '../assets/images/safety4.png'
import carpet1 from '../assets/images/IMG_0497.png'
import carpet2 from '../assets/images/IMG_0496.png'
import carpet3 from '../assets/images/carpet3.png'
import bespoke1 from '../assets/images/IMG_0024@2x.png'
import garage1 from '../assets/images/IMG_1516.png'
import garage2 from '../assets/images/IMG_1515-2.png'
import garage3 from '../assets/images/img_1293.jpg'
import bespoke2 from '../assets/images/img_2133.jpg'

const Elements = (props) => (
    <SimpleReactLightbox>
    <Layout>
        <Helmet>
            <title>Gallery</title>
            <meta name="description" content="Gallery" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Gallery</h1>
                    </header>
                    <SRLWrapper>
                    <div className="box alt">
                        <p><span>Wooden</span> effects</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Bespoke</span> floor</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke2} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Carpets</span></p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={carpet1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet3} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Safety</span> flooring</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={safety1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={safety2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={safety3} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Garage</span> flooring</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={garage1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={garage2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={garage3} alt="" /></span></div>
                        </div>
                    </div>
                    </SRLWrapper>
                </div>
            </section>

        </div>

    </Layout>
    </SimpleReactLightbox>
)

export default Elements