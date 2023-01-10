import Reviews from "./Reviews";
import { Routes, Route } from "react-router-dom";


const Display = () => {
  return (
    <div>
      <Routes>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      </Routes>
    </div>
  );
};

export default Display;
