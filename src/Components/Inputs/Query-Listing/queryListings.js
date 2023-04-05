import React, { useState, useEffect } from "react";
import firebase from "../../../Auth/Firebase.config.js";
import '../Query-Listing/createQuery.css';

function CreateQuery() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const db = firebase.firestore();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("Listings")
      .where("location", "==", inputValue)
      .onSnapshot((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(documents);
      });
    return unsubscribe;
  }, [inputValue]);

  return (
    <div className="query-input-card">
      <form className="query-input-form">
        <h1 className="query-title-title">Search Available Leases</h1>
        <label className="query-label-location">Search by Location: </label>
        <input
          classname="query-input-location"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <div className="query-result-card">
        {" "}
        <h2 className="query-result-title">Database Search Results:</h2>
        <ul className="query-result-list">
          {data.map((item) => (
            <li className="query-result-item" key={item.id}>
              <h3 className="query-result-item-title">{item.title}</h3>
              <h5 className="query-result-item-quick-info">{item.priceMo} /mo, in {item.location}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreateQuery;
