import { useEffect, useState } from "react";
import { getReviews } from "../api";

const Reviews = () => {
  const [gameReviews, setGamereviews] = useState([]);
  useEffect(() => {
    getReviews().then((result) => {
      setGamereviews(result.data.reviews);
    });
  }, []);
  console.log(gameReviews)

  return (
    <div>
      <ol>
        {gameReviews.map((game) => {
          const voteMessage =
            game.votes === 1 ? "1 vote" : `${game.votes} votes`;

          const commentMessage =
            Number(game.comment_count) === 1
              ? "1 comment"
              : `${game.comment_count} comments`;

          return (
            <li>
              <h4>{game.title}</h4>
              Category: {game.category}
              <br></br>
              <br></br>
              Est. {game.created_at.split("-").at(1)}/
              {game.created_at.split("-").at(0)}
              <br></br>
              <img src={game.review_img_url} className="gameImage"></img>
              <br></br>
              Designed by {game.designer}.<br></br>
              <br></br>
              {voteMessage} and {commentMessage}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Reviews;
