import React from 'react';

import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
      
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;