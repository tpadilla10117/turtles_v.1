/* Header Component is to contain the navigation components: */

    import React, {useState, useEffect} from 'react';
    import {Nav, DesktopNav} from '../../utils';

    const Header = () => {

        const [isOpen, setIsOpen] = useState(false);
        const [ isDesktop, setIsDesktop ] = useState(window.innerWidth > 1000);

        const navToggle = () => {
            setIsOpen(!isOpen);
        };

        const updateComponentView = () => {
            setIsDesktop(window.innerWidth > 1000);
        };

        useEffect ( () => {
            window.addEventListener("resize", updateComponentView);
            return () => window.removeEventListener("resize", updateComponentView);
        }, []);

    return (

        <header className="header-parent-wrapper">
            {isDesktop ?
                (<DesktopNav isOpen={isOpen} navToggle={navToggle}/>)
        
                :

                (<Nav isOpen={isOpen} navToggle={navToggle} />)

            }


            {/* TODO: Sidebar component for the menu overlay on nav button click */}

        </header> 
    );
    }

    export default Header;
