import React, { useCallback,  useContext,  useEffect,  useMemo, useState } from "react";
import Papa from "papaparse";
import MaterialReactTable from "material-react-table";
import {Box,Button,IconButton,TextField,Tooltip} from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios'
import { authUser } from "../App";
import { insertMovie, trending } from "../Api";

const Movies = () => {
  // const [createModalOpen, setCreateModalOpen] = useState(false);
  // const [tableData, setTableData] = useState(() => data);
  // const handleCreateNewRow = (values) => {
  //   setData([...data,values]);
  // };
  const[imbd,setImbd]=useState()  
  const [data, setData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const {refresh,email}=useContext(authUser)
  
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      data[row.index] = values;
      setData([...data]);
    }
  };
  
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  
  const handleDeleteRow = useCallback(
    (row) => {
      if (window.confirm(`Are you sure you want to delete ${row.getValue('id ','title')}`))
      {let rowData=data;
        rowData.splice(row.index, 1);
        setData([...rowData]);
      }
    },
  );
  
  const handleFileUpload = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function (result) {
        result.data.map((d) => {
        });
        setData(result.data);
      },
    });
  };
  
  const ColmunsData = useMemo(() => [
    {
      accessorKey: "id", 
      header: "Id",
      enableColumnOrdering: false,
      enableEditing: false, 
      enableSorting: false,
      size: 80,
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "imdbid", //normal accessorKey
      header: "Imdbid",
    },
    {
      accessorKey: "language",
      header: "Language",
    },
    {
      accessorKey: "parentalguidance",
      header: "Parentalguidance",
    },
    {
      accessorKey: "genre",
      header: "Genre",
    },
    {
      accessorKey: "isseries",
      header: "Isseries",
    },
    {
      accessorKey: "director",
      header: "Director",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "arrating",
      header: "Arrating",
    },
    {
      accessorKey: "runningtime",
      header: "Runningtime",
    },
    {
      accessorKey: "releasedate",
      header: "Releasedate",
    },
    {
      accessorKey: "imdbrating",
      header: "Imdbrating",
    },
    {
      accessorKey: "posterimage",
      header: "Posterimage",
    },
    {
      accessorKey: "backdropimage",
      header: "Backdropimage",
    },
    {
      accessorKey: "votecount",
      header: "Votecount",
    },
    {
      accessorKey: "mood",
      header: "Mood",
    },
    {
      accessorKey: "trailerkeytmdb",
      header: "Trailerkeytmdb",
    },
    {
      accessorKey: "backdropimageurl",
      header: "Backdropimageurl",
    },
  ]);
  
  
  useEffect(()=>{
    const res = trending(email,refresh)
    res.then(data => {
      setData(data)
    }).catch(error => {
      console.error(error)
  })
}
  ,[])


  return (
    <>
      <input type="file" onChange={handleFileUpload} />
      <Box sx={{ ml: "20%" }}>
        <MaterialReactTable
          columns={ColmunsData}
          data={data}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          editingMode='modal' 
          enableColumnOrdering
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}

          
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow  title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow  title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}/>
      <Button variant="contained" color='secondary' sx={{mt:"1%"}} onClick={()=>{insertMovie(email,refresh,imbd)}}>Insert Movie</Button>
      <TextField type="text" sx={{ml:"3%",mt:"1%"}} onChange={(e)=>{setImbd(e.target.value)}}/>
      </Box>
    </>
  );
};





export default Movies;
