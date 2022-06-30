//
import { Link, useParams } from "react-router-dom";
// [selectedVideoId, setSelectedVideoId] = useState('')

const Video = (props) => {
    const {videoId} = useParams()



    return ( <div>
        <div>{videoId}</div>
       
        <div>
         <iframe id="ytplayer" type="text/html" width="640" height="360"
         src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameBorder="0"></iframe>
    </div>
    </div> );
}
 
export default Video;


//move iframe here
