import { Link } from "react-router-dom";

const Header = ({ header }) => {
  return (
    <Link to={"/"}>
      {" "}
      <h1>{header}</h1>
    </Link>
  );
};

export default Header;
