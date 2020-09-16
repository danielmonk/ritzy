import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="Contact Form" action="https://getform.io/f/eb81b04a-e2be-45d7-b55b-72ed5fd6b4d7" method="POST">
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
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">info@luxfloors.co.uk</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+44 7506125602</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Address line 1<br />
                        Address line 2<br />
                        Address Line 3</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
