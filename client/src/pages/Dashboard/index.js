import React from "react";
import ProfileCard from "../../components/ProfileCard/index";
import Navbar from '../../components/Navbar/Navbar'

//import MyListing from "../../components/MyListing/index"
import './style.css'


const Dashboard = () => (
  <div>

  <Navbar />
  <div className="row">
    <div className="col-xl-5">
      <ProfileCard />
    </div>
  </div>
  </div>
);

export default Dashboard;