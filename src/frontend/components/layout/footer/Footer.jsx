import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavbarData } from '../../../seed';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <section className='footer-parent-container'>
        <div className='footer-wrapper'>
            <div className='footer-links-container'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        {/* <NavLink className='footer-link' to='/' activeclassname='active'>
                            Home
                        </NavLink> */}

                        {NavbarData.map( footerlinks => {
                            return (
                                <NavLink key={footerlinks.id} id={footerlinks.id} to={footerlinks.path} className='footer-link' >
                                    {footerlinks.title}
                                </NavLink>
                            )
                        })}

                    </div>

                </div>

            </div>
            
            <div className='footer-addressblock'>
                <p>
                    1223 East Cove Ave.
                    Los Angeles
                </p>
            </div>
            <div className='footer-text'>
                <h1>Turtles</h1>
                <p>Aerialist. Performer</p>
                <p>xxx.xxx.xxxx</p>
            </div>


            <div className='footer-socialmedia-parent-container'>
                <div className='footer-socialmedia-wrapper'>
                    
                    <div className='footer-socialmedia'>
                        <a className='socialmedialink'
                        href='https://github.com/tpadilla10117'
                        target='blank'
                        aria-label='Facebook'
                        >
                            <FaFacebook />
                        </a>
                        <a className='socialmedialink'
                        href='https://github.com/tpadilla10117'
                        target='blank'
                        aria-label='Instagram'
                        >
                            <FaInstagram />
                        </a>

                    </div>
                    
                    <small className='footer-websiterights'>
                    Trin Padilla © {new Date().getFullYear() } All rights reserved.
                    </small>
                </div>

            </div>

        </div>
        

    </section>
  )
}

export default Footer;