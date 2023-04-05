import React, { useState, useEffect } from "react";
import firebase from "../../Auth/Firebase.config.js";

//components
import Header from "../../Components/Header/Header";
import NewAccount from "../../Components/Inputs/Create-Account/newAccount";

function SignIn() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //User is signed in
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <Header />
          <h1>Welcome,</h1>
          
        </div>
      ) : (
        <div>
          <Header />
          <NewAccount />
        </div>
      )}
    </div>
  );
}

export default SignIn;
