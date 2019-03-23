import React, { Component } from 'react';
import "./Gallery.css"
class Gallery extends Component {

  
  
  render() {

  
    
    return (
      <div className="gallery">
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/1.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/2.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/3.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/4.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/5.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/6.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/7.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/8.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/9.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/10.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/11.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/12.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/13.jpg")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/14.png")}/>
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/1.png")}/>
      </div>
    )

  }

}

export default Gallery