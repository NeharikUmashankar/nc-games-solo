import { useSearchParams } from "react-router-dom";

const ReviewSorter = ({ sortParameter, setSortParameter }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
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
        <input type="submit" value="Sort" onSubmit={handleFormSubmit}></input>
      </form>
    </article>
  );
};

export default ReviewSorter;
