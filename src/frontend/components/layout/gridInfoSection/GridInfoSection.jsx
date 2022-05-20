import React, {useMemo} from 'react';
import { useInView } from 'react-intersection-observer';

function GridInfoSection( {
    ptext, 
    ptext2, 
    headingtxt, 
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


  return (
    <section className={gridInfoSectionClassName}>
        <div className={gridInfoSectionTxtParent}>
            <div className={gridInfoSectionTxtWrapper1ClassName}>
            
        {/* Side Img 1: */}
        
            <div className={imgIsVisible ? 'gridInfoSection-img-parent slide-in' : 'gridInfoSection-img-parent'} /* ref={imgRef} */>
            
                <img src={gridInfoSectionImg} alt={alt} className='gridInfoSection-img' />

            

            </div>

            <div className={gridInfoSectionHeadingContainer}>
                <h2 ref={paragraph1Ref} className={isVisible ? 'gridInfoSection-p1 fadeInUp active' : 'gridInfoSection-p1'} >
                    { isVisible ? ptext : ''}
                </h2>
            </div>

            
            
            </div>

            <div className={gridInfoSectionTxtWrapper2ClassName}>
            

        {/* Side Img 2: */}
        
            <div className={gridInfoSectionHeadingContainer}>
                <h2 ref={paragraph2Ref} className={isVisible2 ? 'gridInfoSection-p2 fadeInUp active' : 'gridInfoSection-p2'}>
                    { isVisible2 ? ptext2 : ''}
                </h2>
            </div>

            <div className={imgIsVisible ? 'gridInfoSection-img-parent2 slide-in' : 'gridInfoSection-img-parent2'} ref={imgRef}>
            
                <img src={gridInfoSectionImg2} alt={alt} className='gridInfoSection-img img2' />
            
            

            </div>


                
            
            </div>

        </div>


    </section>
  )
}

export default GridInfoSection;