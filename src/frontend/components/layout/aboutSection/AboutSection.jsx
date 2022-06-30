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
                    <h2>Dynamic and Versatile Peformer</h2>
                </div>

            {/* Text with button at bottom */}
                <div className='aboutSection-column2'>
                    <div className='aboutSection-column2-text-wrapper'>
                        <h2 className='aboutSection-column2-text-h2'>Come say Hello</h2>
                        <p className='aboutSection-column2-text'>
                        With over 10 years in the industry, Amanda 'Turtles' has gained a plethora of experience in a variety of settings.  From private events to corporate productions, she is sure to amaze you!  Turtles brings her passion to every performance and every lesson.  Catch her in the studio.
                        
                        </p>
                    </div>

                    <CtaButton 
                        classnames={'aboutSection-column2-btn'}
                        text={'About'}
                    />

                    {/* <a 
                        href='#'
                        className='aboutSection-link'
                    > 
                        Learn More About Turtles
                    </a> */}

                </div>

            </article>

        </div>

    </section>
  )
}

export default AboutSection;