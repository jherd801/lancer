import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index"
import BuySell from "./pages/BuySell/BuySell"
import Listings from "./pages/Listings/Listings"
import Login from "./pages/Login/Login"
import MyListings from "./pages/MyListings/MyListings"
import NewListing from "./pages/NewListing/NewListing"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <Navbar />
        </div>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/buysell" component={BuySell} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mylistings" component={MyListings} />
        <Route exact path="/newlisting" component={NewListing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </Router>

  );
}

export default App;
