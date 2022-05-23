import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SvgIcon } from '@mui/material';

function ContactBlock() {
  return (
    <article className='contactBlock-parent-container'>
        <h1 className='contactBlock-h1'>Contact</h1>
        <section className='contactBlock-list-wrapper'>

            <ul>
                <li>
                    <SvgIcon 
                            component={MailOutlineIcon}
                    />
                    <div>
                        <h3>Phone</h3>
                        <p>xxx.xxx.xxxx</p>
                    </div>
                    
                </li>
            
                <li>
                    <SvgIcon 
                            component={LocationOnIcon}
                    />
                    <div>
                        <h3>Address</h3>
                        <p>1223 East Cove Ave.</p>
                        <p>Los Angeles CA 92617</p>
                    </div>
                </li>
            
                <li>
                    <SvgIcon 
                        component={PhoneIphoneIcon}
                    />
                    <div>
                        <h3>Email</h3>
                        <p>xxx@email.com</p>
                    </div>
                </li>
            </ul>

        </section>

    </article>
  )
}

export default ContactBlock;