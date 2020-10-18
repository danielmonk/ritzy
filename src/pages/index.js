import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typist from 'react-typist';
import {useTrail, animated} from 'react-spring'
import Fade from 'react-reveal/Fade';
import youtubeBGImg from "../images/ritzy-placeholder.png"
import youtubeVideo from "../videos/RITZY-new.mp4"
import macbookBG from "../images/macbook-render.png"
import ritzylogo from "../images/ritzy-logo.png"
import ritzy1 from "../images/ritzy-studios-1.png"
import ritzy2 from "../images/ritzy-studios-2.png"
import ritzy3 from "../images/ritzy-collate-1.png"
import ritzy4 from "../images/ritzy-4.jpg"
import insta from "../images/instagram.png"
import facebook from "../images/facebook.png"
import iby from "../images/ritzy-new.png"
import asap_blends from "../images/asapblends.jpg"
import darkfader from "../images/darkfader.jpg"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import InstaSlider from '../components/InstaSlider';
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




const styles = {
  youtubeBG: {
      backgroundImage: `url(${youtubeBGImg})`
  },
  insta1: {
    backgroundImage: `url(${instaPhoto1})`
  }
};


const items = ['Ritzy', 'Hair Studio']  
const config = { mass: 5, tension: 200, friction: 200 }

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 52.570220,
  lng: -0.245305,
};

function SpringDemo() {
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    })
  return <div className="trails-main">
  <div>
    {trail.map(({ x, height, ...rest }, index) => (
      <animated.div
        key={items[index]}
        className="trails-text"
        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
        <animated.h2 style={{ height }}>{items[index]}</animated.h2>
      </animated.div>
    ))}
  </div>
</div>
}

class Header extends React.Component {

  componentDidMount () {

    var scrollpos = window.scrollY;
    var header = document.querySelector(".header");
    var page = document.querySelector(".page");

    header.classList.add("home");

    function add_class_on_scroll() {
      page.classList.add("video-inactive");
    }

    function remove_class_on_scroll() {
      page.classList.remove("video-inactive");
    }

    window.addEventListener('scroll', function(){ 
        //Here you forgot to update the value
        scrollpos = window.scrollY;

        if(scrollpos > 500){
            add_class_on_scroll();
        }
        else {
            remove_class_on_scroll();
        }
    });

  }
  render () {
    return (
      <Layout>
        <SEO title="Home" keywords={[`Ritzy Studios`, `Ritzy`, `Peterborough Barbers`, `Hair Peterborough`, `Hair Stylist Peterborough`, `Hair Colouring Peterborough`, `Mens Hair Peterborough`, `Skin Fade Peterborough` ,`Beard Trim Peterborough` ,`Hair and Beard Peterborough`]} />
        <div className="page page--home">
          <section id="top" className="top">
            <div className="homepage-hero-module">
              <div className="top--wrapper">
                <div className="content--wrapper">
                  <Fade> 
                  <div id="typewriter" className="aligner">
                      <img src={ritzylogo}></img>
                  </div>
                  </Fade>
                </div>
                <div className="socials">
                  <ul>
                    <li className="instagram"><a href="https://instagram.com/ritzystudios" target="_blank"></a><img src={insta}></img></li>
                    <li className="facebook"><a href="https://www.facebook.com" target="_blank"></a><img src={facebook}></img></li>
                  </ul>
                </div>
              </div>
              <div className="video-background">
                <div className="video-foreground">
                  <div className="fallback-img" style={styles.youtubeBG}></div>
                  <video autoPlay muted loop playsInline>
                    <source src={youtubeVideo} type="video/mp4" />
                  </video>
                </div>
                <div className="purple-overlay"></div>
              </div>
            </div>
          </section>
    
          <section id="about" className="about">
            <div className="content--wrapper">
              <div>
                  <div className="column centered">
                    <Fade> 
                    <h4>Welcome to <strong>Ritzy</strong> Hair Studios</h4>
                    <h6>A brand new experience, in the heart of Peterborough.</h6>
                    <p>We've been working in the hair industry for over <strong>5 years</strong> & have developed the highest level of services. </p>
                    </Fade>
                  </div>
              </div>
            </div>
          </section>

          <section id="image-block" className="image-block">
            <div className="content--wrapper content--wrapper--big">
            <Fade> 
              <div className="image">
                <img src={ritzy4} />
              </div>
            </Fade>
            <Fade> 
              <div className="text">
                <p>"Our cutting philosophy stems from the consultation. There is no such thing as <strong>can’t do</strong>, <strong>won’t do</strong> or <strong>don’t do</strong> The stylist is right behind them on hand to deliver their expert advice both <strong>professionally</strong> and <strong>technically</strong>"</p>
              </div>
              </Fade>
            </div>
          </section>


         
          <section id="booking-cta" className="booking-cta">
            <div className="content--wrapper">
              <div className="booking-cta__content">
                <div className="booking-cta__content--left">
                  <Fade>
                  <div>
                  <h3>Our booking system is now live</h3>
                  <p>Please book all appointments through our new online booking system, making it easier than ever to keep track of your bookings.</p>
                  </div>
                </Fade>
                </div>
                <div className="booking-cta__content--right">
                <Fade>
                <div>
                  <a className="button button--white" href="https://ritzyhairstudio.nearcut.com/book/">Book Now</a>
                </div>
                </Fade>
                </div>
              </div>
            </div>
          </section>

          { /*
        <section id="booking-cta" className="booking-cta">
            <div className="content--wrapper">
              <div className="booking-cta__content">
                <div className="booking-cta__content--left">
                  <Fade>
                  <div>
                  <h3>Our booking system is coming soon</h3>
                  <p>Please book all appointments as usual for the time being.</p>
                  </div>
                </Fade>
                </div>
                <div className="booking-cta__content--right">
                </div>
              </div>
            </div>
          </section>
        */ }

          <section id="skills">
            <div className="content--wrapper">
              <div className="four-col">
                <div className="column">
                  <Fade left> 
                  <div>
                  <h3 className="left">Consult.</h3>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3 className="left">Create.</h3>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3 className="left">Inspire.</h3>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3 className="left">Deliver.</h3>
                  </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>

          <section id="barbers" className="barbers">
            <div className="content--wrapper">
                <div className="column centered">
                  <Fade>
                  <h4>Our <strong>team</strong></h4>
                  <h6>All our barbers are of the highest merit and offer continuous high quality haircuts <strong>time after time.</strong></h6>
                  </Fade>
                </div>
              </div>
              <div className="content--wrapper">
              <Fade>
                <div className="columns">
                  <div className="column">
                    <div className="photo">
                      <img src={iby}></img>
                      <a className="insta white" href="https://www.instagram.com/ritzybarber" target="_blank"></a>
                    </div>
                    <p className="name">Ritzy</p>
                    <p className="title">Owner</p>
                  </div>
                  <div className="column">
                    <div className="photo">
                      <img src={asap_blends}></img>
                      <a className="insta white" href="https://www.instagram.com/asap_blends" target="_blank"></a>
                    </div>
                    <p className="name">asap_blends</p>
                    <p className="title">Stylist</p>
                  </div>
                  <div className="column">
                    <div className="photo">
                      <img src={darkfader}></img>
                      <a className="insta" href="https://www.instagram.com/darkfaderr__" target="_blank"></a>
                    </div>
                    <p className="name">darkfader</p>
                    <p className="title">Stylist</p>
                  </div>
                </div>
              </Fade>
            </div>   
          </section>


          <InstaSlider
              insta1={instaPhoto1}
              insta1Link = {insta1Link}
              insta2={instaPhoto2}
              insta2Link = {insta2Link}
              insta3={instaPhoto3}
              insta3Link = {insta3Link}
              insta4={instaPhoto4}
              insta4Link = {insta4Link}
              insta5={instaPhoto5}
              insta5Link = {insta5Link}
              insta6={instaPhoto6}
              insta6Link = {insta6Link}
              insta7={instaPhoto7}
              insta7Link = {insta7Link}
              insta8={instaPhoto8}
              insta8Link = {insta8Link}
              insta9={instaPhoto9}
              insta9Link = {insta9Link}
              insta10={instaPhoto10}
              insta10Link = {insta10Link}
            />

          <section id="opening" className="opening">
            <div className="content--wrapper">
              <div className="column centered">
              <Fade>
                  <h4>Opening <strong>Times</strong></h4>
                </Fade>
              </div>
              <div className="opening--times">
                <Fade>
                <div className="opening--time">
                <div className="opening--day">Mon</div>
                { /*
                <div className="opening--start">11:00am</div>
                <span>-</span>
                <div className="opening--end">7:00pm</div>
                */ }
                <span className="closed starting">Starting from 2nd November</span>
                </div>
                <div className="opening--time">
                <div className="opening--day">Tue</div>
                <div className="opening--start">11:00am</div>
                <span>-</span>
                <div className="opening--end">7:00pm</div>
                </div>
                <div className="opening--time">
                <div className="opening--day">Wed</div>
                <div className="opening--start">11:00am</div>
                <span>-</span>
                <div className="opening--end">7:00pm</div>
                </div>
                <div className="opening--time">
                <div className="opening--day">Thu</div>
                <div className="opening--start">10:00am</div>
                <span>-</span>
                <div className="opening--end">8:00pm</div>
                </div>
                <div className="opening--time">
                <div className="opening--day">Fri</div>
                <div className="opening--start">10:00am</div>
                <span>-</span>
                <div className="opening--end">8:00pm</div>
                </div>
                <div className="opening--time">
                <div className="opening--day">Sat</div>
                <div className="opening--start">9:00am</div>
                <span>-</span>
                <div className="opening--end">16:00pm</div>
                </div>
                <div className="opening--time">
                <div className="opening--day">Sun</div>
                <span className="closed">Closed</span>
                </div>
                </Fade>
            </div>
              <div className="opening--message">
                <p>Out of hours cuts can be booked for after hours fee</p>
              </div>
            </div>
          </section>

    
          <section id="contact home" className="contact">
          <div className="content--wrapper">
            <div className="column centered">
                <div className="contact__text">
                  <h5>Contact <strong>Us</strong></h5>
                </div>
            </div>
          </div>
            <div className="content--wrapper no-align">
              <div className="contact--left">
                <div className="contact__text">
                  <Fade>
                    <p>Got a question for us?</p>
                    <form action="https://getform.io/f/81fd928c-0842-4173-923d-585cd6383e38" method="POST">

                    <div className="field first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="field half first">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required />
                    </div>
                    <div className="field half">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><button type="submit" value="Send Message" className="special">Send</button></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>

                    </form>
                  </Fade>
                </div>
              </div>
              <div className="contact--right">
                <div className="contact__text">
                  <p>Our Locations</p>
                </div>
                <div className="contact--map">
                  <LoadScript
                    googleMapsApiKey="AIzaSyBlbKAE_VcREMiyIGSSu0nwKZi0PvJAFUI"
                    >
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={18}
                      >
                        <Marker position={{ lat: 52.570220, lng: -0.245305 }} />
                        <></>
                      </GoogleMap>
                    </LoadScript>
                  </div>
                  <div className="contact--address">
                  <strong>Ritzy Studios</strong><br />
                  62 Albert Pl,<br />
                  Peterborough,<br />
                  PE1 1DD
                </div>
              </div>
            </div>
          </section>
    
        </div>
      </Layout>
    )
  }
}

export default Header