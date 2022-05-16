import React from 'react';
import AmandaFlex from '../../../assets/images/Amanda-62.jpeg';
import { CtaButton } from '../../utils';

function AboutSection() {
  return (
    <section className='aboutSection-parent-container'>
        <div className='aboutSection-wrapper'>
            <div className='aboutSection-inforow'>
            {/* TODO: Picture with text heading at bottom: */}
                <div className='aboutSection-column1'>
                    
                    <div className='aboutSection-img-wrapper'>
                        {/* TODO: Maybe add a gradient overlay? */}
                        <img src={AmandaFlex} 
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
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.""
                        </p>

                        
                    </div>

                    {/* TODO: Button component */}
                    <CtaButton 
                            classnames={'aboutSection-column2-btn'}
                            text={'About'}
                        />
                </div>

            </div>

        </div>

    </section>
  )
}

export default AboutSection;