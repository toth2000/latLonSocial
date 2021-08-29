import { FETCH, CREATE, LIKE } from "../constant/postActionTypes";
import * as api from "../api/posts";

export const getPost = (location) => async (dispatch) => {
  try {
    const { data } = await api.getPosts(location.lat, location.lon);
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log("Post action getPost", error);
    alert(error?.response?.data?.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("Post action createPost", error);
    alert(error?.response?.data?.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log("Post action likePost", error);
    alert(error?.response?.data?.message);
  }
};
