import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const Navbar: React.FC = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  return (
    <nav>
      <div className="container-navbar-all">
        <div>
          <Link to="/" className="link-nav">
            <h3>SFJ</h3>
          </Link>
        </div>
        <ul className="list-navbar">
          {/*           <li>
            <Link to="/about" className="link-nav">
              Acerca de
            </Link>
          </li> */}
          {
            profile?.type === "admin"? (
              <>
              <li>
              <Link to="/games" className="link-nav">
                Games
              </Link>
            </li>
            <li>
              <Link to="/users" className="link-nav">
                Users
              </Link>
            </li>
            </>
            ) : <></>
          }
          {/*           <li>
            <Link to="/scores" className="link-nav">
              Scores
            </Link>
          </li> */}
          <li>
            <Link to="/branch" className="link-nav">
              Clasificaciones
            </Link>
          </li>
        </ul>
      </div>
      {isAuth ? (
        <Link
          to={"/login"}
          className="link-nav login-nav"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Link>
      ) : (
        <Link to="/login" className="link-nav login-nav">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
