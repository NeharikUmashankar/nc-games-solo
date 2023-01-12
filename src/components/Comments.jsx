import { useEffect, useState } from "react";
import { getComments, postComment } from "../api";

const Comments = ({ propsID }) => {
  const [comments, setComments] = useState(undefined); // the comments underneath a post
  const [commentLoad, setCommentLoad] = useState(true);
  const [comment, setComment] = useState(""); //Comment being typed in the comment bar
  const [newComment, setNewComment] = useState(""); // Comment generated after hitting submit
  const [commentError, setCommentError] = useState(null);
  const [newCommentLoad, setNewCommentLoad] = useState(false);

  useEffect(() => {
    setCommentLoad(true);
    getComments(propsID).then((result) => {
      setComments(result.data.comments);
      setCommentLoad(false);
    });
  }, [propsID]);

  const commentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewCommentLoad(true);
    setNewComment(comment);
    postComment(comment, propsID)
      .then((info) => {
        setComments([info.data.newComment, ...comments]);
        setNewCommentLoad(false);
      })
      .catch((err) => {
        setCommentError(
          "An error has occurred. Please refresh the page and try again."
        );
        setNewCommentLoad(false);
      });
  };

  if (commentLoad) return <p>Comments loading, please wait....</p>;
  if (newCommentLoad) return <p>Comment uploading, please wait....</p>;
  if (commentError) {
    return <p>An error has occurred. Please refresh the page and try again.</p>;
  }

  if (Array.isArray(comments)) {
    if (comments.length === 0) {
      return (
        <div>
          Be the first to comment:
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="newComment"
              name="newComment"
              onChange={commentChange}
            ></input>
            <input type="submit" value="Add comment"></input>
          </form>
        </div>
      );
    } else {
      return (
        <article className="singleReview">
          <form onSubmit={handleSubmit} className="">
            <input
              type="text"
              id="newComment"
              name="newComment"
              onChange={commentChange}
            ></input>
            <input type="submit" value="Add comment"></input>
          </form>
          <br></br>

          <article className="comments">
            {comments.map((comment) => {
              return (
                <article className="comment" key={comment.comment_id}>
                  <p className="commentAuthor">{comment.author}:</p>
                  <p>{comment.body}</p>
                  <p className="voteCount">
                    Votes: {comment.votes} <br></br>
                    {comment.created_at.split("T").at(0)}{" "}
                    {comment.created_at.split("T").at(1).substring(0, 5)}
                  </p>
                  <br></br>
                </article>
              );
            })}
          </article>
        </article>
      );
    }
  }
};

export default Comments;
