import Reviews from "./Reviews";
import { useParams } from "react-router-dom";

const CategoryReviews = () => {
  const { category } = useParams();

  return (
    <div>
      <p className="categoryTitle">Category: {category}</p>
      <Reviews chosenCategory = {category}></Reviews>
    </div>
  );
};

export default CategoryReviews;
