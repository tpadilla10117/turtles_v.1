import React, {useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { NavbarData } from '../../../seed';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SvgIcon } from '@mui/material'
import "../../App.scss";

const Sidebar = (props) => {

    const { isOpen, navToggle } = props;
    const nodeRef = React.useRef(null);

    return (
        <CSSTransition in={isOpen} timeout={300} unmountOnExit onEnter={ () => navToggle} onExited={ () => navToggle} classNames="sidebar-transition" nodeRef={nodeRef}>
            <nav className='sidebar-parent-container' ref={nodeRef}>
                <div className='sidebar-icon-container' onClick={navToggle}>
                    <CloseRoundedIcon />
                </div>

                <div className='sidebar-wrapper'>
                    <ul className='sidebar-menu'>
                        <div className='sidebar-link' onClick={navToggle}>
                            {NavbarData.map( (item, index) => {
                                return (
                                    <NavLink to={item.path} activeclassname='active' className='nav-item'
                                    style={ {textDecoration: 'none'} }
                                    key={index}
                                    >
                                        <li key={index} className={item.title}>
                                             <SvgIcon component={item.img} />
                                            <span>{item.title}</span>
                                        </li>
                                    </NavLink>
                                )
                            })}

                        </div>

                    </ul>

                </div>

            {/* TODO: Social Media Sections: */}
                <div className='socialmedia-parent-container'>
                    <div className='socialmedia-wrapper'>

                        <div className='socialicons'>
                            <a className='socialicons-link'
                                href="https://www.linkedin.com/in/t-p-101/" target="blank" aria-label="Facebook"
                            >
                                <FacebookRoundedIcon />
                            </a>
                            <a className='socialicons-link'
                                href="https://www.linkedin.com/in/t-p-101/" target="blank" aria-label="Instagram"
                            >
                                <InstagramIcon />
                            </a>

                        </div>

                    </div>

                </div>

            </nav>
        </CSSTransition>
    );
};

export default Sidebar;
