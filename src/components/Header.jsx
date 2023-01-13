import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "../api";

const Header = ({ header, categories, setCategories }) => {

  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

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
          <h4>View reviews by category:</h4>
          {categories.map((category) => {
            return (
              <Link to={`/categories/${category.slug}`} key = {category.slug}>
                <p>{category.slug}</p>
              </Link>
            );
          })}
        </nav>
     
    </div>
  );
};

export default Header;
