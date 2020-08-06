import React from "react";
import ProfileCard from "../../components/ProfileCard/index";
import Navbar from '../../components/Navbar/Navbar'

//import MyListing from "../../components/MyListing/index"
import ListingContainer from '../../components/ListingContainer/index'
import './style.css'


const Dashboard = () => (
  <div className="row">
    <Navbar />
    <div className="col-xl-8">
      <ProfileCard />
    </div>
    <div className="col-xl-8">
      <ListingContainer />
    </div>
  </div>
);

export default Dashboard;