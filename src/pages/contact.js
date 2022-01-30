import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Fade from 'react-reveal/Fade';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 52.5630014254675,
    lng: -0.24414199943945175,
};


class Contact extends React.Component {

  componentDidMount () {

  }
  render () {
    return (
    <SimpleReactLightbox> 
      <Layout>
        <SEO title="Contact" keywords={[`Ritzy Barbers`, `Ritzy`, `Peterborough Barbers`, `Hair Peterborough`, `Hair Stylist Peterborough`, `Hair Colouring Peterborough`, `Mens Hair Peterborough`, `Skin Fade Peterborough` ,`Beard Trim Peterborough` ,`Hair and Beard Peterborough`]} />
        <div className="page page--gallery">
            <div className="content--wrapper">
                <div id="gallery-page" className="gallery-page">
                    <header className="header--page">
                        <h2>Contact</h2>
                    </header>
                    <section id="contact" className="contact">
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
                                        { /* Child components, such as markers, info windows, etc. */ }
                                        <></>
                                    </GoogleMap>
                                    </LoadScript>
                                </div>
                                <div className="contact--address">
                                <strong>Ritzy Barbers</strong><br />
                                13 Queens Walk,<br />
                  Peterborough,<br />
                  PE2 9AN
                                </div>
                            </div>
                        </section>
                </div>
            </div>
        </div>
      </Layout>
      </SimpleReactLightbox>
    )
  }
}

export default Contact