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
