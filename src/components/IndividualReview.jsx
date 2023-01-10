import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../api";
import { Link } from "react-router-dom";

const IndividualReview = () => {
  const { review_id } = useParams();
  const [singleReviewLoad, setSingleReviewLoad] = useState(true);
  const [singleReview, setSinglereview] = useState(undefined);

  useEffect(() => {
    setSingleReviewLoad(true);
    getSingleReview(review_id).then((info) => {
      setSinglereview(info.data.review);
      setSingleReviewLoad(false);
    });
  }, [review_id]);

  if (singleReviewLoad) return <p>Review loading....</p>;

  if (singleReview !== undefined) {
    const voteMessage =
      singleReview.votes === 1 ? "1 vote" : `${singleReview.votes} votes`;

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
        <Link to={`/reviews/${review_id}/comments`}>
          <p>View comments</p>
        </Link>
      </div>
    );
  }
};

export default IndividualReview;
