import axios from "axios";
// import jw from "jwt-decode";
import { useAuth } from "../contexts/authContext";
import { jwtDecode } from "jwt-decode";

import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebaseInit";

const refreshToken = async (refreshToken) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/users/refresh`,
      {
        token: refreshToken,
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {}
};

const useAuthedAxios = async () => {
  let {
    user: { accessToken: token, refreshToken: refresh },
    isAuthenticated,
  } = useAuth();
  const navigate = useNavigate();
  const authedAxios = axios.create({
    baseURL: "",
  });
  if (!isAuthenticated) {
    // navigate("/login");
    return null;
  }
  //google
  if (isAuthenticated && !token) {
    token = await auth.currentUser?.getIdToken();
    authedAxios.interceptors.request.use(
      async (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.authtype = "google";
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  //jwt
  let accessToken = token;
  authedAxios.interceptors.request.use(
    async (config) => {
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        console.log("new access built");
        accessToken = (await refreshToken(refresh)).accessToken;
      }
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        config.headers.authtype = "jwt";
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return authedAxios;
};

export default useAuthedAxios;
