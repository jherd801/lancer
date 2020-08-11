import React from "react";
import Navbar from '../../components/Navbar/Navbar'

import ListingContainer from "../../components/ListingContainer";

const Listings = () => (
  <div>
    <Navbar />
    <h1>
      Listings Page 
    </h1>    
    <ListingContainer />
  </div>
);

export default Listings;