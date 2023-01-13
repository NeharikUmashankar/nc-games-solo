import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "../api";

const Header = ({ header, categories, setCategories }) => {
  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

  // Form in header that is generated via mapping the categories.
  //The form has a submit button. On submit, you capture the searchParams value
  // Either this value or the URL as a whole can be used to make the API call.

  return (
    <div className="header">
      <Link to={"/"}>
        {" "}
        <h1>{header}</h1>
      </Link>
      <nav>
        <Link to={"/reviews"}>See all reviews</Link>
        <br></br>
        <Link to={"/categories"}>See all categories</Link>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <h4>View reviews by category:</h4>
        {categories.map((category) => {
          return (
            <Link to={`/categories/${category.slug}`} key={category.slug}>
              <p>{category.slug}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
