import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "../api";

const Header = ({ header, categories, setCategories }) => {
  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

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
        <h4>Filter reviews by category:</h4>
        <div>
        {categories.map((category) => {
          return (
            <Link to={`/categories/${category.slug}`} key={category.slug}>
              <p className="category">{category.slug}</p>
            </Link>
          );
        })}
        </div>
      </nav>
    </div>
  );
};

export default Header;
