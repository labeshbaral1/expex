import { SIGNUP_USER } from "./types";
import axios from "axios";

export const signupUser = (email, password) => {
  axios
    .post("http://localhost:3001/register", { email, password })
    .then((resposne) => {
      console.log(resposne.data);
    });
};
