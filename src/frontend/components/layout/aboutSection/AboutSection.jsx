import React from 'react';
import AmandaFlex from '../../../assets/images/Amanda-62.jpeg';
import { CtaButton } from '../../utils';

function AboutSection() {
  return (
    <section className='aboutSection-parent-container'>
        <div className='aboutSection-wrapper'>
            <article className='aboutSection-inforow'>
            
                <div className='aboutSection-column1'>
                    
                    <figure className='aboutSection-img-wrapper'>
                        <img src={AmandaFlex} 
                        alt='Amanda performing'
                        className='aboutSection-img' 
                        />
                    </figure>
                    <h2>"Lorem impsum dolor sit amet"</h2>
                </div>

            {/* Text with button at bottom */}
                <div className='aboutSection-column2'>
                    <div className='aboutSection-column2-text-wrapper'>
                        <h2 className='aboutSection-column2-text-h2'>Come say Hello</h2>
                        <p className='aboutSection-column2-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        
                        </p>
                    </div>

                    <CtaButton 
                            classnames={'aboutSection-column2-btn'}
                            text={'About'}
                    />

                </div>

            </article>

        </div>

    </section>
  )
}

export default AboutSection;