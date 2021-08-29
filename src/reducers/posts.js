import { FETCH, CREATE, LIKE } from "../constant/postActionTypes";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};

export default postReducer;
