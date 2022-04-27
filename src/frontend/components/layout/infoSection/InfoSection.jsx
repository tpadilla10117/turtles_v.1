import React, { useRef, useMemo, useEffect, useState} from 'react';

function InfoSection( {ptext, headingtxt, infoSectionClassName} ) {
  return (
    <section className={infoSectionClassName}>
        <h1>{headingtxt}</h1>
        <div>
          <p>
            {ptext}
          </p>
        </div>
    </section>
  )
}

export default InfoSection;