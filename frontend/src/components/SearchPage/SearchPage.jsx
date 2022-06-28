// set up axios  requests to fetch videos from the YOUTUBE DATA API based on a provided search string
import React, { useState, useEffect } from "react";
import axios from "axios";


const SearchPage= () => {

    const[searchResults, setSearchResults] = useState([]);

    useEffect(()=> {
        const runSearch = async () => {
            try {
                let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyCg6SPiJnWlubOupiBPT59UntynLNthKPM")
                console.log(response.data)
                setSearchResults(response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        };
        runSearch();
    }, []);

    return (
         <div>
            <input type="text"></input>
            <button type="submit"> Search </button>
         </div> 
    );
}
 
export default SearchPage;