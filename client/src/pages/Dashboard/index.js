import React from "react";
import ProfileCard from "../../components/ProfileCard/index";
import Navbar from '../../components/Navbar/Navbar'

//import MyListing from "../../components/MyListing/index"
import ListingContainer from '../../components/ListingContainer/index'
import './style.css'


const Dashboard = () => (
  <div className='container'>

  <Navbar />
  <div className="row">
    <div className="col-xl-6">
      <ProfileCard />
    </div>
    <div className="col-xl-6">
      <ListingContainer />
    </div>
  </div>
  </div>
);

export default Dashboard;