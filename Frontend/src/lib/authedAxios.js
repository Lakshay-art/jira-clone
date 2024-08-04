import axios from "axios";
import { jwtDecode } from "jwt-decode";

// import { auth } from "../../firebase";
// import { useAuth } from "../contexts/authContext";

const refreshToken = async (refreshToken) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/users/refresh`,
      {
        token: refreshToken,
      }
    );
    return res.data;
  } catch (error) {}
};

const getAuthedAxios = ({ accessToken: token, refreshToken: refresh }) => {
  const authedAxios = axios.create({
    baseURL: "",
  });
  let accessToken = token;
  authedAxios.interceptors.request.use(
    async (config) => {
      if (true) {
        // accessToken = await auth.currentUser?.getIdToken();
      }
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        console.log("new access built");
        // console.log(access);
        accessToken = await refreshToken(refresh).accessToken;
      }
      //  config.headers["authorization"]="Bearer "+ data;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return authedAxios;
};

export default getAuthedAxios;
