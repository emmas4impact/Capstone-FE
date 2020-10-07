import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/NavBar'
import PropertyListing from './components/Home/PropertyListing';

function App() {
  return (
    <div className="App">
   
    <Router>
    <Navbar/>
    <PropertyListing/>
    <Route path="/home" exact component={PropertyListing}/>
    </Router>
    </div>
  );
}

export default App;
