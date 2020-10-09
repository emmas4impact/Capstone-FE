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
import Listing from './components/Listing';
import { browserHistory } from 'react-router'
function App() {
  return (
     <>
      <Router history={browserHistory}>
        <Filter path="/home"  exact component={Filter}/>
        
        <Route path="/"  exact component={Choose}/>
        <Route path="/" exact component={Testimony}/>
        <Route path="/" exact component={Partners}/>
        <Route path="/properties" exact component={PropertyListing}/>
        <Route path="/" exact component={Registration}/>
        <Route path="/listing" exact component={Listing}/>
        
        
        <Footer />
      </Router>
     </>
  )
}

export default App;
