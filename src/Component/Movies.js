import React, { useCallback,  useEffect,  useMemo, useState } from "react";
import Papa from "papaparse";
import MaterialReactTable from "material-react-table";
import {Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,IconButton,MenuItem,Stack,TextField,Tooltip} from "@mui/material";
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios'

const Movies = () => {
  const [data, setData] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});
  
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
  
  const baseURL = "https://developapifree.reco-bee.com/common/v1/trending";
  useEffect(()=>{
    const axiosInstance = axios.create({
      baseURL: 'https://developapifree.reco-bee.com/common/v1/'
    })
    axiosInstance.interceptors.request.use(
      config => {
        const token ="eyJraWQiOiJRNUd3TzV1dGJpWHJvZWNuQUxPM2JNOWtOZGZhaTVkNTdYanMwdVJHV0FNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1YWIwMGIyZC04OWVlLTQ0ZjktOGRjMS03ZTVjNzUzZDNlOTkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2lzd21jbHQ4OCIsImNsaWVudF9pZCI6IjJwYnI1c2x1cjBtbmZpY3J2cXIxa3NiNTlhIiwib3JpZ2luX2p0aSI6ImE2Y2Y5MGI4LTdmNzYtNGNiNC04OGVkLWVmYWYzYmY4MDQ1NSIsImV2ZW50X2lkIjoiOTU2MGI3ZWUtNWIzMS00ZDIxLWEwOTctYTcyZmM4ZjljZWEwIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY4MDg1MTYxNiwiZXhwIjoxNjgwODU1MjE2LCJpYXQiOjE2ODA4NTE2MTYsImp0aSI6IjIyZTA2NzgxLTJlNWEtNGY1My04ZmEyLTBjYzVmNTQ5YTZhYiIsInVzZXJuYW1lIjoicmVjb2JlZWFkbWluIn0.aoPSbq5ad8I97KmRa2poTikVBL5YdyX_KtROYViJL687dj1Y0jtxW3R7VGkDfaPIHKH63WLMbGJwlm22XJctMRsHp2gwHDfxtnUgHOs1n8IH-pQ0H3KF9sPg2DmIeTeE8aT8AbxJMLfaYTzThQMvgDPxnn5Z-YuN3kbwPOeCvp7I-dGFwbynVWphsB0KotqLkw4peybRqDPNHQ_o0qzZG-jaKWGPbzXRvf9aErWK9ddiBgUzGiUjm3jTHGMfrbbRRl6HfMcN0cKgZZ7_NWJRwR06WCJir1ZqdWP6oBIMeeJdbCttCBovnw95fMZ3FLJs6dUIkbU7iSd6nq6hYtiOsw";

        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token
          config.headers['api_key']='ABCDEFGH'
        }
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
    axiosInstance.get('trending').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  },[])
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
          )}
          renderTopToolbarCustomActions={() => (
            <Button
              color='secondary'
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
            >
              Create New Account
            </Button>
          )}
        />
        <CreateNewAccountModal
          columns={ColmunsData}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
        />
      </Box>
    </>
  );
};




export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    console.log(values)
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default Movies;
