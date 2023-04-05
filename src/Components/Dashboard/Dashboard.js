import React from "react";

import "./Dashboard.css";
import ProfileCard from "../accountUtils/profileCard/profileCard";
import Sidebar from "../Sidebar/sidebar";

const mockData = {
  first: "Bryson",
  last: "Hawkins",
  city: "American Fork",
  zip: 84003,
  profilePhoto: "./image",
  messages: [
    { message: "Hello id like to view the property", sender: "Bob" },
    { message: "Hello id like to view the property", sender: "Bob" },
  ],
  listings: [
    {
      title: "House",
      description: "This is a description",
      location: "",
      price: 1200,
      poster: "Bob",
    },
    { message: "Hello id like to view the property", sender: "Bob" },
  ],
};

function Dashbaord() {
  return (
    <div className="user-dashboard">
      <Sidebar />
      <div className="center-card">
        <div className="top-carosel-menu">
          <button className="top-carosel-select">Your Posts</button>
          <button className="top-carosel-select">Recently Viewed</button>
        </div>
      </div>
      <div className="center-bottom-card">
        <div className="popular-listings">
          <h1>Popular Local Listings</h1>
        </div>
      </div>
      <div className="right-card">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Dashbaord;
