import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import { useEffect } from "react";

const VideoPage = (props) => {
    const {videoId} = useParams()
    const [relatedVideo, setRelatedVideo] = useState([])

    useEffect(()=>{
        suggestVideos();
    }, [videoId]);


async function suggestVideos(){
    let response = await axios.get("https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&key=AIzaSyDdJDlxnFBHyHQDgcg6g2L1ZlX-kMhv4jE&relatedToVideoId=21oQ4X2NxIs");
    setRelatedVideo(response.data.items)
    console.log(response.data)
}


    //useEffect to make related videos API Call , []} include part=snippet
    //save relatedVideo items response to state
    //pass related items from state into RelatedVideos component through props

    const url = `https://www.youtube.com/embed/${videoId}`

    return ( <div>
        <div>
         <iframe id="ytplayer" type="text/html" width="640" height="360"
         src={url}
          frameBorder="0"></iframe>
    </div>
    <RelatedVideos videosProps={relatedVideo}/>
    {console.log('Results in render:' , relatedVideo)}
    </div> );
}
 
export default VideoPage;


//move iframe here
