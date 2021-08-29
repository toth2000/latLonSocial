import * as api from "../api/auth";
import { AUTH, LOGOUT } from "../constant/authActionTypes";

export const signIn =
  ({ email, password }, history) =>
  async (dispatch) => {
    try {
      const { data } = await api.signIn({ email, password });
      dispatch({ type: AUTH, payload: data });
      history.push("/");
    } catch (error) {
      console.log("Sign In action", error.response);
      alert(error?.response?.data?.message);
    }
  };

export const signUp =
  ({ name, email, password, confirmPassword }, history) =>
  async (dispatch) => {
    try {
      const { data } = await api.signUp({
        name,
        email,
        password,
        confirmPassword,
      });
      dispatch({ type: AUTH, payload: data });
      history.push("/");
    } catch (error) {
      console.log("Sign Up action", error.response);
      alert(error?.response?.data?.message);
    }
  };

export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log("Log Out Action", error);
  }
};
