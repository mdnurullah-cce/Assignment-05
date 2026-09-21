import React, { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Technologies from './Components/Technologies';
import type { ITechnology } from './Types/Technologies';

const techPromiseFetch = async ():Promise<ITechnology[]> => {
  const res =await fetch("/data.json")
  const data = await res.json()
  return data;
}

function App() {
  const techPromise = techPromiseFetch();
  
  return (
    <div>
    <Navbar />
    <Hero />
    <Suspense fallback={<p>Loading...</p>}> 
    <Technologies techPromise={techPromise} />
    </Suspense>
    
    
    
    
      
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;