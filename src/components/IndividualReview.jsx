import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../api";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { patchVotes } from "../api";

const IndividualReview = () => {
  const { review_id } = useParams();
  const [singleReviewLoad, setSingleReviewLoad] = useState(true);
  const [singleReview, setSinglereview] = useState(undefined);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setSingleReviewLoad(true);
    getSingleReview(review_id).then((info) => {
      setSinglereview(info.data.review);
      setVotes(info.data.review.votes);
      setSingleReviewLoad(false);
    });
  }, [review_id]);

  if (singleReviewLoad) return <p>Review loading....</p>;

  if (singleReview !== undefined) {
    const handleVote = (x) => {
      setVotes(votes + x);
      patchVotes(x, review_id).catch((err) => {
        setVotes(votes - x);
        setErr("An error has occurred, please try again.");
      });
    };

    const voteMessage =
      Math.abs(votes) === 1 ? `${votes} vote` : `${votes} votes`;

    if (err) return <p>{err}</p>;

    return (
      <div>
        <h2>{singleReview.title}</h2>
        <br></br>
        <h5>Category: {singleReview.category}</h5>
        <h5>
          Owned by {singleReview.owner}. Designed by {singleReview.designer}{" "}
        </h5>
        Est. {singleReview.created_at.split("-").at(1)}/
        {singleReview.created_at.split("-").at(0)}
        <br></br>
        <br></br>
        <img
          src={singleReview.review_img_url}
          className="singleReviewImage"
          alt="Single review"
        ></img>
        <p>{singleReview.review_body}</p>
        <br></br>
        <br></br>
        <h3>{voteMessage}</h3>
        <button
          onClick={() => {
            handleVote(1);
          }}
        >
          ⬆
        </button>{" "}
        <button
          onClick={() => {
            handleVote(-1);
          }}
        >
          ⬇
        </button>{" "}
        <Comments propsID={singleReview.review_id}></Comments>
      </div>
    );
  }
};

export default IndividualReview;
