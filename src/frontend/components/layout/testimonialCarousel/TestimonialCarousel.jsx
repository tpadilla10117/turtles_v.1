import React, { useState, useEffect } from 'react';

function TestimonialCarousel( {carouselData} ) {

  /* CAROUSEL LOGIC: */

  //Using the carouselData index to matach against the number from currentSlide
  //If there's a match, the DOM elements (slide, buttons), get an 'active' class
  // Else, they get their normal names (**SEE TERNARY IN DOM ELEMENTS**)

  let [ currentSlide, setCurrentSlide ] = useState(0);
  const slideLength = carouselData.length;

/* Function to automatically update the carousel after a designated time with setTimeout, a DOM method: */
  /* useEffect( () => {
    const time = setTimeout( () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)  
    }, 10000);


    return () => {
      clearTimeout(time);
    }
  }, [currentSlide, slideLength]);
 */

/* Functions for Arrow Buttons if Requested by Client: */

  /* const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  }; */



/* Helper Function that allows user to navigate to exact slide in carousel: */
  const exactSlide = (index) => {
    setCurrentSlide(parseInt(index));
  };

  const navigateDots = event => {
    //First need to target correct dot at the array index:
    const arrayValues = event.target.getAttribute('data-key');
    /* console.log('Here are my dots: ', arrayValues); */

    exactSlide(arrayValues);
  }
  return (
    <section className='testimonialCarousel-parent-container'>
      <div className='testimonialCarousel-img-slider'>
        {carouselData.map( (img, index) => {
          return (
            <div className={index === currentSlide ? 'testimonialCarousel-slide active' : 'testimonialCarousel-slide'} key={img.id}>
              <img alt={img.alt} src={img.src} />

            {/* TODO: the client img */}
              <div className='testimonialCarousel-clientimg-parent'>
                <img alt={img.alt} src={img.src} className='testimonialCarousel-clientimg' />
              </div>

              <div className={`testimonialCarousel-info ${img.id}`}>
              
                <h2 
                  className={`testimonialCarousel-title 
                  ${img.title}`}
                >
                  {img.title}
                </h2>

                <h3
                  className={`testimonialCarousel-subtitle 
                  ${img.subtitle}`}
                >
                  {img.subtitle}
                </h3>

                <p 
                  className={`testimonialCarousel-caption ${img.id}`}
                >
                  {img.caption}
                </p>

              </div>
            </div>
          )
        })}

        <div className='testimonialCarousel-navigation'>

          {carouselData.map( (btn, index) => {
            return (
              <div className={index === currentSlide ? 'testimonialCarousel-navigation-btn active' : 'testimonialCarousel-navigation-btn'} key={btn.buttonId} data-key={index} /* onClick={event => activeSlide(event)} */ onClick={navigateDots}></div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default TestimonialCarousel;