import { Link } from "react-router-dom";

const Header = ({ header }) => {
  return (
    <div className="header">
    <Link to={"/"} >
      {" "}
      <h1 >{header}</h1>
      <nav>
      <Link to={"/reviews"}>See all reviews</Link>
    </nav>
    </Link>
    </div>
  );
};

export default Header;
