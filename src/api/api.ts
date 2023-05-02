import axios from "../libs/axios";

export const loginRequest = async (auth: any) => {
  return axios.post("/auth/login", {
    auth,
  });
};

export const profileRequest = async () => {
  return await axios.get("/auth");
};

export const gamesRequest = async () => {
  return await axios.get("/games");
};
