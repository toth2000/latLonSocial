import axios from "axios";

import { apiUrl } from "../constant/url";

const api = axios.create({ baseURL: apiUrl });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getPosts = (lat, lon) => {
  return api.get(`/posts/${lat}/${lon}`);
};

export const createPost = (post) => {
  return api.post("/posts", post);
};

export const likePost = (id) => {
  return api.patch(`/posts/${id}/likePost`);
};
