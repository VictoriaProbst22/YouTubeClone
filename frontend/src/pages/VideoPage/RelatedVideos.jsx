import React from "react";
import { Link } from "react-router-dom";
const RelatedVideos = (props) => {
    console.log(props.videosProps);

    
    return ( <div>
        <h3>
            <p>These Are Related Videos!</p>
            </h3>
        <div>
          {props.videosProps.map((item)=>{
            return(
                <ul>
                    <Link to={`video/${item.id.videoId}/`} >{item.snippet.channelTitle} </Link>
                </ul>
               
              
            )
          })}
        </div> 
        
    </div> 
     
    );
}
 
export default RelatedVideos;