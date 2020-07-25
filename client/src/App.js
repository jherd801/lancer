import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import BuySell from "./pages/BuySell/BuySell"
import Listings from "./pages/Listings/Listings"
import Login from "./pages/Login/Login"
import MyListings from "./pages/MyListings/MyListings"
import NewListing from "./pages/NewListing/NewListing"
import Navbar from "./components/Navbar/Navbar"



function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <h1>Lancer App</h1>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/buysell" component={BuySell} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mylistings" component={MyListings} />
        <Route exact path="/newlisting" component={NewListing} />
      </div>
    </Router>

  );
}

export default App;
