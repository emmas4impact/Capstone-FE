import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Filter from './components/Filter'
import Choose from './components/Choose'
import Testimony from './components/Testimony';

function App() {
  return (
     <>
   
      <Filter />
      <Choose />
      <Testimony />
     </>
  );
}

export default App;
