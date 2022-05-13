import CommentSection from "./CommentSection";
import { useState } from "react";

function VideoDetails({ title, views, origin, upvotes, downvotes, comments }) {
  const [hide, sethide] = useState(false);
  const classshow = hide ? "none" : "block";
  function handleComments() {
    sethide(!hide);
  }

  const comment = comments.map((com) => (
    <CommentSection
      user={com.user}
      id={com.id}
      commentTo={com.comment}
      thisClass={classshow}
    />
  ));

  const [toUpvote, settoUpvote] = useState(views);
  const [toDown, settoDown] = useState(downvotes);
  function handleUpVotes() {
    settoUpvote((toUpvote) => toUpvote + 1);
  }

  function handleDownvotes() {
    settoDown((toDown) => toDown + 1);
  }

  return (
    <>
      <h2>{title}</h2>
      <div className="info">
        <span>
          {views} views | premiered {origin}
        </span>

        <div>
          <button className="btn" onClick={handleUpVotes}>
            &#x1F44D; {toUpvote}
          </button>
          <button className="btn" onClick={handleDownvotes}>
            &#x1F44E; {toDown}
          </button>
        </div>
      </div>
      <hr />
      <button onClick={handleComments}>
        {hide ? "Show Comments" : "Hide Comments"}
      </button>
      <>{comment}</>
    </>
  );
}

export default VideoDetails;
