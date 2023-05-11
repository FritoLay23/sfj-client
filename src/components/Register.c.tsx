import React from "react";
import { usersRequestP, profileRequest } from "../api/api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { Input, FormGroup, Label, Button} from "reactstrap";
import { FiUser } from "react-icons/fi";
import { useState } from "react";


const Register = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  async function fetchData(auth: { user: string; password: string }) {
    try {
      const resregister = await usersRequestP(auth);
      return resregister;
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
    const type = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const name = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const lastname = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const user = (e.currentTarget.elements[3] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[4] as HTMLInputElement).value;


    const auth = { type, name, lastname, user, password };
    const resregister = await fetchData(auth);

    setErrol(authFail(resregister));

    setToken(resregister?.data.token);
    navigate("/users");
    const resProfile = await profileRequest();
    setProfile(resProfile.data.user);
  };

  return (
    <form onSubmit={handleSubmit} className="formlogReg">
    <div className="login-div">
      <div className="title">SFJ</div>
      <p className="title-dina">{errol}</p>
      <div className="logo">
        <img src="../../public/IMG/user.jpg" alt="" />
      </div>
      <div className="fields">
        <div className="username">
            <FormGroup floating>
              <Input className="login-input"/>
              <Label>Type</Label>
            </FormGroup>
        </div>
        <div className="username">
            <FormGroup floating>
              <Input className="login-input"/>
              <Label>Nombres</Label>
            </FormGroup>
        </div>
        <div className="username">
            <FormGroup floating>
              <Input className="login-input"/>
              <Label>Apellidos</Label>
            </FormGroup>
        </div>
        <div className="username">
            <FormGroup floating>
              <Input className="login-input"/>
              <Label>Usuario</Label>
            </FormGroup>
        </div>
        <div className="username">
            <FormGroup floating>
              <Input className="login-input"/>
              <Label>Contraseña</Label>
            </FormGroup>
        </div>
      </div>
      <Button className="signin-button">Register</Button>
    </div>
    </form>
  );
};

export default Register;
