import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarData } from '../../../seed';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
/* import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram'; */
import SampleLogo from '../../../assets/icons/SampleLogo.png';

function Footer() {
  return (
    <section className='footer-parent-container'>
        <div className='footer-wrapper'>
            <div className='footer-links-container'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>

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
            
            <div className='footer-contactinfo'>
                <p>1223 East Cove Ave.</p>
                <p>Los Angeles CA 92617</p>
                <p>xxx.xxx.xxxx</p>
            </div>
            <div className='footer-text'>
                <h1>TURTLES</h1>
                <p>Aerialist. Performer</p>
            </div>

            <NavLink
            to={'/'}
            exact="true"
            className='footer-img'
            >
            <img src={SampleLogo} alt="The logo for Turtles" className="desktopNav-img" />
            </NavLink>



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