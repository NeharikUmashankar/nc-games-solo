import axios from "axios";

const mainAPI = axios.create({
  baseURL: "https://ncgamessoloproject.onrender.com/api",
});

export const getReviews = () => {
  return mainAPI.get("/reviews").then((info) => {
    return info;
  });
};
