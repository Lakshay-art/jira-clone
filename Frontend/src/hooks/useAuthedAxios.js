import axios from "axios";
// import jw from "jwt-decode";
import { useAuth } from "../contexts/authContext";
import { jwtDecode } from "jwt-decode";
// import { auth } from "../../firebase";
// import { useAuth } from "../contexts/authContext";

const refreshToken = async (refreshToken) => {
  try {
    const res = await axios.post("http://localhost:8000/api/users/refresh", {
      token: refreshToken,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {}
};

const useAuthedAxios = () => {
  const {
    user: { accessToken: token, refreshToken: refresh },
  } = useAuth();
  const authedAxios = axios.create({
    baseURL: "",
  });
  let accessToken = token;
  authedAxios.interceptors.request.use(
    async (config) => {
      // const { user } = useAuth();
      // let accessToken = "";
      if (true) {
        // accessToken = await auth.currentUser?.getIdToken();
      }
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        console.log("new access built");
        // console.log(access);
        accessToken = (await refreshToken(refresh)).accessToken;
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

export default useAuthedAxios;
