import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Success</title>
            <meta name="description" content="Contact" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Enquiry succesfully submitted</h1>
                    </header>
                    <p>Thank you for your enquiry, we will get back to you as soon as possible.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic