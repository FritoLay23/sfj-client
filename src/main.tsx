import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//scss
import "./styles/Navbar.scss";
import "./styles/Footer.scss";
import "./styles/Index.scss";
import "./styles/Game.scss";
import "./styles/About.scss";
import "./styles/Slider.scss";
import "./styles/Login.scss";
import "./styles/Inicio.scss";
import "./styles/Branch.scss";
//scss

const Render = () => {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};
Render();
