import { useEffect, useState } from "react";
import { getReviews } from "../api";
import Gamecard from "./Gamecard";

const Reviews = () => {
  const [Loading, setLoading] = useState(true);
  const [gameReviews, setGamereviews] = useState([]);
  useEffect(() => {
    getReviews().then((result) => {
      setGamereviews(result.data.reviews);
      setLoading(false);
    });
  }, []);

  // if loading return load message (before main code)

  if (!Loading) {
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
              <Gamecard
                game={game}
                voteMessage={voteMessage}
                commentMessage={commentMessage}
              ></Gamecard>
            );
          })}
        </ol>
      </div>
    );
  } else {
    return <p>Loading, please wait...</p>;
  }
};

export default Reviews;
