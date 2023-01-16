import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSortedReviews } from "../api";
import Reviews from "./Reviews";

const ReviewSorter = ({ gameReviews, setGamereviews }) => {
  const [searchParams, setSearchParams] = useSearchParams([]);

  useEffect(() => {
    const requestBody = {
      sort_by: searchParams.get("sort_by"),
      order: searchParams.get("order"),
    };

    getSortedReviews(requestBody).then((result) => {
      setGamereviews(result);
      console.log(Reviews)
    });
  }, []);

  return (
    <article className="form">
      Sort reviews by:
      <form>
        <input type="radio" name="sort_by" value="review_id"></input>
        <label> Review ID</label>
        <br></br>
        <input type="radio" name="sort_by" value="created_at"></input>
        <label> Date</label>
        <br></br>
        <input type="radio" name="sort_by" value="comment_count"></input>
        <label> Comment count</label>
        <br></br>
        <input type="radio" name="sort_by" value="votes"></input>
        <label> Number of votes</label>
        <br></br>
        <br></br>
        <br></br>
        Order by:
        <br></br>
        <input type="radio" name="order" value="ASC"></input>
        <label> Ascending</label>
        <br></br>
        <input type="radio" name="order" value="DESC"></input>
        <label> Descending</label>
        <br></br>
        <input type="submit" value="Sort"></input>
        <br></br>
      </form>
    </article>
  );
};

export default ReviewSorter;
