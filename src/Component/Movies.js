import React, { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import MaterialReactTable from 'material-react-table';
import { Box } from "@mui/material";


const Movies = () => {
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  
  const handleFileUpload = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function (result) {
        const columnArray = [];
        const valuesArray = [];
        console.log(result.data);
        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        console.log(result.data)
        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valuesArray);
      },
    });
  };
  
  const ColmunsData = useMemo(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'Id',
      },
      {
        accessorKey: 'title',
        header: 'Title',
      },
      {
        accessorKey: 'imdbid', //normal accessorKey
        header: 'Imdbid',
      },
      {
        accessorKey: 'language',
        header: 'Language',
      },
      {
        accessorKey: 'parentalguidance',
        header: 'Parentalguidance',
      },
      {
        accessorKey: 'genre',
        header: 'Genre',
      }, {
        accessorKey: 'isseries',
        header: 'Isseries',
      }, {
        accessorKey: 'director',
        header: 'Director',
      }, {
        accessorKey: 'country',
        header: 'Country',
      }, {
        accessorKey: 'arrating',
        header: 'Arrating',
      }, {
        accessorKey: 'runningtime',
        header: 'Runningtime',
      }, {
        accessorKey: 'releasedate',
        header: 'Releasedate',
      }, {
        accessorKey: 'imdbrating',
        header: 'Imdbrating',
      }, {
        accessorKey: 'posterimage',
        header: 'Posterimage',
      }, {
        accessorKey: 'backdropimage',
        header: 'Backdropimage',
      }, {
        accessorKey: 'votecount',
        header: 'Votecount',
      }, {
        accessorKey: 'mood',
        header: 'Mood',
      }, {
        accessorKey: 'trailerkeytmdb',
        header: 'Trailerkeytmdb',
      }, {
        accessorKey: 'backdropimageurl',
        header: 'Backdropimageurl',
      },

    ],
  );
  
  return (
    <>
      <input type="file" onChange={handleFileUpload} />
      <Box sx={{ml:"20%"}}>
      <MaterialReactTable columns={ColmunsData} data={data} />
      </Box>
    </>
  );
};

export default Movies;
