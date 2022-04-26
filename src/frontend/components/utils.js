/* This components handles exports in the main App: */

    /* "layout" components: */
        export { default as Nav } from '../components/layout/nav/Nav.jsx';

        export { default as DesktopNav } from '../components/layout/desktopNav/DesktopNav.jsx';

        export { default as Sidebar } from '../components/layout/sidebar/Sidebar.jsx';

        export { default as Header } from '../components/layout/header/Header.jsx';

        export { default as Footer } from '../components/layout/footer/Footer.jsx';



/* -------------------------------------------------------------------------- */


    /* "pages" components: */

        export { default as Landing } from '../components/pages/landing/Landing.js';

        export { default as About } from '../components/pages/about/About.js';

        export { default as Gallery } from '../components/pages/gallery/Gallery.js';

        export { default as Contact } from '../components/pages/contact/Contact.js';

        export { default as InfoSection } from '../components/layout/infoSection/InfoSection.jsx';


/* -------------------------------------------------------------------------- */
/* Functions: */

/* Scroll to top of the page after a user clicks a link: */
export const scrollTop = () => {
    window.scrollTo({ behavior: "smooth", top: "0px"});
};