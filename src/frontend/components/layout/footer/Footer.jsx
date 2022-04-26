import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavbarData } from '../../../seed';

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
                                <NavLink key={footerlinks.id} id={footerlinks.id} to={footerlinks.path} >
                                    {footerlinks.title}
                                </NavLink>
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>
        Footer



    </section>
  )
}

export default Footer;