import { useState } from "react";
import { usersRequestD } from "../api/api";

const UsersDel = ({ value }: any) => {
  const [id, setID] = useState("0");

  const handleInputChange = async (e: any) => {
    const { value } = e.target;
    setID(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (id === "") {
      alert("Ingrese un ID");
      return;
    }
    const resUsersD = await usersRequestD(id);
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Usuario</h1>
      <form action="" method="DELETE" className="form_gamesDel">
        <div className="comp_GamesDel">
          <label htmlFor="">ID:</label>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={id}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="button_formGamesDel"
          onClick={handleSubmit}
        >
          {value}
        </button>
      </form>
    </div>
  );
};

export default UsersDel;
