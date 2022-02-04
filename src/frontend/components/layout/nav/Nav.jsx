import React, {useState, useEffect} from 'react';

import {NavbarData} from '../../../seed';
import {NavLink} from 'react-router-dom';
import {scrollTop} from '../../utils';

const Nav = (props) => {

    const {navToggle} = props;
    const [ scrollNav, setScrollNav ] = useState(false);


    /* Box and transparent are referencing inline style properties: */
   const box = {
    background: /* 'hsla(0,0%,42.7%,.12)' */'#24496A',
    boxShadow: '0 3px 30px rgb(0 0 0 / 10%)',
    backdropFilter: 'blur(5px)'
    };

    const transparent =  {
        background: 'transparent'
    };


    /* TODO: Event listener not firing regardless of logic: */
   const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    console.log(window.scrollY);


    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        return () => window.removeEventListener('scroll', changeNav);
    }, [] );


  return (
    <nav className='nav-parent-container'>
        <div className='nav-items-container'>
        
            {NavbarData.map( (item, index) => {
                return (
                    <NavLink to={item.path} 
                        exact
                        activeClassName='active'
                        className='main-nav-item'
                        style={ {textDecoration: "none"} } 
                        key={index}
                    >
                        <li key={index}
                            className={item.title}
                            onClick={scrollTop}
                            id="navlinks"
                        >
                            <span>{item.title}</span>

                        </li>
                    </NavLink>
                )
            })}
        </div>

        {/* TODO: For the mobile Icon */}


    </nav>
  ) ;
}

export default Nav;

