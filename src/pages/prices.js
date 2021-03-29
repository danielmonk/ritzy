import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ritzyStudio from "../images/ritzystudio.jpg"
import ritzyStudio2 from "../images/ritzystudio2.jpg"
import ritzyStudio3 from "../images/ritzy-placeholder.png"

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 52.570220,
    lng: -0.245305,
  };
  

class Header extends React.Component {

  componentDidMount () {

  }
  render () {
    return (
      <Layout>
        <SEO title="Prices" keywords={[`Ritzy Studios`, `Ritzy`, `Peterborough Barbers`, `Hair Peterborough`, `Hair Stylist Peterborough`, `Hair Colouring Peterborough`, `Mens Hair Peterborough`, `Skin Fade Peterborough` ,`Beard Trim Peterborough` ,`Hair and Beard Peterborough`]} />
        <div className="page page--about">
            <div id="about-page" className="about-page">
                <div className="content--wrapper">
                    <div>
                    <Fade>
                    <header className="header--page">
                        <h2>Prices</h2>
                        <p>Please see below for our list of services, their time length & prices. Any questions please just get in touch.</p>
                    </header>
                    </Fade>
                    <Fade>
                        <section className="prices">
                            <div className="price">
                                <h5>Gents Cut</h5>
                                <p>£15.</p>
                            </div>
                            <div className="price">
                                <h5>Gents Cut & Beard</h5>
                                <p>£20.</p>
                            </div>
                            <div className="price">
                                <h5>Skin Fade</h5>
                                <p>£20.</p>
                            </div>
                            <div className="price">
                                <h5>Skin Fade & Beard</h5>
                                <p>£25. </p>
                            </div>
                            <div className="price">
                                <h5>Under 16's (Ages 11 - 15)</h5>
                                <p>£15</p>
                            </div>
                        </section>
                    </Fade>
                    </div>
                </div>

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
                            <div className="opening--start">11:00am</div>
                            <span>-</span>
                            <div className="opening--end">7:00pm</div>
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
                            <div className="opening--start">09:00am</div>
                            <span>-</span>
                            <div className="opening--end">8:00pm</div>
                            </div>
                            <div className="opening--time">
                            <div className="opening--day">Fri</div>
                            <div className="opening--start">09:00am</div>
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
        </div>
      </Layout>
    )
  }
}

export default Header