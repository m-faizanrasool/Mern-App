import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component {
  render() {
    return (
      
      <div className="header">
      <img id="logo" width={120} height={130} alt="logo" src={require("./images/logo.png")}/>
      <h1>Faraz <span>Furnitures</span></h1>
      {/* <h6>A Sign of Design & Quality</h6> */}
          <ul style={{align: 'center'}}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/Gallery">Gallery</Link> </li>
            <li><Link to="/Contact">Contact Us</Link> </li>
          </ul>
      </div>
    );
  }
}

export default Header;
