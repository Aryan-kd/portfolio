import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import images from '../../constants/images';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        ABOUT <span>ME</span>
        {/* <br /> means <span>Good Business</span> */}
      </h2>

      <div className='app__about-content'>
        <div className='about__content'>
          <h2 className='bold-text'>Hello Everyone</h2>
          <p className='p-text'>
            I am Aryan, a self taught full Stack Web Developer and I have a
            command over languages like HTML, CSS, JavaScript, PHP, & other. I
            also have experience of using React JS framework. I have learn MERN
            (MongoDB, Express, React JS & Node JS) Stack recently. So, I can
            build a Full Stack Website using this most popular combination of
            tools.
          </p>
        </div>
        <div className='profile__pic app__flex'>
          <img src={images.profile} alt='profile' />
        </div>
      </div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>

            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__blackbg'
);
