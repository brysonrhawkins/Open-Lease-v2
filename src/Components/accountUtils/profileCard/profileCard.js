import Icon from "@mdi/react";
import React from "react";
import './profileCard.css';
import {mdiPencilPlus} from '@mdi/js';


function ProfileCard(){
    return(
        <div className="profile-card">
            <div className="profile-card-header">
                <h3>bryson123</h3>
                <div className="profile-card-icon">
                <button><Icon className="icon" path={mdiPencilPlus} size={1} color={"white"}/></button>
                </div>
                
            </div>
            <div className="profile-card-quick-info">
                <div className="profile-card-image-container">
                    <img src="/Users/Hawkins/coding/openLease/v3/openlease/public/logo192.png"></img>
                </div>
                <ul>
                    <li className="profile-card-quick-info-list-item">Listings: 10</li>
                    <li className="profile-card-quick-info-list-item">Messages: 100</li>
                </ul>
            </div>
            <div className="profile-card-personal-info">
                <h3 className="profile-card-personal-username">Bryson Hawkins</h3>
                <h5 className="profile-card-personal-profession">Software Engineer</h5>
                <h5 className="profile-card-personal-profession">American Fork, Utah</h5>
                <p className="profile-card-personal-description">This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. </p>
            </div>
        </div>
    )
}

export default ProfileCard