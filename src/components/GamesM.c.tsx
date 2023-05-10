import Udatagrid from "./Udatagrid.c";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../libs/axios'


const GamesM = ({ value }: any) => {

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'type', headerName: 'Type', width: 150 },
      { field: 'branch', headerName: 'Branch', width: 150 },
      { field: 'title', headerName: 'Title', width: 150 },
      { field: 'description', headerName: 'Description', width: 150 },
      { field: 'questions', headerName: 'Questions', width: 150 },
      { field: 'created_at', headerName: 'Created At', width: 150 },
      { field: 'updated_at', headerName: 'Updated At', width: 150 },
    ],
    rows: [],
  };

  return (
    <Udatagrid data={GridProps}/>
  );
};

export default GamesM;
