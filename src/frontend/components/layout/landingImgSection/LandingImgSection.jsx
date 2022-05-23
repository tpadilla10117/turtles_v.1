import React, {useMemo} from 'react';
import { useInView } from 'react-intersection-observer';

function LandingImgSection( { text, img } ) {
 
 const insersectionOptions = useMemo( () => {
  return {
    threshold: 1,
    root: null, 
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  }
 }, []);
  
  const { ref: headingRef, inView: isVisible, }= useInView(insersectionOptions);

  return (
    <section className='landingImgSection-parent-container'>
        <figure className='landingImgSection-img-wrapper'>
            <img 
                className='landingImgSection-img'
                alt='Some placeholder txt'
                src={img}
            />

            <figcaption className='landingImgSection-txt-wrapper'>
                
                  <h1 className={isVisible ? 'landingImgSection-txt fade-in' : 'landingImgSection-txt'} ref={headingRef}>
                        { isVisible ? text : ''}
                        {/* {text} */}
                  </h1>
                
            </figcaption>
        </figure>

    </section>
  )
}

export default LandingImgSection;