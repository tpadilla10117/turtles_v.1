/* TODO: This page is for when a user first travels to the site: */
import React, { useState } from 'react';
import { 
    AboutSection,
    LandingImgSection,
    EmailSection,
    EmailForm,
    Footer
} from '../../utils.js';
import Placeholder2 from '.././../../assets/images/placeholder2.jpg';
import Placeholder1 from '../../../assets/images/placeholder1.jpg';
import EmailPlaceholder from '../../../assets/images/emailplaceholder.jpg';


const Landing = () => {
    const [ text ] = useState('"Lorem ipsum dolor sit amet"');
    const [ emailFormAltTxt ] = useState('A banner')

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
      <EmailSection 
        content={<EmailForm 
            bannerImg={EmailPlaceholder} 
            alt={emailFormAltTxt} />}
    
        />

      <Footer />

    </section>
  );
};

export default Landing;