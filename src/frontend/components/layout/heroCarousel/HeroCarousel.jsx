/* Component for a Hero Carousel: */
import React, {useState} from 'react';

function HeroCarousel( { imgData } ) {
  console.log(imgData)

/* Carousel Logic: */
  let [ currentSlide ] = useState(1);

  const slides = document.querySelector('.heroCarousel-slide');

  const carouselBtns = document.querySelector('.heroCarousel-navigation-btn');

  const activeSlide = (event) => {
    /* slides.classList.add('active');
    carouselBtns.classList.add('active'); */
    console.log('clicked btn')
    console.log(event.target)
    event.target.classList.add('active');
  };

  /* const slides = document.querySelector('.heroCarousel-slide');

  const carouselBtns = document.querySelector('.heroCarousel-navigation-btn'); */

  /* Manual / User Navigation: */
    /* const manualNavigation = function(manual) {
      slides[manual].classList.add('active');
      carouselBtns[manual].classList.add('active');
    };

    carouselBtns.forEach( (btn, index) => {
      btn.addEventListener('click', () => {
        manualNavigation(index);
        currentSlide = index;
      });
    });
 */



  return (
    <section className='heroCarousel-parent-container'>
      <div className='heroCarousel-img-slider'>
        {imgData.map( img => {
          return (
            <div className={`heroCarousel-slide ${img.id}`} key={img.id}>
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

          {imgData.map(btn => {
            return (
              <div className={`heroCarousel-navigation-btn ${btn.buttonId}`} key={btn.buttonId} onClick={event => activeSlide(event)}></div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default HeroCarousel;