import { imgs, branches } from "../data";
import BranchCardC from "./BranchCard.c";
import { gamesRequest } from "../api/api";
import { useEffect, useState } from "react";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

const BranchList = () => {
  const getGames = async () => {
    const response = await gamesRequest();
    return response;
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((response: any) => {
      setGames(response.data.games);
    });
  }, []);

  return (
    <>
      <div className="cont_cardTitle">
        <h1>Selecciona tu categoria preferida</h1>
      </div>
      <div className="cont_cardBranch">
        {games.map((game: any) => {
          return (
            <BranchCardC
              branch={game.branch}
              src={imgGeografia}
              alt={`branch ${game.branch}`}
            />
          );
        })}
      </div>
    </>
  );
};
export default BranchList;
