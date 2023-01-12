import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../api";

const Comments = ({ propsID }) => {
  let ID = undefined;
  const { review_id } = useParams();

  if (propsID !== undefined) {
    ID = propsID;
  } else {
    ID = review_id;
  }

  const [comments, setComments] = useState(undefined);
  const [commentLoad, setCommentLoad] = useState(true);

  useEffect(() => {
    setCommentLoad(true);
    getComments(ID).then((result) => {
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
        <article className="comments">
          {comments.map((comment) => {
            return (
              <article className="comment">
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

  return <p>Coming soon....</p>;
};

export default Comments;
