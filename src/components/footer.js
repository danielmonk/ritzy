import PropTypes from "prop-types"
import React from "react"
import LoadingIcon from "../images/loading.svg"
import Popup from 'reactjs-popup';
import Cookies from 'universal-cookie';


export default class Footer extends React.Component {
    componentDidMount(){
      let modalToggle = document.querySelector(".modal-toggle");
      let body = document.querySelector("body");
      let modalClose = document.querySelectorAll(".modal-close");
      let modal = document.querySelectorAll(".modal");
      let modalWrapper = document.querySelectorAll(".modal-wrapper");
      const cookies = new Cookies();

      body.classList.add("modal-open");

      if(cookies.get('hideModal') === 'true'){
        body.classList.remove("modal-open");
        modalWrapper[0].remove();
       } else {
        for (let i = 0; i < modalClose.length; i++) {
          modalClose[i].addEventListener("click", function() {
            body.classList.remove("modal-open");
            modalWrapper[0].remove();
            cookies.set('hideModal', 'true', { path: '/' });
          });
        }
       }
    }
  render() {
    return (
  <div>
    <footer className="footer">
        <div className="footer--menu">
          <ul>
            <li>© Ritzy Barbers 2022. All rights reserved</li>
            <li>Made by <a target="_blank" href="https://danielmonk.io">danielmonk.io</a></li>
          </ul>
          <ul className="terms">
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
    </footer>
    <div className="cursor"></div>
    <div className="modal-wrapper">
      <div className="modal">
        <button className="modal-close">
          &times;
        </button>
        <div className="content">
          {' '}
          <h3>COVID19</h3>
          <p>Extra measures have been taken to ensure the safety of staff and clients, all tools will be sterilised and sections will be cleaned in-between clients.</p>
          <ul>
            <li>Clients <strong>MUST</strong> bring a PPE mask to their appointment.</li>
            <li>Please come alone to your appointment, the waiting area will be out of use due to social distancing.</li>
            <li>Please wash your hair thoroughly before you come to your appointment if possible.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}