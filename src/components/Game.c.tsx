import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "../components/Questions.c";
import { questions, imgs } from "../data";

// Función para barajar las preguntas de cada categoría y también reducirla al número de 5
const shuffleArray = (array: any) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

const Game = (gameBranch: any) => {
  // Leer El parametro de la URL
  const { branch } = useParams();

  const imgBranch = imgs
    .map((img) => {
      const startIndex = 12;
      const puntoIndex = img.indexOf(".", startIndex);
      const subcadena = img.substring(startIndex, puntoIndex);
      if (subcadena === branch?.toLowerCase()) return subcadena;
    })
    .filter((i) => i !== undefined);

  /*   const [questionsFiltered, setQuestionsFiltered] = useState(
    gameBranch.gameBranch.questionsons.map((question: any) => {
      if (question.category === branch) return question;
    })
  ); */
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  /*   useEffect(() => {
    const newQuestions = shuffleArray(gameBranch.gameBranch.questionsons);
    setQuestionsFiltered(newQuestions);
  }, []); */

  const newQuestions = shuffleArray(gameBranch.gameBranch.questions);

  return (
    <div className="cont_game">
      {activeQuiz ? (
        <Question
          filteredQuestion={newQuestions[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={newQuestions}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-teal-900 text-center font-bold">
              {gameBranch.gameBranch.title}
            </h1>

            <div className="flex justify-center items-center">
              <img
                src={`/src/assets/${imgBranch[0]}.png`}
                alt={branch}
                className="w-72"
              />
              <p>{gameBranch.gameBranch.description}</p>
            </div>
          </div>

          <button
            className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={() => setActiveQuiz(true)}
          >
            Iniciar Quiz
          </button>
        </>
      )}
    </div>
  );
};
export default Game;
