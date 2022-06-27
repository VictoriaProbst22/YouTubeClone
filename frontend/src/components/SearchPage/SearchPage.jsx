// set up axios  requests to fetch videos from the YOUTUBE DATA API based on a provided search string
import React, { useState } from "react";
import axios from 'axios'
import { InvalidTokenError } from "jwt-decode";

const SearchPage = async () => {
    
    try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyCg6SPiJnWlubOupiBPT59UntynLNthKPM", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        setComments(response.data);
    } catch (error) {
        console.log(error.message);
    }




    return (  
        <div></div>
    );
};
 
export default SearchPage;