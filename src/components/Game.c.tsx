const Game = () => {
  return (
    <div className="cont_game">
      <div className="cont_question">
        <div className="cont_letterQ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis quo eligendi rem impedit blanditiis officia!
          </p>
        </div>
        <div className="lineQ"></div>
        <div className="cont_imageQ">
          <img src="../../public/IMG/artesano.png" />
        </div>
      </div>
      <div className="cont_answer">
        <button>Falso</button>
        <div>O</div>
        <button>Verdadero</button>
      </div>
    </div>
  );
};
export default Game;
