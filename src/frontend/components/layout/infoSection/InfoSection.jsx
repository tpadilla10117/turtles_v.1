import React, { useRef, useMemo, useEffect, useState} from 'react';

function InfoSection( {ptext, headingtxt, infoSectionClassName} ) {

  const headingRef = useRef(null);

  return (
    <section className={infoSectionClassName}>
        <div>
          <h1 ref={headingRef} className='infoSection-h1'>{headingtxt}</h1>
          <p>
            {ptext}
          </p>
        </div>
    </section>
  )
}

export default InfoSection;