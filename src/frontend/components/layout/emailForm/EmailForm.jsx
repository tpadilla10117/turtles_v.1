import React from 'react';
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
            <input type='text' placeholder='Name' name='user_name' required />
            <input type='text' placeholder='Subject' name='user_subject' required />
            <input type='text' placeholder='Email' name='user_email' required />
            <textarea rows='5' placeholder='Message' name='message'/>

          </div>

        </form>

      </div>

    </div>
  )
}

export default EmailForm;