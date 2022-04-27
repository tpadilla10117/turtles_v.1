/* Component Wrapper for landing page's EmailForm component: */

    import React from 'react'

    function EmailSection( {content} ) {
    return (
        <section className='emailSection-parent-container'>
            {/* <div className='emailSection-wrapper'> */}
                { content }
            {/* </div> */}

        </section>
    )
    }

    export default EmailSection;