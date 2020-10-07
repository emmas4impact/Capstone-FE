import React from 'react';
import './App.css';


import Filter from './components/Filter'
import Choose from './components/Choose'
import Testimony from './components/Testimony';
import Partners from './components/Partners';
import Registration from './components/Registration';

function App() {
  return (
     <>
   
      <Filter />
      <Choose />
      <Testimony />
      <Partners />
      <Registration />
     </>
  )
}

export default App;
