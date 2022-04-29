import React from 'react';
import {
  Footer,
  LandingImgSection
} from '../../utils.js';
import TurtlesStudio from '../../../assets/images/turtlesStudio.JPG';

function Gallery() {
  return (
    <div>
Greetings from Gallery

{/* TODO: Add that img overlay effect from your template */}
    <LandingImgSection img={TurtlesStudio} />
    <Footer />
    </div>
  )
}

export default Gallery;