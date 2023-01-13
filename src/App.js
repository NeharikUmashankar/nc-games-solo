import "./App.css";
import Header from "./components/Header";
import DisplayBody from "./components/DisplayBody";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import IndividualReview from "./components/IndividualReview";
import Categories from "./components/Categories";
import CategoryReviews from "./components/CategoryReviews";

function App() {
  return (
    <div className="App">
      <Header header="The many reviews of NC's games"></Header>
      <Routes>
        <Route path="/" element={<DisplayBody />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/categories/:category" element={<CategoryReviews />}></Route>
        <Route
          path="/reviews/:review_id"
          element={<IndividualReview />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
