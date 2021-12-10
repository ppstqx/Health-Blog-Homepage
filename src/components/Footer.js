import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
          <div>
  <div className="footer">
    <div className="footer-container">
    <div className="row">
      <div className="col">
        <h4>Policies</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Advertising Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </div>
      <div className="col">
        <h4>About</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>
      <div className="col">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#">Faceook</a></li>
          <li><a href="#">Instragram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  </div>


        )
    }
}
