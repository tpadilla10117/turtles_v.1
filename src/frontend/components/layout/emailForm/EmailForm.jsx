import React from 'react';
import {
  CtaButton
} from '../../utils';

/* TODO: Finish styling */
function EmailForm( {bannerImg, alt} ) {
  return (
    <div className='emailForm-parent-container'>
      <img src={bannerImg} alt={alt} className='emailForm-img' />

      <div className='emailForm-header-parent-container'>
        <h1 className='emailForm-header'>Contact Me</h1>
      </div>

      <div className='emailForm-wrapper'>
        <form className='emailForm-form'>
          <div className='emailForm-form-input-wrapper'>
            <input id='name-input' className='form-input' type='text' placeholder='Name' name='user_name' required />
            <label htmlFor='name-input'></label>
            <input id='subject-input' className='form-input' type='text' placeholder='Subject' name='user_subject' required />
            <label htmlFor='subject-input'></label>
            <input id='email-input' className='form-input' type='text' placeholder='Email' name='user_email' required />
            <label htmlFor='email-input'></label>
            <textarea id='message-input' className='form-input' rows='5' placeholder='Message' name='message'/>
            <label htmlFor='message-input'></label>
          </div>

          <CtaButton 
            classnames={'emailForm-form-submitBtn'}
            text={'Submit'}
          />

        </form>

      </div>

    </div>
  )
}

export default EmailForm;