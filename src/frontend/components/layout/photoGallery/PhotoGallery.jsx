import React, { useEffect, useRef } from 'react';
import {
    CtaButton,
    InfoSection
} from '../../utils'


function PhotoGallery( { photos } ) {

    let slideIndex = 0;
    const modalReference = useRef(null);

    const openModal = (event) => {
        document.getElementById('gallery-modal-parent').classList.add('active');
        document.getElementById('gallery-modal-parent').classList.remove('fadeOut');

        const arrayValues = event.target.getAttribute('data-key');

        currentSlide(Number(arrayValues ) + 1)

        
       
    };

    const closeModal = () => {
        
        document.querySelector('.modal-myslides').classList.remove('active');
        document.getElementById('gallery-modal-parent').classList.remove('active');
        document.getElementById('gallery-modal-parent').classList.add('fadeOut');
    };

/* When user clicks outside of modal, close it: */
    useEffect( () => {
        function handleClick(e) {
            if(!modalReference.current?.contains(e.target)) {
                return
            } else if(e.target === document.querySelector('.gallery-modal-parent')) {
                closeModal();
            }
        }
        
        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick)
    }, );


    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("modal-myslides");
       
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].className = "modal-myslides"
        }
       
        slides[slideIndex-1].style.display = "block";
        setTimeout(function(){slides[slideIndex-1].className = "modal-myslides active"; }, 1 )
   
    };

    /* Next / Previous controls: */

    const plusSlides = () => {
        showSlides(slideIndex += 1);
    };

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    const prevSlides = () => {
        showSlides(slideIndex -= 1);
    }
    
    return (
        <section className='gallery-parent-container'>

            <InfoSection
                headingtxt={'Take a Peak'}
                ptext={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '}
                ptext2={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                ptext3={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                infoSectionClassName={'infoSection-gallery-parent-container'}
            />
            

            <div className='gallery-wrapper gallery-row'>

                {photos.map( (photo, index) => {
                    return (
                        <img 
                            src={photo.src} 
                            alt={photo.alt}
                            key={photo.id}
                            onClick={openModal}
                            data-key={index}
                        
                        />
                    )
                    
                })}

            </div>

            <CtaButton 
                text={'Gallery'}
                classnames={'gallery-btn'}
            />

        {/* TODO: This is the Modal's 'X' Button: */}
            <div id='gallery-modal-parent' className='gallery-modal-parent'
            ref={modalReference}
            >
                <span className='modal-close cursor'
                    onClick={closeModal}
                >
                    X
                </span>

            {/* TODO: This is the Gallery's Modal: */}
                <div className='gallery-modal-content'>
                    {photos.map( mySlides => {
                        return (
                            <div className='modal-myslides' key={mySlides.id}>
                                <div className='modal-numbertext'
                                >
                                    {mySlides.id} / 4
                                </div>
                                <img src={mySlides.src} alt={mySlides.id} className='modal-img'
                                
                                />
                            </div>
                        )
                    })}

                {/* TODO: Next/Prev controls: need MUI icons*/}

                    <a className="modal-prev" onClick={prevSlides}>&#10094;</a>
                    <a className="modal-next" onClick={plusSlides}>&#10095;</a>


                {/* TODO: Caption Text */}
                    <div className='gallery-caption-parent-container'>
                        {photos.map( captions => {
                            return (
                                <p key={captions.id} id='caption'></p>
                            )
                        })}

                    </div>

                {/* TODO: Thumbnaul Img controls: */}


                </div>

            </div>

        </section>
    )
}

export default PhotoGallery;