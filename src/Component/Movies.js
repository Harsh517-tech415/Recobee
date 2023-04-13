import React, { useCallback,  useContext,  useEffect,  useMemo, useState } from "react";
import Papa from "papaparse";
import MaterialReactTable from "material-react-table";
import {Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,IconButton,MenuItem,Stack,TextField,Tooltip} from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios'
import { authUser } from "../App";
import { insertMovie, trending } from "../Api";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

const Movies = () => {
  const[imbd,setImbd]=useState()  
  const [data, setData] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});
  const {id,setId,refresh,email}=useContext(authUser)
  const handleCreateNewRow = (values) => {
    // data.push(values);
    setData([...data,values]);
  };
  
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      data[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setData([...data]);
      exitEditingMode(); //required to exit editing mode and close modal
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
      accessorKey: "id", //access nested data with dot notation
      header: "Id",
      enableColumnOrdering: false,
      enableEditing: false, //disable editing on this column
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
  // const baseURL = "https://developapifree.reco-bee.com/common/v1/trending";
  const axiosInstance = axios.create({
    baseURL: 'https://developapifree.reco-bee.com/common/v1/'
  })
  
  useEffect(()=>{
    const res = trending(id,setId,email,refresh)
  }
  ,[id])


// function insertMovie()
// {
  
//   axiosInstance.interceptors.request.use(
//     config => {
//       config.headers = { 
//         'Authorization': `Bearer ${id}`,
//       }
//       return config
//     },
//     error => {
//       Promise.reject(error)
//     }
//   )
//   axiosInstance.post()
//   .then((res)=>{console.log(res)})
//   .catch((err)=>{console.log(err)})
// }

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
              <Tooltip arrow placement="lef
              " title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}/>
      <Button variant="contained" color='secondary' sx={{mt:"1%"}} onClick={()=>{insertMovie(id,setId,email,refresh,imbd)}}>Insert Movie</Button>
      <TextField type="text" sx={{ml:"3%",mt:"1%"}} onChange={(e)=>{setImbd(e.target.value)}}/>
      </Box>
    </>
  );
};





export default Movies;
