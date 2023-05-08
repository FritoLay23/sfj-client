import { usersRequestP, usersRequestPO } from "../api/api";
import { useState } from "react";

const UsersPA = ({ value }: any) => {
  const dataUsers = {
    id: "",
    type: "",
    name: "",
    lastname: "",
    user: "",
    password: "",
  };

  const [users, setUsers] = useState(dataUsers);

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setUsers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newUsers = {
      id: users.id,
      type: users.type,
      name: users.name,
      lastname: users.lastname,
      user: users.user,
      password: users.password,
    };

    if (value === "Ingresar") {
      const resUsersP = await usersRequestP(newUsers);
    } else {
      const resUsersPO = await usersRequestPO(newUsers);
    }
    setUsers(dataUsers);
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Usuarios</h1>
      <form action="" method="POST" className="form_games">
        {value === "Actualizar" ? (
          <div className="partFormGames">
            <label htmlFor="">ID: </label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={users.id}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <></>
        )}

        <div className="partFormGames">
          <label htmlFor="">Type: </label>
          <input
            type="text"
            name="type"
            placeholder="Tipo de juego"
            value={users.type}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Nombres: </label>
          <input
            type="text"
            name="name"
            placeholder="Nombres"
            value={users.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Apellidos: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Apellidos"
            value={users.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Usuario: </label>
          <input
            type="text"
            name="user"
            placeholder="Usuarios"
            value={users.user}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Contraseña: </label>
          <input
            type="text"
            name="password"
            placeholder="Contraseña"
            value={users.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="button_formGames"
          onClick={handleSubmit}
        >
          {value}
        </button>
      </form>
    </div>
  );
};

export default UsersPA;
