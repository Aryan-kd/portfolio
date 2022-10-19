import React from 'react';
import './App.scss';
import {
  About,
  Contact,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
