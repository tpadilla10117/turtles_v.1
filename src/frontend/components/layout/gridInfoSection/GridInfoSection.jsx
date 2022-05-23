import React from 'react';
import { useInView } from 'react-intersection-observer';

function GridInfoSection( {
    ptext, 
    ptext2, 
    h1text,
    h1text2,
    h1textClassname, 
    gridInfoSectionClassName, 
    gridInfoSectionTxtParent,
    gridInfoSectionTxtWrapper1ClassName, 
    gridInfoSectionTxtWrapper2ClassName, 
    gridInfoSectionHeadingContainer,
    gridInfoSectionImg, 
    gridInfoSectionImg2, 
    alt, 
    content } ) {


    const { ref: txtWrapperRef1, inView: txtWrapper1IsVisible, }= useInView({
        threshold: .5,
        root: null, 
        rootMargin: '0px 0px 0px 0px',
        triggerOnce: true,
      });


    const { ref: txtWrapperRef2, inView: txtWrapper2IsVisible, } = useInView({
        threshold: .5,
        root: null, 
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
      });


  return (
    <section className={gridInfoSectionClassName}>
        <div className={gridInfoSectionTxtParent}>
            <div className={txtWrapper1IsVisible ? `${gridInfoSectionTxtWrapper1ClassName} active` : gridInfoSectionTxtWrapper1ClassName} ref={txtWrapperRef1}>
            
        {/* Side Img 1: */}
        
            {txtWrapper1IsVisible ?
                <figure className='gridInfoSection-img-parent' /* ref={imgRef} */>
            
                    <img src={gridInfoSectionImg} alt={alt} className='gridInfoSection-img' />

                </figure>
            :

                ''
            }
            
            {txtWrapper1IsVisible ?
                <div className={gridInfoSectionHeadingContainer}>
                    <h1 className={h1textClassname}>{h1text}</h1>
                    <h2 className='gridInfoSection-p1'>
                        {ptext}
                    </h2>
                </div>
        
            :
                ''
            }
            
            
            </div>

            <div className={txtWrapper2IsVisible ? `${gridInfoSectionTxtWrapper2ClassName} active` : gridInfoSectionTxtWrapper2ClassName} ref={txtWrapperRef2}>
            

            { txtWrapper2IsVisible ?
            
        
            <div className={gridInfoSectionHeadingContainer}>
                <h1 className={h1textClassname}>{h1text2}</h1>
                <h2  className='gridInfoSection-p2'>
                    { ptext2 }
                </h2>
            </div>

            :
                
                ''
        
            }
        

            { txtWrapper2IsVisible ?
        
            <figure className='gridInfoSection-img-parent2'>
            
                <img src={gridInfoSectionImg2} alt={alt} className='gridInfoSection-img img2' />
            
            </figure>
    
            :
                
                ''
            
            }



                
            
            </div>

        </div>


    </section>
  )
}

export default GridInfoSection;