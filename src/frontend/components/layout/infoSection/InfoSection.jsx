import React, { useRef, useMemo, useEffect, useState} from 'react';

function InfoSection( {ptext, headingtxt, infoSectionClassName} ) {
  return (
    <section className={infoSectionClassName}>
        <div>
          <h1>{headingtxt}</h1>
          <p>
            {ptext}
          </p>
        </div>
    </section>
  )
}

export default InfoSection;