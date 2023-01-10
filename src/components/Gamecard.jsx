import { Link } from "react-router-dom";

const Gamecard = ({ game, voteMessage, commentMessage }) => {
  return (
    <nav>
      <Link to={`/reviews/${game.review_id}`}>
        <section>
          <li className="gameCard">
            <h4>{game.title}</h4>
            <img
              src={game.review_img_url}
              className="gameImage"
              alt="Game"
            ></img>
            <br></br>
            <br></br>
            {voteMessage} and {commentMessage}
            <br></br>
            <br></br>
            <br></br>
          </li>
          <br></br>
        </section>
      </Link>
    </nav>
  );
};

export default Gamecard;
