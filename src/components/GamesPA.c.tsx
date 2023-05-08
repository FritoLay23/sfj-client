import { gamesRequestP, gamesRequestPO } from "../api/api";
import { useState } from "react";

const GamesPA = ({ value }: any) => {
  const dataGames = {
    id: "",
    type: "",
    branch: "",
    title: "",
    description: "",
    question: "",
    image: "",
    answer: "",
    incorrect1: "",
    incorrect2: "",
    incorrect3: "",
    value: 0,
    updated: "",
  };

  const [games, setGames] = useState(dataGames);
  const [arrayQuestions, setArrayQuestions] = useState([{}]);

  const handleInputQuestion = async (e: any) => {
    const { name, value } = e.target;
    setGames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQuestion = async (e: any) => {
    e.preventDefault();

    const newQuestion = {
      question: games.question,
      image: games.image,
      answer: games.answer,
      options: [games.incorrect1, games.incorrect2, games.incorrect3],
      value: games.value,
    };

    setArrayQuestions((prevState) => [...prevState, newQuestion]);
  };

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setGames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const questionsArray = arrayQuestions.slice(1);

    const newGames = {
      id: games.id,
      type: games.type,
      branch: games.branch,
      title: games.title,
      description: games.description,
      questions: questionsArray,
      updated: new Date().toISOString(),
    };

    if (value === "Ingresar") {
      const resGamesP = await gamesRequestP(newGames);
    } else {
      const resGamesPO = await gamesRequestPO(newGames);
    }
    setGames(dataGames);
    setArrayQuestions([{}]);
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Juego</h1>
      <form action="" method="POST" className="form_games">
        <input
          type="file"
          name="image"
          value={games.image}
          onChange={handleInputChange}
        />

        {value === "Actualizar" ? (
          <div className="partFormGames">
            <label htmlFor="">ID: </label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={games.id}
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
            value={games.type}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Clasificacion: </label>
          <input
            type="text"
            name="branch"
            placeholder="Clasificación"
            value={games.branch}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Titulo: </label>
          <input
            type="text"
            name="title"
            placeholder="Titulo"
            value={games.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Descripción:</label>
          <textarea
            name="description"
            placeholder="Descripción"
            value={games.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/*-------------------------------PREGUNTAS--------------------------------------------*/}

        <div className="cont_questionForm">
          <div className="cont_questionFormIandC">
            <div className="partFormGamesQuestion">
              <label htmlFor="">Preguntas:</label>
              <input
                type="text"
                name="question"
                placeholder="Pregunta"
                value={games.question}
                onChange={handleInputQuestion}
              />
            </div>
            <div className="partFormGamesQuestion" id="incorrectAnswerGames">
              <label htmlFor="">Incorrectas:</label>
              <input
                type="text"
                name="incorrect1"
                placeholder="Incorrecta 1"
                value={games.incorrect1}
                onChange={handleInputQuestion}
              />
              <input
                type="text"
                name="incorrect2"
                placeholder="Incorrecta 2"
                value={games.incorrect2}
                onChange={handleInputQuestion}
              />
              <input
                type="text"
                name="incorrect3"
                placeholder="Incorrecta 3"
                value={games.incorrect3}
                onChange={handleInputQuestion}
              />
            </div>
            <div className="partFormGamesQuestion">
              <label htmlFor="">Respuesta: </label>
              <input
                type="text"
                name="answer"
                placeholder="Correcta"
                value={games.answer}
                onChange={handleInputQuestion}
              />
            </div>
          </div>
          <div className="cont_questionFormButton">
            <button
              type="submit"
              className="questionFormButton"
              onClick={handleQuestion}
            >
              Agregar
            </button>
          </div>
        </div>

        {/*-------------------------------PREGUNTAS--------------------------------------------*/}

        <div className="partFormGames">
          <label htmlFor="">Valor:</label>
          <input
            type="text"
            name="value"
            placeholder="Valor"
            value={games.value}
            onChange={handleInputChange}
          />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Actualizado en:</label>
          <input
            type="text"
            name="updated"
            placeholder="Actualizar Fecha"
            value={games.updated}
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

export default GamesPA;
