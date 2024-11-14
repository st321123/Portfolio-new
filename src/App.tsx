import React from 'react';

import First from "./components/First";
import Second from './components/Second';
import Third from './components/Third';
import Footer from './components/Footer';
import Header from './components/Header';
export default function App() {
  return (
    <div >
   <Header/>
      <First />
      <Third />
      <Second />
      
      <Footer/>
 
    </div>
  )
}
