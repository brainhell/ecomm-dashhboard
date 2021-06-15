import React from "react";
import axios from "axios";

const API_URL = "Http://laravelapi.local";
function AuthService(name, password) {
  return axios.post(API_URL + "login", {
    name,
    password,
  });
}

export default AuthService;
