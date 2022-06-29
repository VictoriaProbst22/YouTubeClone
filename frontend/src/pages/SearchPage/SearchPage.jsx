// set up axios  requests to fetch videos from the YOUTUBE DATA API based on a provided search string
import React from "react";


const SearchPage = (props) => {
    console.log(props.searchResults);
    

    return (
        <><table>
            <thead>
                <tr>
                    <th>Results</th>
                </tr>
            </thead>
        </table><tbody>
            {props.searchResults.map((item)=>{
                return(
                    <tr>
                     <td>{item.snippet.channelTitle}</td>
                    </tr>
                )
            })}
            </tbody></>
       
    );

}
export default SearchPage;

//So in our API Request URL for the YouTube API, there is a spot where we can pass in a search parameter. You have it currently set to cats .
// So essentially we need to take in a user input, capture it in a useState(), then use string 
//interpolation and pass down that SearchResult into our URL using string interpolation. 
//So when that get request runs, it will get all the videos out of the api related to that search term. 