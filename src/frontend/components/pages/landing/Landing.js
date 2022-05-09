/* TODO: This page is for when a user first travels to the site: */
import React, { useState } from 'react';
import { 
    AboutSection,
    LandingImgSection,
    InfoSection,
    EmailSection,
    EmailForm,
    Footer,
    PhotoGallery,
    TestimonialSection,
    TestimonialCarousel,
    CtaButton
} from '../../utils.js';
/* import Placeholder2 from '.././../../assets/images/placeholder2.jpg'; */
/* import Placeholder1 from '../../../assets/images/placeholder1.jpg'; */
import TurtlesStudio from '../../../assets/images/turtlesStudio.JPG';
import TurtlesStudio2 from '../../../assets/images/turtlesStudio2.JPG';
import EmailPlaceholder from '../../../assets/images/emailplaceholder.jpg';
import Amanda from '../../../assets/images/Amanda-73.jpeg';
import { photoGallery, testimonialCarouselData } from '../../../seed';



const Landing = () => {
    const [ text ] = useState('"Lorem ipsum dolor sit amet"');
    const [ emailFormAltTxt ] = useState('A banner')
    const Photos = [
      Amanda, TurtlesStudio
    ]
    const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='landing-parent-container'>
      {/* TODO: Carousel */}

      <InfoSection 
        ptext={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '}
        ptext2={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
        ptext3={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        headingtxt={'Welcome to...'}
        infoSectionClassName={'infoSection-parent-container'}
      /* TODO: need to update */
        infoSectionImg={Amanda}
        alt={'Somne sample text'}

        content={
          <CtaButton 
            classnames={'infoSection-contact-btn'}
            text={'Contact'}
          />
        }
      />

      <AboutSection />
      
      <LandingImgSection text={text} img={TurtlesStudio2} />

      {/* TODO: Gallery Section */}
      <PhotoGallery photos={photoGallery} />

      <LandingImgSection text={text} img={TurtlesStudio} />

      {/* TODO: Testimonials */}
      <TestimonialSection 
        content={
          <TestimonialCarousel carouselData={testimonialCarouselData} />
        }
      />

      {/* TODO: Contact Section */}
      <EmailSection 
        content={<EmailForm 
            bannerImg={Amanda} 
            alt={emailFormAltTxt} />}
    
        />

      <Footer />

    </section>
  );
};

export default Landing;