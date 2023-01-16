import "./App.css";
import Header from "./components/Header";
import DisplayBody from "./components/DisplayBody";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import IndividualReview from "./components/IndividualReview";
import Categories from "./components/Categories";
import CategoryReviews from "./components/CategoryReviews";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  return (
    <div className="App">
      <Header
        header="The many reviews of NC's games"
        categories={categories}
        setCategories = {setCategories}
      ></Header>
      <br></br>
      <Routes>
        <Route path="/" element={<DisplayBody />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route
          path="/categories"
          element={
            <Categories categories={categories} setCategories={setCategories} />
          }
        ></Route>
        <Route
          path="/categories/:category"
          element={<CategoryReviews />}
        ></Route>
        <Route
          path="/reviews/:review_id"
          element={<IndividualReview />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
