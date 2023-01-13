// import categoryFinding function from api
import { getCategories } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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
            <nav>
              <section>
                <li className="gameCard">
                  <Link to={`/categories/${category.slug}`}>
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

  // useEffect to get the categories, use state to store it

  // use these to make a checkbox form

  // pass these values via searchParams....either via a larger state or some other way?
};

export default Categories;
