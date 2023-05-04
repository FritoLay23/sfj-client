import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <nav>
      <div className="container-navbar-all">
        <div>
          <Link to="/" className="link-nav">
            <h3>History 🌎</h3>
          </Link>
        </div>
        <ul className="list-navbar">
          <li>
            <Link to="/Inicio" className="link-nav">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-nav">
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="/branch" className="link-nav">
              Algo
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/login" className="link-nav login-nav">
        Login
      </Link>
      <button
        className="link-nav login-nav"
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
