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

    const auth = { user, password };

    const reslogin = await loginRequest(auth);
    setToken(reslogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.user);

    console.log(resProfile.data);

    navigate("/auth");
  };

  return (
    <form onSubmit={handleSubmit}>
          <div className="login-div">
      <div className="logo">
        <img src="mapa.png" alt="" />
      </div>
      <div className="title">History🌍</div>

      <div className="fields">
        <div className="username">
<i className="fa fa-user"></i>
          <input type="username" className="user-input" placeholder="👤 username" /></div>
        <div className="password"><i className="fa fa-lock"></i> <input type="password" className="pass-input" placeholder="🔑 password" /></div>
      </div>
      <button className="signin-button">Login</button>
      <div className="link">
        <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
    </form>
  );
};

export default Login;
