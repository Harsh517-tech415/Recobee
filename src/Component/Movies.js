import React, { useCallback,  useContext,  useEffect,  useMemo, useState } from "react";
import Papa from "papaparse";
import MaterialReactTable from "material-react-table";
import {Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,IconButton,MenuItem,Stack,TextField,Tooltip} from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios'
import { authUser } from "../App";

const Movies = () => {
  const [data, setData] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});
  const {id,setId,refresh}=useContext(authUser)
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
  const[imbd,setImbd]=useState()  
  // const baseURL = "https://developapifree.reco-bee.com/common/v1/trending";
  const axiosInstance = axios.create({
    baseURL: 'https://developapifree.reco-bee.com/common/v1/'
  })
  
  useEffect(()=>{
   



    axiosInstance.interceptors.request.use(
      config => {
        config.headers = { 
          'Authorization': `Bearer ${id}`,
          'api_key': 'ABCDEFGH',
        }
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
    axiosInstance.get('trending')
    .then((res)=>{console.log(res)})
    .catch((err)=>{
      if(err.response.status===401)
      {
        axios.post('',{
          refresh
        }).then(res=>{
          setId(res.data.jwtToken)
          
        })
        .catch((err)=>console.log(err))

      }})
      
  }
  ,[id])

  
function insertMovie()
{
  const axiosPost=axios.create({
    baseURL:'https://developapifree.reco-bee.com/common/v1/'
  })
  axiosPost.interceptors.response.use(
    response => {
      console.log("response",response)
      return response
    },
    function (error) {
      console.log(error)
      
      }
    
  )
  axiosPost.post(`insertdetails/${imbd}`)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
}

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
              <Tooltip arrow placement="left" title="Edit">
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
      {/* <Button variant="contained" color='secondary' sx={{mt:"1%"}} onClick={insertMovie}>Insert Movie</Button>
      <TextField type="text" sx={{ml:"3%",mt:"1%"}} onChange={(e)=>{setImbd(e.target.value)}}/> */}
      </Box>
    </>
  );
};





export default Movies;
