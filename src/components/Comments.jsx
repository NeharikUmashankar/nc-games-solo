import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../api";

const Comments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState(undefined);
  const [commentLoad, setCommentLoad] = useState(true);

  useEffect(() => {
    setCommentLoad(true);
    getComments(review_id).then((result) => {
      setComments(result.data.comments);
      setCommentLoad(false);
    });
  }, []);

  if (commentLoad) return <p>Comments loading, please wait....</p>;

  if (Array.isArray(comments)) {
    if (comments.length === 0) {
      return <p>No comments</p>;
    } else {
      return (
        <div className="comments">
          {comments.map((comment) => {
            return (
              <div className="comment">
                <p className="commentAuthor">{comment.author}:</p>
                <p>{comment.body}</p>
                <p className="voteCount">Votes: {comment.votes}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return <p>Coming soon....</p>;
};

export default Comments;
