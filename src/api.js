import axios from "axios";

const mainAPI = axios.create({
  baseURL: "https://ncgamessoloproject.onrender.com/api",
});

export const getReviews = () => {
  return mainAPI.get("/reviews").then((info) => {
    return info;
  });
};

export const getSingleReview = (ID) => {
  return mainAPI.get(`/reviews/${ID}`).then((info) => {
    return info;
  });
};

export const getComments = (ID) => {
  return mainAPI.get(`/reviews/${ID}/comments`).then((info) => {
    return info;
  });
};

export const patchVotes = (count, review_id) => {
  const patchBody = {
    inc_votes: count,
  };
  return mainAPI.patch(`/reviews/${review_id}`, patchBody).then((result) => {
    return result;
  });
};

export const postComment = (text, review_id) => {
  const commentBody = {
    username: "cooljmessy",
    body: text,
  };
  return mainAPI
    .post(`/reviews/${review_id}/comments`, commentBody)
    .then((result) => {
      return result;
    });
};

export const getCategories = () => {
  return mainAPI.get("/categories").then((info) => {
    return info;
  });
};

export const getSortedReviews = (body) => {
  return mainAPI
    .get("/reviews", {
      params: body,
    })
    .then((info) => {
      
      return info.data.reviews;
    });
};

// Create a function that can see whether different sort/order params are passed, and gives reviews accordingly
