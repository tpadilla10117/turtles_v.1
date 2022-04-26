import React from 'react';
import placeholder2 from '../../../assets/images/placeholder2.jpg';

function LandingImgSection() {
  return (
    <section className='landingImgSection-parent-container'>
        <div className='landingImgSection-img-wrapper'>
            <img 
                className='landingImgSection-img'
                alt='Some placeholder txt'
                src={placeholder2}
            />

            <div className='landingImgSection-txt-wrapper'>
                <h1 className='landingImgSection-txt'>
                        "Lorem ipsum dolor sit amet"
                </h1>
            </div>
        </div>

    </section>
  )
}

export default LandingImgSection;