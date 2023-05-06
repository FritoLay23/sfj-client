const GamesPA = ({ value }: any) => {
  return (
    <div className="cont_postGame">
      <h1>{value} Juego</h1>
      <form action="" method="POST" className="form_games">
        <input type="file" name="image" />
        <div className="partFormGames">
          <label htmlFor="">Type: </label>
          <input type="text" name="type" placeholder="Type" />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Clasificacion: </label>
          <input type="text" name="branch" placeholder="branch" />
        </div>
        <div className="partFormGames">
          <label htmlFor="">Titulo: </label>
          <input type="text" name="title" placeholder="Title" />
        </div>

        <div className="partFormGames">
          <label htmlFor="">Descripción:</label>
          <textarea
            name="description"
            cols="20"
            rows="2"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="partFormGames">
          <label htmlFor="">Preguntas:</label>
          <input type="text" name="question" placeholder="question" />
        </div>

        <div className="partFormGames" id="incorrectAnswerGames">
          <label htmlFor="">Incorrectas:</label>
          <input type="text" name="incorrect1" placeholder="Incorrecta 1" />
          <input type="text" name="incorrect2" placeholder="Incorrecta 2" />
          <input type="text" name="incorrect3" placeholder="Incorrecta 3" />
        </div>

        <div className="partFormGames">
          <label htmlFor="">Respuesta: </label>
          <input type="text" name="answer" placeholder="Correcta" />
        </div>

        <div className="partFormGames">
          <label htmlFor="">Valor:</label>
          <input type="text" name="value" placeholder="Valor" />
        </div>

        <div className="partFormGames">
          <label htmlFor="">Actualizado en:</label>
          <input type="text" name="updated" placeholder="Actualizar Fecha" />
        </div>

        <button type="submit" className="button_formGames">
          {value}
        </button>
      </form>
    </div>
  );
};

export default GamesPA;
