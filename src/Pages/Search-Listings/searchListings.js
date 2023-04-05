import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar.js"
import CreateQuery from "../../Components/Inputs/Query-Listing/queryListings";


function SearchListings(){
    return(
        <div>
        <Sidebar/>
        <CreateQuery/>
        </div>
        
    )
}

export default SearchListings