/* Component for a Hero Carousel: */
import React, {useState, useEffect} from 'react';

function HeroCarousel( { imgData } ) {

/* CAROUSEL LOGIC: */

  //Using the imgData index to matach against the number from currentSlide
  //If there's a match, the DOM elements (slide, buttons), get an 'active' class
  // Else, they get their normal names (**SEE TERNARY IN DOM ELEMENTS**)

  let [ currentSlide, setCurrentSlide ] = useState(0);
  const slideLength = imgData.length;

  console.log('Here is my imgData array: ', imgData);
  console.log('Here is my imgData array: ', slideLength);

  const slides = document.querySelector('.heroCarousel-slide');

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const carouselBtns = document.querySelectorAll('.heroCarousel-navigation-btn');

  const activeSlide = (event) => {
    /* slides.classList.add('active');
    carouselBtns.classList.add('active'); */
    console.log('clicked btn')
    console.log(event.target);
    console.log(event.target.classList.contains('active'));



    /* Pseodocode:  */

    /* 1) loop through the buttons, */
    /* 2) on click of the specific event.target, add active class */
    console.log('Here are my DOM buttons: ', carouselBtns)
    event.target.classList.add('active');
    /* setCurrentSlide() */
  };

  /* useEffect( () => {
    document.querySelector('.heroCarousel-navigation-btn').classList.add('active');
    document.querySelector('.heroCarousel-slide').classList.add('active');
  },[]); */


  return (
    <section className='heroCarousel-parent-container'>
      <div className='heroCarousel-img-slider'>
        {imgData.map( (img, index) => {
          return (
            <div className={index === currentSlide ? 'heroCarousel-slide active' : 'heroCarousel-slide'} key={img.id}>
              <img alt={img.alt} src={img.src} />
              <div className={`heroCarousel-info ${img.id}`}>
              
                <h2 
                  className={`heroCarousel-title 
                  ${img.title}`}
                >
                  {img.title}
                </h2>

                <p 
                  className={`heroCarousel-caption ${img.id}`}
                >
                  {img.caption}
                </p>

              </div>
            </div>
          )
        })}

        <div className='heroCarousel-navigation'>

          {imgData.map( (btn, index) => {
            return (
              <div className={index === currentSlide ? 'heroCarousel-navigation-btn active' : 'heroCarousel-navigation-btn'} key={btn.buttonId} /* onClick={event => activeSlide(event)} */ onClick={nextSlide}></div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default HeroCarousel;