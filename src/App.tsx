import React from 'react';

import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
    <Navbar />
      
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;