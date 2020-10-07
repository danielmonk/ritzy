import React, { useState }  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class Header extends React.Component {

  componentDidMount () {

  }
  render () {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="page page--about">
            <div className="content--wrapper">
                <div id="about-page" className="about-page">
                    <Fade>
                    <header className="header--page">
                        <h2>About Ritzy Studios</h2>
                    </header>
                    </Fade>
                </div>
            </div>
        </div>
      </Layout>
    )
  }
}

export default Header