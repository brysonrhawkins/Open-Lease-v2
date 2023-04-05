import React, { useState } from "react";
import firebase from "../../../Auth/Firebase.config.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "./createListing.css";

function NewListing() {
  const [listingTitle, setListingTitle] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [listingLocation, setListingLocation] = useState("");
  const [listingPriceMo, setListingPriceMo] = useState("");
  const [imageList, setImageList] = useState([]);

  const db = firebase.firestore();

  const submit = (e) => {
    e.preventDefault();

    db.collection("Listings").add({
      title: listingTitle,
      desctiption: listingDescription,
      location: listingLocation,
      priceMo: listingPriceMo,
      images: imageList,
    });

    setListingTitle("");
    setListingDescription("");
    setListingLocation("");
    setListingPriceMo("");
    setImageList([]);

    toast.success('Lease Posted!')
  };



  return (
    <div className="listing-card">
      <ToastContainer/>
      <form className="listing-card-form">
        <div className="listing-card-title">
          <h2 className="listing-card-title-text">Create Post </h2>
        </div>
        <div className="listing-card-input-one">
          <input
            type="text"
            placeholder="Title"
            value={listingTitle}
            onChange={(e) => setListingTitle(e.target.value)}
          />
        </div>
        <div className="listing-card-input-two">
          <input
            type="text"
            class="description"
            placeholder="description"
            maxLength={50}
            size={50}
            value={listingDescription}
            onChange={(e) => setListingDescription(e.target.value)}
          />
        </div>
        <div className="listing-card-input-three">
          <input
            type="text"
            class="location"
            placeholder="location"
            maxLength={50}
            size={50}
            value={listingLocation}
            onChange={(e) => setListingLocation(e.target.value)}
          />
        </div>
        <div className="listing-card-input-four">
          <input
            type="text"
            placeholder="price (monthly)"
            maxLength={10}
            size={10}
            value={listingPriceMo}
            onChange={(e) => setListingPriceMo(e.target.value)}
          />
        </div>
        <div className="listing-card-input-five">
          <input
            type="file"
            placeholder="images"
            multiple
            value={imageList}
            onChange={(e) => setImageList(e.target.value)}
          />
        </div>
        <div className="listing-card-submit-button">
          <button onClick={submit}>Post Lease</button>
        </div>
      </form>
    </div>
  );
}

export default NewListing;
