This project is a full stack project using React as a front-end and firebase as a back-end.

To navigate:
All code takes place in the src folder, I only made one small change to the package.json npm start command.
SRC> Auth is just my firebase initialization and exports
SRC> Components are where all the components and operations are taking place
SRC> Pages are the final render locations
SRC> App.js is my Router location for the Pages folder
SRC> Index.js renders it all :D

users can:

//Authorization Accounts:
    -Create Accounts with email and password (using firebaseui) ^ with success toast and console.log error handling.

    -Sign Out of newly created accounts by a sidebar button press ^ with success toast and console.log error handling.

    -Every Account has data storage via firestore, where you can find your listings and your profile.

//CRUD application:
  /C
    -Users can create listings that store: Title, Location, Price, Description, and an array of images.
  /R
    -Users can search listings via search paramaters or exact text. 
  /U
    -Those who posted listings can pull them up again and modify them
  /D
    -All queries are displayed on a bottom menu UI.


--Please Note:--
    This app is fully developed by Bryson Hawkins, using public free react libraries, and this is still largely a work in progress. All functionality works, but the CSS is ugly.

