import React, { useState } from 'react';
import './Navbar.scss';
import { HiX } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt='logo' /> */}
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'testimonial'].map((item) => (
          <li className='app__flex' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <AiOutlineMenu onClick={() => setToggle(true)} className='HiMenuAlt4' />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} className='HiX' />
            <ul className='app__navbar-links'>
              {['home', 'about', 'work', 'skills', 'testimonial'].map(
                (item) => (
                  <li className='app__flex p-text' key={item}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
