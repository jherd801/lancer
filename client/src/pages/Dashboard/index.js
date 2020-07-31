import React from "react";
import ProfileCard from "../../components/ProfileCard/index";
import MyListing from "../../components/Listing/index"

const Dashboard = () => (
  <div className="row">
    <div className="col-xl-8">
      <ProfileCard />
    </div>
    <div className="col-xl-8">
      <MyListing />
    </div>
  </div>
);

export default Dashboard;