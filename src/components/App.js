import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
function App() {
  console.log("Here's your data:", video.comments);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src = {video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails
        views={video.views}
        title = {video.title}
        origin = {video.origin}
        upvotes = {video.upvotes}
        comments = {video.comments}
        downvotes = {video.downvotes}
      />
    </div>
  );
}

export default App;