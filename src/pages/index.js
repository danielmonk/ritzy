import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typist from 'react-typist';
import {useTrail, animated} from 'react-spring'
import Fade from 'react-reveal/Fade';
import LGLogo from "../images/lg-logo.png"
import CalpolLogo from "../images/calpol-logo-1.png"
import LVLogo from "../images/lv-logo.png"
import RACLogo from "../images/rac-logo.png"
import KrogerLogo from "../images/kroger-logo.png"
import EightLogo from "../images/888sport-logo.png"
import youtubeBGImg from "../images/youtube.jpg"
import youtubeVideo from "../videos/NY-Collated-minimised.mp4"
import macbookBG from "../images/macbook-render.png"
import ritzylogo from "../images/ritzy-large.png"
import ritzy1 from "../images/ritzy-studios-1.png"
import ritzy2 from "../images/ritzy-studios-2.png"
import ritzy3 from "../images/ritzy-collate-1.png"
import insta from "../images/instagram.png"
import facebook from "../images/facebook.png"
import iby from "../images/iby-bw.png"
let instaPhoto1 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/117795878_1250199461991549_3576501364359053768_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=_G5PxI7NTm4AX9rZB43&oh=513fe279817825e6e0d30e7eca901d25&oe=5F894506"
let instaPhoto2 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/109811559_586866545310110_141645576686131022_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=dim_S0WSpTUAX_qKXXQ&_nc_tp=18&oh=adc191591306279b50bf00f7f5045a23&oe=5F8846C0"
let instaPhoto3 = "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/107869648_609295649723384_3063073575809310173_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=BGMhbOFEIKEAX_ou-YD&oh=a394c6b661c261a15b7b3b5e6925bb9e&oe=5F896D5E"
let instaPhoto4 = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/94837887_243375443533012_3976964820012419774_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=nLeLJqDgAHQAX9DeMzK&oh=d569a5c2d33a8a7aae930b5435ee7196&oe=5F878262"



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
    var header = document.querySelector(".page");

    function add_class_on_scroll() {
        header.classList.add("video-inactive");
    }

    function remove_class_on_scroll() {
        header.classList.remove("video-inactive");
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
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
                    <li className="instagram"><a href="https://instagram.com/ritzybarber" target="_blank"></a><img src={insta}></img></li>
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
                    <h6>A brand new barber experience, in the heart of Peterborough.</h6>
                    <p>We've been working in the barbering industry for over <strong>5 years</strong> & have developed the highest standard of barbering services. All of our staff are trained to the highest levels possible offering that perfect cut every time. </p>
                    </Fade>
                  </div>
              </div>
            </div>
          </section>

          <section id="image-block" className="image-block">
            <div className="content--wrapper content--wrapper--big">
            <Fade> 
              <div className="image">
                <img src={ritzy3} />
              </div>
            </Fade>
            <Fade> 
              <div className="text">
                <p>"Our cutting philosophy stems from the consultation. There is no such thing as <strong>can’t do</strong>, <strong>won’t do</strong> or <strong>don’t do</strong> within our cutting philosophy. They say the customer is always right...and we say the stylist is right behind them and on hand to deliver their expert advice both <strong>professionally</strong> and <strong>technically</strong>"</p>
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
                  <a className="button button--white" href="https://www.fresha.com/providers/ritzy-studios-kk1eohva?pId=392894">Book Now</a>
                </div>
                </Fade>
                </div>
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="content--wrapper">
              <div className="four-col">
                <div className="column">
                  <Fade left> 
                  <div>
                  <h3 className="left">Consult.</h3>
                  <p>Working together with our clients to make sure to deliver the haircut that's perfect for them.</p>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3 className="left">Create.</h3>
                  <p>Delivering those high quality cuts, every time.</p>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3 className="left">Text.</h3>
                  <p>More text, more text, more text, more text, more text, more text, more text, more text.</p>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3 className="left">Text.</h3>
                  <p>More text, more text, more text, more text, more text, more text, more text, more text.</p>
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
                      <a className="insta" href="https://www.instagram.com/ritzybarber" target="_blank"></a>
                    </div>
                    <p className="name">Iby</p>
                    <p className="title">Owner</p>
                  </div>
                  <div className="column">
                    <div className="photo">
                      <img src={iby}></img>
                      <a className="insta" href="https://www.instagram.com/ritzybarber" target="_blank"></a>
                    </div>
                    <p className="name">Iby</p>
                    <p className="title">Owner</p>
                  </div>
                  <div className="column">
                    <div className="photo">
                      <img src={iby}></img>
                      <a className="insta" href="https://www.instagram.com/ritzybarber" target="_blank"></a>
                    </div>
                    <p className="name">Iby</p>
                    <p className="title">Owner</p>
                  </div>
                </div>
              </Fade>
            </div>   
          </section>

          <section id="insta">
            <div className="content--wrapper content--wrapper--big">
              <div className="column centered">
                <Fade>
                  <h4>Follow us on Instagram</h4>
                  <p>Keep up to date with all of our latest news.</p>
                </Fade>
              </div>
            </div>
            <div className="insta-grid">
            <Fade>
              <div className="insta-photo" style={styles.insta1}>
                
              </div>
              <div className="insta-photo" style={styles.insta1}>
                
              </div>
              <div className="insta-photo" style={styles.insta1}>
                
              </div>
              <div className="insta-photo" style={styles.insta1}>
                
              </div>
            </Fade>
            </div>
          </section>

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
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                <div className="opening--time">
                  <div className="opening--day">Tue</div>
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                <div className="opening--time">
                  <div className="opening--day">Wed</div>
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                <div className="opening--time">
                  <div className="opening--day">Thu</div>
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                <div className="opening--time">
                  <div className="opening--day">Fri</div>
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                <div className="opening--time">
                  <div className="opening--day">Sat</div>
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                <div className="opening--time">
                  <div className="opening--day">Sun</div>
                  <div className="opening--start">9:00am</div>
                  <span>-</span>
                  <div className="opening--end">5:30pm</div>
                </div>
                </Fade>
              </div>
            </div>
          </section>

    
          <section id="contact" className="contact">
            <div className="content--wrapper">
                <div className="contact__text">
                  <Fade>
                    <p>Got a question for us?</p>
                    <h3><a href="mailto:danieljmonk@gmail.com">Enquire Now</a></h3>
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
          </section>
    
        </div>
      </Layout>
    )
  }
}

export default Header