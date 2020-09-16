import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerGarage from '../components/BannerGarage'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import gallerypic1 from '../assets/images/img_1644.jpg'
import gallerypic2 from '../assets/images/img_2125.jpg'
import gallerypic3 from '../assets/images/img_2132.jpg'
import gallerypic4 from '../assets/images/img_2133.jpg'
import garagepic from '../assets/images/img_1293.jpg'
import safetyImg from '../assets/images/safety2.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Lux Garage</title>
            <meta name="description" content="Lux Garage" />
        </Helmet>

        <BannerGarage />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={garagepic} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Orci maecenas</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="#" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={garagepic} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="#" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two">
                <div className="inner">
                <header className="major smaller">
                        <h2 className="boxed">A solution for <span>all</span> your <span>flooring</span> needs</h2>
                </header>
                <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.</p>
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
)

export default Landing