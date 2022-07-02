import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import { useEffect } from "react";
import Comments from "../CommentsPage/Comments";

const VideoPage = (props) => {
    const {videoId} = useParams()
    const [relatedVideo, setRelatedVideo] = useState([])
    const [allComments, setAllComments] = useState([])

    useEffect(()=>{
        suggestVideos();
    }, [videoId]);


    useEffect(()=>{
        getAllComments();
    }, [])
 
async function suggestVideos(){
    let response = await axios.get("https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&key=AIzaSyDdJDlxnFBHyHQDgcg6g2L1ZlX-kMhv4jE&relatedToVideoId=21oQ4X2NxIs");
    setRelatedVideo(response.data.items)
    console.log(response.data)
}
async function getAllComments(){
    let response = await axios.get("http://127.0.0.1:8000/comments/")
    setAllComments(response.data.items)
    console.log(response.data)
}


    const url = `https://www.youtube.com/embed/${videoId}`

    return ( <div>
        <div>
         <iframe id="ytplayer" type="text/html" width="640" height="360"
         src={url}
          frameBorder="0"></iframe>
          
    </div>
    <RelatedVideos videosProps={relatedVideo}/>
    {console.log('Results in render:' , relatedVideo)}
    <Comments allCommentsProps={allComments} />
    {console.log('Comments in render: ', allComments)}
    
    </div> );
}
 
export default VideoPage;


//move iframe here
