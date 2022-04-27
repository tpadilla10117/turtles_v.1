import React from 'react'

function InfoSection( {ptext, headingtxt, infoSectionClassName} ) {
  return (
    <section className={infoSectionClassName}>
        <h1>{headingtxt}</h1>
        <p>
          {ptext}
        </p>
    </section>
  )
}

export default InfoSection;