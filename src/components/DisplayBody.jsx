import { Link } from "react-router-dom";

const DisplayBody = () => {
  return (
    <div>
      <nav>
        <Link to={"/reviews"}>See all Reviews</Link>
      </nav>
    </div>
  );
};

export default DisplayBody;
