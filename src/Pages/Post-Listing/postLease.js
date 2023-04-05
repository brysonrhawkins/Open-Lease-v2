import React from "react";
import NewListing from "../../Components/Inputs/Create-Listing/newListing";
import Sidebar from "../../Components/Sidebar/sidebar";

function PostLease(){
    return(
        <div>
            <Sidebar/>   
            <NewListing/>
        </div>
    )
}

export default PostLease;