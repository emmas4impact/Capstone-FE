import React from 'react';
import './App.css';
import Filter from './components/Filter'
import Choose from './components/Choose'
import Testimony from './components/Testimony';
import Partners from './components/Partners';
import Registration from './components/Registration';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropertyListing from './components/Home/PropertyListing';
import PropertyDetailsPage from './components/PropertyDetailsPage';
function App() {
  return (
     <>
      <Router>
        <Filter />
        
        <Route path="/" exact component={Choose}/>
        <Route path="/" exact component={Testimony}/>
        <Route path="/" exact component={Partners}/>
        <Route path="/properties" exact component={PropertyListing}/>
        <Route path="/properties/:id" exact component={PropertyDetailsPage}/>
        <Route path="/" exact component={Registration}/>
        
        <Footer />
      </Router>
     </>
  )
}

export default App;
