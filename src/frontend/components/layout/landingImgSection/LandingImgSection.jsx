import React, {useMemo} from 'react';
import { useInView } from 'react-intersection-observer';

function LandingImgSection( { text, img } ) {

/* Intersection Observer Steps (react-intersection-observer): */

/*  1) Import the useInView() component from react-intersection-observer

    2) Add a ref to a DOM element (e.g. ref=headingRef ) 
      - This is the equivalent to using a useRef hook

    3) Create a variable that references the Intersection Observer's 'options' argument.  You pass this in to the useInView() as -> useInView(options)

      - options comprises of:
        1) threshold
        2) root
        3) rootMargin
        4) triggerOnce: true //only fires once
  
  */
 
 const insersectionOptions = useMemo( ()=> {
  return {
    threshold: 1,
    root: null, 
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  }
 }, [])
  
  const { ref: headingRef, inView: isVisible, }= useInView(insersectionOptions);

  return (
    <section className='landingImgSection-parent-container'>
        <div className='landingImgSection-img-wrapper'>
            <img 
                className='landingImgSection-img'
                alt='Some placeholder txt'
                src={img}
            />

            <div className='landingImgSection-txt-wrapper'>
                
                  <h1 className={isVisible ? 'landingImgSection-txt fade-in' : 'landingImgSection-txt'} ref={headingRef}>
                        { isVisible ? text : ''}
                        {/* {text} */}
                  </h1>
                
            </div>
        </div>

    </section>
  )
}

export default LandingImgSection;