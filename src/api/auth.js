import axios from "axios";

import { apiUrl } from "../constant/url";

const url = `${apiUrl}/auth`;

export const signIn = ({ email, password }) => {
  return axios.post(`${url}/signIn`, { email, password });
};

export const signUp = ({ name, email, password, confirmPassword}) => {
  return axios.post(`${url}/signUp`, { name, email, password, confirmPassword });
};
