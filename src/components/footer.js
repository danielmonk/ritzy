import PropTypes from "prop-types"
import React from "react"
import LoadingIcon from "../images/loading.svg"

const Footer = ({ siteTitle }) => (
  <div>
    <footer className="footer">
        <div className="footer--menu">
          <ul>
            <li>© Ritzy Studios 2020. All rights reserved</li>
            <li>Made by <a target="_blank" href="https://danielmonk.io">danielmonk.io</a></li>
          </ul>
          <ul className="terms">
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/cookies">Cookies</a></li>
          </ul>
        </div>
    </footer>
    <div className="cursor"></div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
