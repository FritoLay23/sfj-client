import React from "react";
import { loginRequest, profileRequest } from "../api/api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const reslogin = await loginRequest(user, password);
    setToken(reslogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.user);

    console.log(resProfile.data);

    navigate("/auth");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
};

export default Login;
