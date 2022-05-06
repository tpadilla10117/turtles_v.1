/* This components handles exports in the main App: */

    /* "layout" components: */
        export { default as Nav } from '../components/layout/nav/Nav.jsx';

        export { default as DesktopNav } from '../components/layout/desktopNav/DesktopNav.jsx';

        export { default as Sidebar } from '../components/layout/sidebar/Sidebar.jsx';

        export { default as Header } from '../components/layout/header/Header.jsx';

        export { default as Footer } from '../components/layout/footer/Footer.jsx';

        export { default as CtaButton } from '../components/layout/ctaButton/CtaButton.jsx';

        export { default as ComponentWrapper } from '../components/layout/componentWrapper/ComponentWrapper.jsx';

        export { default as Carousel } from '../components/layout/carousel/Carousel.jsx';

        export { default as PhotoGallery } from '../components/layout/photoGallery/PhotoGallery.jsx';

        export { default as TestimonialSection } from '../components/layout/testimonialSection/TestimonialSection.jsx';

        export { default as HeroCarousel } from '../components/layout/heroCarousel/HeroCarousel.jsx';


/* -------------------------------------------------------------------------- */


    /* "pages" components: */

        export { default as Landing } from '../components/pages/landing/Landing.js';

        export { default as About } from '../components/pages/about/About.js';

        export { default as Gallery } from '../components/pages/gallery/Gallery.js';

        export { default as Contact } from '../components/pages/contact/Contact.js';

        export { default as InfoSection } from '../components/layout/infoSection/InfoSection.jsx';

        export { default as AboutSection } from '../components/layout/aboutSection/AboutSection.jsx';

        export { default as LandingImgSection } from '../components/layout/landingImgSection/LandingImgSection.jsx';

        export { default as EmailSection } from '../components/layout/emailSection/EmailSection.jsx';

        export { default as EmailForm } from '../components/layout/emailForm/EmailForm.jsx';


/* -------------------------------------------------------------------------- */
/* Functions: */

/* Scroll to top of the page after a user clicks a link: */
export const scrollTop = () => {
    window.scrollTo({ behavior: "smooth", top: "0px"});
};