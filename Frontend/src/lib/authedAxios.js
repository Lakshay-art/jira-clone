import axios from "axios";
// import { auth } from "../../firebase";
// import { useAuth } from "../contexts/authContext";

const getAuthedAxios = (token) => {
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
