import React, {useState, useEffect} from "react";
import firebase from "../../Auth/Firebase.config.js";
import "./Header.css";

function Header() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        //User is signed in
        setUser(user);
      }
      else{
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="app-header">
      <header>
        {user ? (
          <div>
            <h1 className="header-logo">openLease</h1>
            <nav>
            <ul>
              <li>
                <a className="LinkOne" href="/Listings">
                  View Leases{" "}
                </a>
              </li>
              <li>
                <a className="LinkTwo" href="/Post-Lease">
                  Post Lease{" "}
                </a>
              </li>
              <li>
                <a className="LinkThree" href="/Account">
                  Account{" "}
                </a>
              </li>
              <li>
                <a className="LinkFour" href="/Sign-Out">
                  Sign Out{" "}
                </a>
              </li>
            </ul>
            </nav>
            
          </div>
        ) : (
          <div>
            <h1 className="header-logo">openLease</h1>
            <nav>
            <ul>
              <li>
                <a className="LinkOne" href="/Create-account">
                  Create Account{" "}
                </a>
              </li>
              <li>
                <a className="LinkTwo" href="/Sign-in">
                  Sign In{" "}
                </a>
              </li>
            </ul>
            </nav>
            
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
