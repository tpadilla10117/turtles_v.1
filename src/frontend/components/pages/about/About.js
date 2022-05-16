import React from 'react';
import {
  Footer,
  HeroCarousel,
  InfoSection
} from '../../utils.js';

import { heroCarouselData } from '../../../seed';
import AmandaSmiling from '../../../assets/images/Amanda-04.jpeg';

function About() {
  return (
    <div className='aboutpg-parent-container'>
        {/* Greetings from About */}
        <HeroCarousel imgData={heroCarouselData} />
        <InfoSection 
          ptext={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '}
          ptext2={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
          ptext3={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          headingtxt={'Welcome to...'}
          infoSectionClassName={'infoSection-parent-container'}
          infoSectionImg={AmandaSmiling}
          alt={'Somne sample text'}
        
        />
        <Footer />
    </div>
  )
}

export default About