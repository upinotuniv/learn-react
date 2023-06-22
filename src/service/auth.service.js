import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      console.log("login", res);
      callback(true, res.data.token);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded.user;
};
