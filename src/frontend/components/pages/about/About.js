import React from 'react';
import {
  Footer,
  HeroCarousel
} from '../../utils.js';

import { heroCarouselData } from '../../../seed';

function About() {
  return (
    <div>
        Greetings from About
        <HeroCarousel imgData={heroCarouselData} />
        <Footer />
    </div>
  )
}

export default About