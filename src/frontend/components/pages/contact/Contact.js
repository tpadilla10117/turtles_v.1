import React, {useState} from 'react';
import {
  Footer,
  EmailSection,
  EmailForm
} from '../../utils.js';
import Amanda from '../../../assets/images/Amanda-73.jpeg';

function Contact() {
  const [ emailFormAltTxt ] = useState('A banner');

  return (
    <div>
        
        <EmailSection 
          content={<EmailForm 
            bannerImg={Amanda}
            alt={emailFormAltTxt}
          />}
        />

        {/* TODO: Testimonials Section */}

        <Footer />
    </div>
  )
}

export default Contact;