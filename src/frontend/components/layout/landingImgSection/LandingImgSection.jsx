import React from 'react';

function LandingImgSection( { text, img } ) {

/* TODO: Intersection observers -> text needs to slide in on scroll */


  return (
    <section className='landingImgSection-parent-container'>
        <div className='landingImgSection-img-wrapper'>
            <img 
                className='landingImgSection-img'
                alt='Some placeholder txt'
                src={img}
            />

            <div className='landingImgSection-txt-wrapper'>
                <h1 className='landingImgSection-txt'>
                        {text}
                </h1>
            </div>
        </div>

    </section>
  )
}

export default LandingImgSection;