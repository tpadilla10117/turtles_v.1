import React, { useState, useCallback } from 'react';
/* import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"; */

function PhotoGallery( { photos } ) {

    let slideIndex = 1;

    const openModal = () => {
        console.log('clicked an img to open')
        document.getElementById('gallery-modal-parent').style.display = 'block';
        showSlides(slideIndex)
    };

    const closeModal = () => {
        document.getElementById('gallery-modal-parent').style.display = 'none';
    };

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("modal-myslides");
        /* let dots = document.getElementsByClassName("demo"); */
        /* var captionText = document.getElementById("caption"); */
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].className = "modal-myslides"
        }
        /* for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        } */
        slides[slideIndex-1].style.display = "block";
        /* slides[slideIndex-1].className = "modal-myslides active"; */
        setTimeout(function(){slides[slideIndex-1].className = "modal-myslides active"; }, 1 )
        /* dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt; */
    };

    /* Next / Previous controls: */

    const plusSlides = () => {
        console.log("clicked")
        showSlides(slideIndex += 1);
    };

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    const prevSlides = () => {
        console.log('clicked prev');
        showSlides(slideIndex -= 1);
    }

    



/* State for current viewed photo in gallery: */
    /* const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openModalBox = useCallback( (event, { photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeModalBox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      }; */

    

    return (
        <section className='gallery-parent-container'>
            {/* <Gallery photos={photos} onClick={openModalBox} />
            <ModalGateway>
                {
                    viewerIsOpen ? (
                        <Modal onClose={closeModalBox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(event => ({
                                    ...event,
                                    srcset: event.SrcSet,
                                    caption: event.caption,
                                    alt: event.alt,
                                    thumbnail: event.thumbnail,
                                    key:currentImage
                                }))}
                            />
                        </Modal>
                    ) : null
                }
            </ModalGateway> */}

            <div className='gallery-wrapper gallery-row'>
                {/* <div className='gallery-column'> */}

                {photos.map( photo => {
                    return (
                        <img 
                            src={photo.src} 
                            alt={photo.alt}
                            key={photo.id}
                            onClick={openModal}
                        
                        />
                    )
                    
                })}
                {/* </div> */}

            </div>

            <div id='gallery-modal-parent' className='gallery-modal-parent'>
                <span className='modal-close cursor'
                    onClick={closeModal}
                >
                    X
                </span>
                <div className='gallery-modal-content'>
                    {photos.map( mySlides => {
                        return (
                            <div className='modal-myslides' key={mySlides.id}>
                                <div className='modal-numbertext'
                                >
                                    {mySlides.id} / 4
                                </div>
                                <img src={mySlides.src} alt={mySlides.id} className='modal-img'/>
                            </div>
                        )
                    })}

                {/* TODO: Next/Prev controls: */}

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