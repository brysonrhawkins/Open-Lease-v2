import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import firebase from "../../Auth/Firebase.config.js";
import 'firebase/auth';
import {mdiEye, mdiPencil, mdiMessage, mdiAccount, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";

function Sidebar() {

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(()=>{
        toast.success('User signed out')
        console.log('User signed out')
      })
      .catch((error)=>{
        console.error(error);
      });
  };

  return (
    <div className="left-card">
      <ToastContainer/>
      <ul className="left-card-list">
        <h2>OpenLease</h2>
        <button className="left-card-list-button-one">
          <Icon className="icon" path={mdiEye} size={1} color={"white"} />
          <a href="/Search" >Find a Lease</a>
        </button>
        <button className="left-card-list-button-two">
          <Icon className="icon" path={mdiPencil} size={1} color={"white"} />
          <a href="/Post-Lease" >Post a Lease</a>
        </button>
        <button className="left-card-list-button-three">
          <Icon className="icon" path={mdiMessage} size={1} color={"white"} />
          <a href="/Messages" >Messages</a>
        </button>
        <button className="left-card-list-button-four">
          <Icon className="icon" path={mdiAccount} size={1} color={"white"} />
          <a href="/Account" >Account</a>
        </button>
        <button className="left-card-list-button-five" onClick={handleSignOut}>
          <Icon className="icon" path={mdiLogout} size={1} color={"white"} />
          <a>Sign Out</a>
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
