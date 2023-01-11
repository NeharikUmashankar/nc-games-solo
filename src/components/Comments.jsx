import { useEffect, useState } from "react";
import { getComments } from "../api";

const Comments = ({ propsID }) => {
  const [comments, setComments] = useState(undefined);
  const [commentLoad, setCommentLoad] = useState(true);

  useEffect(() => {
    setCommentLoad(true);
    getComments(propsID).then((result) => {
      setComments(result.data.comments);
      setCommentLoad(false);
    });
  }, [propsID]);

  if (commentLoad) return <p>Comments loading, please wait....</p>;

  if (Array.isArray(comments)) {
    if (comments.length === 0) {
      return <p>No comments</p>;
    } else {
      return (
        <article className="comments">
          {comments.map((comment) => {
            return (
              <article className="comment" key={comment.comment_id}>
                <p className="commentAuthor">{comment.author}:</p>
                <p>{comment.body}</p>
                <p className="voteCount">Votes: {comment.votes}</p>
                <br></br>
              </article>
            );
          })}
        </article>
      );
    }
  }
};

export default Comments;
