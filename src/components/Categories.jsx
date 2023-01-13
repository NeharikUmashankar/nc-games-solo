// import categoryFinding function from api
import { getCategories } from "../api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = ({categories, setCategories}) => {
  

  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <div>
      <ol className="reviewList">
        {categories.map((category) => {
          return (
            <nav key = {category.slug}>
              <section>
                <li className="gameCard" >
                  <Link to={`/categories/${category.slug}`} >
                    <h4>{category.slug}</h4>
                  </Link>
                  <br></br>
                  <p>{category.description}</p>
                </li>
              </section>
            </nav>
          );
        })}
      </ol>
    </div>
  );
};

export default Categories;
