import axios from "axios";
import { defaultBaseUrl } from "./endPoints";

let axiosInstance;

export function getAxios() {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: defaultBaseUrl,
      timeout: 10000,
    });
    axiosInstance.interceptors.request.use((config) => {
      const authToken = localStorage.getItem("authToken");
      console.log("********auth ", authToken);
      if (authToken) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }
      return config;
    });
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        if (err.response) {
          return Promise.reject(err.response.data);
        } else if (err.request) {
          return Promise.reject({
            message: "IP temporarily blocked!",
          });
        } else {
          return Promise.reject({ message: err.message });
        }
      }
    );
  }

  return axiosInstance;
}
