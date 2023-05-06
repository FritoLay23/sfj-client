const GamesDel = ({ value }: any) => {
  return (
    <div className="cont_postGame">
      <h1>{value} Juego</h1>
      <form action="" method="POST" className="form_gamesDel">
        <div className="comp_GamesDel">
          <label htmlFor="">ID:</label>
          <input type="text" name="id" placeholder="ID" />
        </div>

        <button type="submit" className="button_formGamesDel">
          {value}
        </button>
      </form>
    </div>
  );
};

export default GamesDel;
