/* Component for a Hero Carousel: */
import React from 'react';

function HeroCarousel( { imgData } ) {
  console.log(imgData)
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
      </div>

    </section>
  )
}

export default HeroCarousel;