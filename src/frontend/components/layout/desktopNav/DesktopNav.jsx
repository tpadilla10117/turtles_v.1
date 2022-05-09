import React from 'react';
import { NavbarData } from '../../../seed';
import { NavLink } from 'react-router-dom';
import '../../App.scss';

const DesktopNav = (props) => {

    
  return (
    <nav className='desktopNav-parent-container'>
        <div className='desktop-nav-items-container'>
            {NavbarData.map( (item, index) => {
                return (
                    <NavLink 
                        to={item.path}
                        className='desktopNav-nav-item'
                        exact="true"
                        /* activeclassname='active' */
                        key={index}
                        id={item.id}
                    >
                        {item.title}
                    </NavLink>
                )
            })}
        </div>


    </nav> 
  );
};

export default DesktopNav;


