import React from "react";
import ProfileCard from "../../components/ProfileCard/index";
import Navbar from '../../components/Navbar/Navbar'

import MyListing from "../../components/MyListing/index"
import './style.css'


const Dashboard = () => (
  <div>

  <Navbar />
  <div className="row">
    <div className="dashTile col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <ProfileCard />
    </div>
    <div id="favorites" className="dashTile col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
      <MyListing />
    </div>
  </div>
  </div>
);

export default Dashboard;