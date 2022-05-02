import React, { useState, useCallback } from 'react';
/* import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"; */

function PhotoGallery( { photos } ) {
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
                <div className='gallery-column'>

                {photos.map( photo => {
                    return (
                        <img 
                            src={photo.src} 
                            alt={photo.alt}
                            key={photo.id}
                        
                        />
                    )
                    
                })}
                </div>

            </div>

            <div id='gallery-modal-parent' className='gallery-modal-parent'>
                <span className='modal-close cursor'>& times</span>
                <div className='gallery-modal-content'>
                    {photos.map( mySlides => {
                        return (
                            <div className='modal-myslides'>
                                <div className='modal-numbertext'>
                                    {mySlides.id} / 4
                                </div>
                                <img src={mySlides.src} />
                            </div>
                        )
                    })}

                </div>

            </div>

        </section>
    )
}

export default PhotoGallery;