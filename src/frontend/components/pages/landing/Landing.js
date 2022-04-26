/* TODO: This page is for when a user first travels to the site: */
import React from 'react';
import { 
    AboutSection,
    LandingImgSection,
    Footer
} from '../../utils.js';

const Landing = () => {
  return (
    <section className='landing-parent-container'>
      
      <AboutSection />
      <LandingImgSection />
      <Footer />

    </section>
  );
};

export default Landing;