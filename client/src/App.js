import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index"
import Listings from "./pages/Listings/Listings"
import Login from "./pages/Login/Login"
import NewListing from "./pages/NewListing/NewListing"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import SignUp from "./pages/SignUp/index"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={SignUp} />
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
