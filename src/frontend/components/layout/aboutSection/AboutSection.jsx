import React from 'react'
import Placeholder1 from '../../../assets/images/placeholder1.jpg';

function AboutSection() {
  return (
    <section className='aboutSection-parent-container'>
        <div className='aboutSection-wrapper'>
            <div className='aboutSection-inforow'>
            {/* TODO: Picture with text heading at bottom: */}
                <div className='aboutSection-column1'>
                    
                    <div className='aboutSection-img-wrapper'>
                        <img src={Placeholder1} 
                        alt='Amanda performing'
                        className='aboutSection-img' 
                        />
                    </div>
                    <h2>"Lorem impsum dolor sit amet"</h2>
                </div>

            {/* TODO: Text with button at bottom */}
                <div className='aboutSection-column2'>
                    <div className='aboutSection-column2-text-wrapper'>
                        <p className='aboutSection-column2-text'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        {/* TODO: Button component */}
                        
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default AboutSection;