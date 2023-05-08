import Udatagrid from "./Udatagrid.c";
import { gamesRequest } from "../api/api";
import { useEffect, useState } from "react";

const GamesM = ({ value }: any) => {
<<<<<<< HEAD
  return <div>Ver Juego</div>;
=======
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

  const GridProps = {
    columns: [
      { field: "id", headerName: "ID", width: 90 },
      { field: "type", headerName: "Type", width: 150 },
      { field: "branch", headerName: "Branch", width: 150 },
      { field: "title", headerName: "Title", width: 150 },
      { field: "description", headerName: "Description", width: 150 },
      { field: "questions", headerName: "Questions", width: 150 },
      { field: "created_at", headerName: "Created At", width: 150 },
      { field: "updated_at", headerName: "Updated At", width: 150 },
    ],
    rows: games,
  };

  return <Udatagrid data={GridProps} />;
>>>>>>> 7a6b7041fd2b2482c5c7a8756381657c08cc3996
};

export default GamesM;
