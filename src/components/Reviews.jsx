import { useEffect, useState } from "react";
import { getReviews } from "../api";
import Gamecard from "./Gamecard";


const Reviews = ({chosenCategory}) => {
  const [Loading, setLoading] = useState(true);
  const [gameReviews, setGamereviews] = useState([]);
  useEffect(() => {
    getReviews().then((result) => {
      setGamereviews(result.data.reviews);
      setLoading(false);
    });
  }, []);

  if (Loading) return <p>Loading....</p>;
  if (chosenCategory !== undefined){
    return (
    <div className="reviews">
      <ol className="reviewList">
        {gameReviews.map((game) => {

          if (game.category === chosenCategory) {
            const voteMessage =
              game.votes === 1 ? "1 vote" : `${game.votes} votes`;
  
            const commentMessage =
              Number(game.comment_count) === 1
                ? "1 comment"
                : `${game.comment_count} comments`;
  
            return (
              <Gamecard
                game={game}
                voteMessage={voteMessage}
                commentMessage={commentMessage}
                key={game.review_id}
              ></Gamecard>
            );
          }
          }
        )}
      </ol>
    </div>
  );
  }

  return (
    <div className="reviews">
      <ol className="reviewList">
        {gameReviews.map((game) => {
          const voteMessage =
            game.votes === 1 ? "1 vote" : `${game.votes} votes`;

          const commentMessage =
            Number(game.comment_count) === 1
              ? "1 comment"
              : `${game.comment_count} comments`;

          return (
            <Gamecard
              game={game}
              voteMessage={voteMessage}
              commentMessage={commentMessage}
              key={game.review_id}
            ></Gamecard>
          );
        })}
      </ol>
    </div>
  );
};

export default Reviews;
