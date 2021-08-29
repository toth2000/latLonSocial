import { AUTH, LOGOUT } from "../constant/authActionTypes";

const authReducer = (state = { result: null, token: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        result: action.payload.result,
        token: action.payload.token,
      };

    case LOGOUT:
      localStorage.clear();
      return { ...state, result: null, token: null };

    default:
      return state;
  }
};

export default authReducer;
