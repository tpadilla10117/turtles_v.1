import React, {useState} from 'react';
import {
  Footer,
  EmailSection,
  EmailForm,
  TestimonialSection,
  TestimonialCarousel,
  ContactBlock
} from '../../utils.js';
import Amanda from '../../../assets/images/Amanda-73.jpeg';
import { testimonialCarouselData } from '../../../seed';

function Contact() {
  const [ emailFormAltTxt ] = useState('A banner');

  return (
    <section>


        {/* TODO: ContactBlock: */}
        <ContactBlock />

        <TestimonialSection 
          content={
            <TestimonialCarousel carouselData={testimonialCarouselData} />
          }
        />
        
        <EmailSection 
          content={<EmailForm 
            bannerImg={Amanda}
            alt={emailFormAltTxt}
          />}
        />


        <Footer />
    </section>
  )
}

export default Contact;