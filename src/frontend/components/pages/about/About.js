import React from 'react';
import {
  Footer,
  HeroCarousel,
  InfoSection,
  GridInfoSection
} from '../../utils.js';

import { heroCarouselData } from '../../../seed';
import AmandaSmiling from '../../../assets/images/Amanda-04.jpeg';
import Amanda2 from '../../../assets/images/Amanda-46.jpeg';
import Amanda3 from '../../../assets/images/Amanda-62.jpeg';

function About() {
  return (
    <div className='aboutpg-parent-container'>
        
        <HeroCarousel imgData={heroCarouselData} />
        <InfoSection 
          ptext={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          ptext2={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} 
          ptext3={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          headingtxt={'Welcome to...'}
          infoSectionClassName={'aboutpg-infoSection-parent-container'}
          infoSectionImg={AmandaSmiling}
          alt={'Somne sample text'}
          infoSectionTxtWrapperClassName={'aboutpg-infoSection-txt-parent-container'}
        
        />
        <GridInfoSection
          gridInfoSectionClassName={'aboutpg-gridInfoSection-parent-container'}
          gridInfoSectionTxtParent={'aboutpg-gridInfoSection-txt-parent-container'}
          gridInfoSectionHeadingContainer={'aboutpg-gridInfoSection-h2-parent-container'}
          gridInfoSectionTxtWrapper1ClassName={'aboutpg-gridInfoSection-txt-wrapper1'}
          gridInfoSectionTxtWrapper2ClassName={'aboutpg-gridInfoSection-txt-wrapper2'}
          ptext={'Turtles has a lot to offer to her students whether they are novice or seasoned. Turtles has a lot to offer to her students whether they are novice or seasoned.'}
          ptext2={'With over 5 years in industry, Turtles has gained a wealth of experience in many areas over a long time. Turtles has a lot to offer to her students whether they are novice or seasoned.'}
          h1text={'Born To Perform'}
          h1text2={'Simply Outstanding'}
          gridInfoSectionImg={Amanda2}
          gridInfoSectionImg2={Amanda3}
        />
        <Footer />
    </div>
  )
}

export default About