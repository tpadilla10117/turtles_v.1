import React, {useMemo} from 'react';
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


  const insersectionOptions = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: paragraph1Ref, inView: isVisible, }= useInView(insersectionOptions);

  const insersectionOptions2 = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: paragraph2Ref, inView: isVisible2, }= useInView(insersectionOptions2);

  const headingIntersectionOptions = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: headingRef, inView: headingIsVisible, }= useInView(headingIntersectionOptions);

  const imgInteresctionOptions = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -350px 0px',
      triggerOnce: true
    }
   }, []);

  const { ref: imgRef, inView: imgIsVisible, }= useInView(imgInteresctionOptions);

  const infoSectionTxtWrapper1Options = useMemo( () => {

    return {
        threshold: 1,
        root: null, 
        rootMargin: '0px 0px 100px 0px',
        triggerOnce: true,
      }
    }, []);

    const { ref: txtWrapperRef1, inView: txtWrapper1IsVisible, } = useInView({infoSectionTxtWrapper1Options});

    const infoSectionTxtWrapper2Options = useMemo( () => {

        return {
            threshold: 1,
            root: null, 
            rootMargin: '0px 0px 100px 0px',
            triggerOnce: true,
        }
        }, []);

    const { ref: txtWrapperRef2, inView: txtWrapper2IsVisible, } = useInView({infoSectionTxtWrapper2Options});


  return (
    <section className={gridInfoSectionClassName}>
        <div className={gridInfoSectionTxtParent}>
            <div className={txtWrapper1IsVisible ? `${gridInfoSectionTxtWrapper1ClassName} fadeInTopLeft` : gridInfoSectionTxtWrapper1ClassName} ref={txtWrapperRef1}>
            
        {/* Side Img 1: */}
        
            {txtWrapper1IsVisible ?
                <div className={imgIsVisible ? 'gridInfoSection-img-parent slide-in' : 'gridInfoSection-img-parent'} /* ref={imgRef} */>
            
                    <img src={gridInfoSectionImg} alt={alt} className='gridInfoSection-img' />

                </div>
            :

                ''
            }
            
            {txtWrapper1IsVisible ?
                <div className={gridInfoSectionHeadingContainer}>
                    <h1 className={h1textClassname}>{h1text}</h1>
                    <h2 ref={paragraph1Ref} className={isVisible ? 'gridInfoSection-p1 fadeInUp active' : 'gridInfoSection-p1'} >
                        { isVisible ? ptext : ''}
                    </h2>
                </div>
        
            :
                ''
            }
            

            
            
            </div>

            <div className={txtWrapper2IsVisible ? `${gridInfoSectionTxtWrapper2ClassName} fadeInBottomRight` : gridInfoSectionTxtWrapper2ClassName} ref={txtWrapperRef2}>
            

            { txtWrapper2IsVisible ?
            
        
            <div className={gridInfoSectionHeadingContainer}>
                <h1 className={h1textClassname}>{h1text2}</h1>
                <h2 ref={paragraph2Ref} className={isVisible2 ? 'gridInfoSection-p2 fadeInUp active' : 'gridInfoSection-p2'}>
                    { isVisible2 ? ptext2 : ''}
                </h2>
            </div>

            :
                
                ''
        
            }
        

            { txtWrapper2IsVisible ?
        
            <div className={imgIsVisible ? 'gridInfoSection-img-parent2 slide-in' : 'gridInfoSection-img-parent2'} ref={imgRef}>
            
                <img src={gridInfoSectionImg2} alt={alt} className='gridInfoSection-img img2' />
            
            </div>
    
            :
                
                ''
            
            }



                
            
            </div>

        </div>


    </section>
  )
}

export default GridInfoSection;