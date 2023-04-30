import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) => {
  return axios.post("/auth/login", {
    email,
    password,
  });
};

export const profileRequest = async () => {
  return await axios.get("/auth");
};

export const gamesRequest = async () => {
  return await axios.get("/games");
};
