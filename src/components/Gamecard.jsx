import { Link } from "react-router-dom";

const Gamecard = ({ game, voteMessage, commentMessage }) => {
  return (
    <nav>
    <Link to={`/reviews/${game.review_id}`}>
      <section>
        <li className="gameCard">
          <h4>{game.title}</h4>
          Category: {game.category}
          <br></br>
          <br></br>
          Est. {game.created_at.split("-").at(1)}/
          {game.created_at.split("-").at(0)}
          <br></br>
          <img src={game.review_img_url} className="gameImage" alt="Game"></img>
          <br></br>
          Designed by {game.designer}.<br></br>
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
