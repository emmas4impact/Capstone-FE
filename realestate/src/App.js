import React from 'react';
import './App.css';


import Filter from './components/Filter'
import Choose from './components/Choose'
import Testimony from './components/Testimony';
import Partners from './components/Partners';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
     <>
   
      <Filter />
      <Choose />
      <Testimony />
      <Partners />
      <Registration />
      <Footer />
     </>
  )
}

export default App;
