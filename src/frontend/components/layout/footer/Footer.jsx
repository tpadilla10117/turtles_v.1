import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <section className='footer-parent-container'>
        <div className='footer-wrapper'>
            <div className='footer-links-container'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <NavLink className='footer-link' to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </div>

                </div>

            </div>

        </div>
        Footer



    </section>
  )
}

export default Footer;