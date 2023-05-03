import React from "react";
import { Link } from "react-router-dom";

const Aboutc = () => {
  return (
    <div className="we-are-block">
      <div id="about-us-section">
        <div className="about-us-image">
          <img
            src="/public/IMG/about-1.jpg"
            width="808"
            height="458"
            alt="Lobby Image"
          />
        </div>

        <div className="about-us-info">
          <h2>¿Quieres pasar un rato divertido?</h2>

          <p>
            ¡Bienvenido a nuestra página de juegos! Disfruta de una amplia
            selección de juegos gratuitos, desde clásicos hasta los más
            recientes. Diviértete solo o en compañía de tus amigos o maestro, ¡y
            compite por la mejor puntuación!
          </p>

          <a href="#" title="About Us Button" className="about_button">
            ABOUT US
          </a>
        </div>
      </div>

      <div id="history-section">
        <div className="history-image">
          <img
            src="/public/IMG/about-2.jpg"
            width="940"
            height="432"
            alt="Building Pic"
          />
        </div>

        <div className="history-info">
          <h2>¿Te gustan los juegos de habilidad?</h2>

          <p>
            En nuestra página de juegos encontrarás una gran variedad de juegos
            que pondrán a prueba tu destreza y tu ingenio.
          </p>

          <Link to="/branch" title="History Button">
            Jugar!!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutc;
