import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../api";

const Comments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((result) => {
      setComments(result.data.comments);
    });
  });

  return <p>Coming soon....</p>;
};

export default Comments;
