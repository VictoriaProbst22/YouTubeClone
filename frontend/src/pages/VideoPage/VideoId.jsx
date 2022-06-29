// <iframe id="ytplayer" type="text/html" width="640" height="360"
//   src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
//   frameborder="0"></iframe>


// M7lc1UVf-VE = Video Id. replace with state Variable of video Id in our search
// [selectedVideoId, setSelectedVideoId] = useState('')

const VideoId = (props) => {
    return ( <div>
        <div>
         <iframe id="ytplayer" type="text/html" width="640" height="360"
         src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameBorder="0"></iframe>
    </div>
    </div> );
}
 
export default VideoId;


//move iframe here
