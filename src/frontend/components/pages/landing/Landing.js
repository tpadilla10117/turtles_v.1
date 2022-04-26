/* TODO: This page is for when a user first travels to the site: */
import React, { useState } from 'react';
import { 
    AboutSection,
    LandingImgSection,
    Footer
} from '../../utils.js';
import Placeholder2 from '.././../../assets/images/placeholder2.jpg';
import Placeholder1 from '../../../assets/images/placeholder1.jpg';


const Landing = () => {
    const [ text ] = useState('"Lorem ipsum dolor sit amet"');

  return (
    <section className='landing-parent-container'>
      {/* TODO: Carousel */}

      {/* TODO:  infoSection*/}

      <AboutSection />
      <LandingImgSection text={text} img={Placeholder2} />

      {/* TODO: Gallery Section */}

      <LandingImgSection text={text} img={Placeholder1} />

      {/* TODO: Testimonials */}

      {/* TODO: Contact Section */}

      <Footer />

    </section>
  );
};

export default Landing;