import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/Sign-In/signIn';
import ViewAccount from './Pages/View-Account/viewAccount';
import PostLease from './Pages/Post-Listing/postLease';
import SearchListings from './Pages/Search-Listings/searchListings';

// import firebase from "../src/Auth/Firebase.config.js";

function App() {

  // const [authUser, setAuthUser] = useState(null);

  // useEffect(()=>{
  //   firebase.auth().onAuthStateChanged(user=>{
  //     setAuthUser(user);
  //   });
  // },[]);

  return (
    <Router>
      <Routes>
        <Route path="/Sign-Up" element={<SignIn/>}/>
        <Route path="/Log-In" exact element={<SignIn />} />
        <Route path='/Account' element={<ViewAccount/>} />
        <Route path='/Post-Lease' element={<PostLease/>}/>
        <Route path='/Search' element={<SearchListings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
