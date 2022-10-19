import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div className='app__social-block'>
      <a
        href='https://www.linkedin.com/in/aryan-kodinya-5260891ba/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>

      <a
        href='https://www.linkedin.com/in/aryan-kodinya-5260891ba/'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebookF />
      </a>

      <a href='https://github.com/Aryan-kd' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
    </div>

    <div className='app__social-block'>
      <a
        href='https://www.linkedin.com/in/aryan-kodinya-5260891ba/'
        target='_blank'
        rel='noreferrer'
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
