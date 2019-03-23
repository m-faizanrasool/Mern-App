import React from 'react';
import { Fade } from 'react-slideshow-image';
 
// const fadeImages = [
//   './images/1.jpg',
//   './images/2.jpg',
//   './images/3.jpg'
// ];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}
 
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img alt ="pic" src={require("./images/4.jpg")}/>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
        <img alt ="pic" src={require("./images/5.jpg")}/>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
        <img alt ="pic" src={require("./images/3.jpg")}/>
        </div>
      </div>
    </Fade>
  )
}
export default Slideshow;