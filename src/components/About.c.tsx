import React from "react";
import { Link } from "react-router-dom";

const Aboutc = () => {
  return (
<section className="about">
      <div className="about__header">
        <h2 className="about__title">Sobre nosotros</h2>
      </div>
      <div className="about__content">
        <p className="about__description">¡Bienvenido a nuestra página de juegos! Disfruta de una amplia
            selección de juegos gratuitos, desde clásicos hasta los más
            recientes. Diviértete solo o en compañía de tus amigos o maestro, ¡y
            compite por la mejor puntuación! </p>
        <br />
        <p className="about__description">Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por la tecnología. Trabajamos en estrecha colaboración con nuestros clientes para asegurarnos de que entregamos soluciones que satisfagan sus necesidades y superen sus expectativas.</p>
      </div>
      <div className="about__footer">
        <h3 className="about__subtitle">Nuestro equipo</h3>
        <ul className="about__team">
          <li className="about__team-member">
            <h4 className="about__team-name">Alex Soriano (Lider)</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          <br />
          <li className="about__team-member">
            <h4 className="about__team-name">Robinson Novo</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          <br />
          <li className="about__team-member">
            <h4 className="about__team-name">Gregory Cuevas</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          <br />
          <li className="about__team-member">
            <h4 className="about__team-name">Jonathan Valdez</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          <br />
          <li className="about__team-member">
            <h4 className="about__team-name">Jorge Suarez</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          <br />
          <li className="about__team-member">
            <h4 className="about__team-name">Jean Marcos</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          <br />
          <li className="about__team-member">
            <h4 className="about__team-name">Niugeny Justo</h4>
            <p className="about__team-position">Desarrollador web</p>
          </li>
          
        </ul>
      </div>
    </section>
  );
}
























    {/*<div className="we-are-block">
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
  </div>*/}
export default Aboutc;
