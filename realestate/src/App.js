import React from 'react';
import './App.css';
import Filter from './components/Filter'
import Choose from './components/Choose'
import Testimony from './components/Testimony';
import Partners from './components/Partners';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Listing from './components/Listing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropertyListing from './components/Home/PropertyListing';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import Profile from './components/Profile';
import Tenant from './components/Tenant'
function App() {
  return (
     <>
      <Router>
        <Filter path="/home"  exact component={Filter}/>
        
        <Route path="/"  exact component={Choose}/>
        <Route path="/" exact component={Testimony}/>
        <Route path="/" exact component={Partners}/>
        <Route path="/properties" exact component={PropertyListing}/>
        <Route path="/properties/:id" exact component={PropertyDetailsPage}/>
        <Route path="/profiles" exact component={Profile}/>
        <Route path="/" exact component={Registration}/>
        <Route path="/listing" exact component={Listing}/>
        <Route path="/:id/tenant" exact component={Tenant}/>
        
        <Footer />
      </Router>
     </>
  )
}

export default App;
