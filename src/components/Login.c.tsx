import React from "react";
import { loginRequest, profileRequest } from "../api/api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { Input, FormGroup, Label, Button} from "reactstrap";
import { FiUser } from "react-icons/fi";


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
      <div className="title">SFJ</div>
      <div className="fields">
        <div className="username">
        <FormGroup floating>
          <Input className="login-input"/>
          <Label>Usuario</Label>
        </FormGroup>
        </div>
        <FormGroup floating>
        <Input type="password" className="login-input"/>
        <Label>Contraseña</Label>
        </FormGroup>
      </div>
      <Button className="signin-button">Login</Button>
    </div>
    </form>
  );
};

export default Login;
