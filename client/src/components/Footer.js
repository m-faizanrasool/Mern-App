import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/Gallery">Gallery</Link> </li>
          <li><Link to="/Contact">Contact Us</Link> </li>
        </ul>      
        <p style={{ textAlign: 'center' }}>copyright &copy; . All rights reserved.</p>


      </div>
    );
  }
}

export default Footer;
