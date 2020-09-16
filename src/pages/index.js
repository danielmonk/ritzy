import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import garagepic from '../assets/images/img_1293.jpg'
import garagepic2 from '../assets/images/IMG_1515-2.png'
import carpetpic from '../assets/images/IMG_0497.png'
import gallerypic1 from '../assets/images/img_1644.jpg'
import gallerypic2 from '../assets/images/img_2125.jpg'
import gallerypic3 from '../assets/images/img_2132.jpg'
import gallerypic4 from '../assets/images/img_2133.jpg'
import gallerypic5 from '../assets/images/img_2156.jpg'
import gallerypic6 from '../assets/images/img_2533.jpg'
import gallerypic7 from '../assets/images/img_2534.jpg'
import gallerypic8 from '../assets/images/img_3266.jpg'
import gallerypic9 from '../assets/images/img_3505.jpg'
import fivestars from '../assets/images/five-stars.png'
import safetyImg from '../assets/images/safety2.png'


class HomeIndex extends React.Component {
    render() {

        return (
            <SimpleReactLightbox>
            <Layout>
                <Helmet
                    title="Lux Floors"
                    meta={[
                        { name: 'description', content: 'Description' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                <section id="one">
                    <div className="inner">
                    <header className="major smaller">
                         <h2 className="boxed">A solution for <span>all</span> your <span>flooring</span> needs</h2>
                    </header>
                    <p>Effortlessly transform your home with our diverse selection of luxury flooring, with functionality for everyday life and an extensive range of patterns and colours. Lux Floors products are exclusively sourced for the highest quality & ensuring  unrivalled craftsmanship.</p>
                        <div className="box alt">
                            <SRLWrapper>
                            <div className="grid-wrapper">
                                <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span>
                                <p><span>Wooden</span> effects</p></div>
                                <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span><p><span>Bespoke</span> flooring</p></div>
                                <div className="col-4"><span className="image fit"><img src={carpetpic} alt="" /></span><p><span>Carpets</span></p></div>
                                <div className="col-4"><span className="image fit"><img src={safetyImg} alt="" /></span><p><span>Safety</span> flooring</p></div>
                                <div className="col-4"><span className="image fit"><img src={garagepic2} alt="" /></span><p><span>Garage</span> flooring</p></div>
                                <div className="col-4"><div className="blue-box"><Link to="/gallery"><p>View <span>full</span> gallery</p></Link></div></div>
                            </div>
                            </SRLWrapper>
                        </div>
                    </div>
                </section>
                <section id="three" className="spotlights">
                        <section>
                            <Link to="/lux-floors" className="image">
                                <img src={gallerypic4} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major smaller">
                                        <h3 className="boxed"><strong>Lux</strong> <span>Floors</span></h3>
                                    </header>
                                    <p>We offer endless different variations of high quality flooring options to meet your needs. From herringbone laminate wood flooring to luxurious all-purpose carpets, we specialise in having a a solution for all your flooring needs.</p>
                                    <ul className="actions">
                                        <li><Link to="/lux-floors" className="button">Learn more</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                        <Link to="/lux-garage" className="image">
                            <img src={garagepic} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major smaller">
                                    <h3 className="boxed"><strong>Lux</strong> <span>Garage</span></h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link to="/lux-garage" className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                        </section>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major smaller centered">
                                <h3 className="boxed">What our <span>Clients</span> say about <span>us</span></h3>
                            </header>
                            <div className="grid-wrapper quotes">
                                <div className="col col-4">
                                    <blockquote>
                                        <img src={fivestars} alt="" />
                                        "Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis."
                                    <br />
                                    <span className="name">John Smith</span>
                                    <p>July 2020</p>
                                    </blockquote>
                                </div>
                                <div className="col col-4">
                                    <blockquote>
                                        <img src={fivestars} alt="" />
                                        "Harry provided a really professional service from start to finish. He made sure that we were happy with the flooring every step of the way and we were over the moon with the end result! Really great service and an excellent finish."
                                    <br />
                                    <span className="name">Sacha Mooney</span>
                                    <p>July 2020</p>
                                    </blockquote>
                                </div>
                                <div className="col col-4">
                                    <blockquote>
                                        <img src={fivestars} alt="" />
                                        "Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis."
                                    <br />
                                    <span className="name">John Smith</span>
                                    <p>July 2020</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
            </SimpleReactLightbox>
        )
    }
}

export default HomeIndex