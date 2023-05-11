import React from "react";
import { loginRequest, profileRequest } from "../api/api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { Input, FormGroup, Label, Button} from "reactstrap";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  async function fetchData(auth: { user: string; password: string }) {
    try {
      const reslogin = await loginRequest(auth);
      return reslogin;
    } catch (error: any) {
      console.log(error.response.data.msg);
      return error.response.data.msg;
    }
  }
  
  function authFail(data: string ) {
    if (typeof data === "string") {
      const authFail = data;
      return authFail;
    }
  };

  let [errol, setErrol] = useState(undefined as string | undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const auth = { user, password };
    const reslogin = await fetchData(auth);

    setErrol(authFail(reslogin));

    setToken(reslogin?.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.user);

    navigate("/auth");
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="login-div">
      <div className="logo">
        <img src="mapa.png" alt="" />
      </div>
      <div className="title">SFJ</div>
      <p className="title-dina">{errol}</p>
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
      <div className="register">
        <p>¿No tienes una cuenta?</p>
        <Link to='/register' className="registerP">Haz clic aqui</Link>
      </div>
    </div>
    </form>
  );
};

export default Login;
