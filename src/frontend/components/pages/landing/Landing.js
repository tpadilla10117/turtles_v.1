/* TODO: This page is for when a user first travels to the site: */
import React, { useState } from 'react';
import { 
    AboutSection,
    LandingImgSection,
    InfoSection,
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

      <InfoSection 
        ptext={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} 
        headingtxt={'Welcome to...'}
        infoSectionClassName={'infoSection-parent-container'}
      />

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