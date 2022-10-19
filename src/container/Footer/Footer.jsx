import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { SocialMedia } from '../../components';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-content'>
        <SocialMedia />
        <div className='app__footer-detail'>
          <div className='app__contact-card '>
            {/* <img src={images.email} alt='email' className='mail' /> */}
            <a
              href='mailto:aryan.kodinya2002@gmail.com'
              className='p-text app__flex'
            >
              <AiOutlineMail className='mail' />
              aryan.kodinya2002@gmail.com
            </a>
          </div>
          <div className='app__contact-card'>
            {/* <img src={images.mobile} alt='phone' className='phone' /> */}
            <a href='tel:+91 8860247280' className='p-text app__flex'>
              <BsFillTelephoneOutboundFill className='phone' />
              +91 8860247280
            </a>
          </div>
        </div>
      </div>
      <div className='copyright app__flex'>
        <p className='p-text'>All rights reserved @2022 Aryan Kodinya</p>
      </div>
    </div>
  );
};

export default Footer;
