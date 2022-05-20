import React, {useMemo} from 'react';
import { useInView } from 'react-intersection-observer';

function InfoSection( {ptext, ptext2, ptext3, headingtxt, infoSectionClassName, infoSectionTxtWrapperClassName, infoSectionImg, alt, content } ) {


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

  const insersectionOptions3 = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: paragraph3Ref, inView: isVisible3, }= useInView(insersectionOptions3);

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
      rootMargin: '0px 0px -300px 0px',
      triggerOnce: true
    }
   }, []);

  const { ref: imgRef, inView: imgIsVisible, }= useInView(imgInteresctionOptions);


  return (
    <section className={infoSectionClassName}>
        <div className={infoSectionTxtWrapperClassName}>
          <h1 ref={headingRef} className={headingIsVisible ? 'infoSection-h1 fadeInUp' : 'infoSection-h1'}>   
            { headingIsVisible ? headingtxt : ''}
          </h1>

          <p ref={paragraph1Ref} className={isVisible ? 'infoSection-p1 fadeInUp active' : 'infoSection-p1'} >
          { isVisible ? ptext : ''}
        
          </p>
          <br/>
          <p ref={paragraph2Ref} className={isVisible2 ? 'infoSection-p2 fadeInUp active' : 'infoSection-p2'}>
          { isVisible2 ? ptext2 : ''}
            
          </p>
          <br/>
          <p ref={paragraph3Ref} className={isVisible3 ? 'infoSection-p3 fadeInUp active' : 'infoSection-p3'}>
          { isVisible3 ? ptext3 : ''}
            
          </p>

      {/* CTA Buttons: */}
          {content ? content : ''}
          
        </div>

      {/* Side Img: */}
      
        <div className={imgIsVisible ? 'infoSection-img-parent slide-in' : 'infoSection-img-parent'} ref={imgRef}>
          {imgIsVisible ?
            <img src={infoSectionImg} alt={alt} className='infoSection-img' />
            
            :

            ''
          }
          

        </div>

    </section>
  )
}

export default InfoSection;