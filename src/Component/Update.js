import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, {  useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import PublicIcon from "@mui/icons-material/Public";
import MovieIcon from "@mui/icons-material/Movie";
import { handleUpdateTrailer, handleUpdateTrailerKey, handleVote } from "../Api";
const Update = () => {
const [open,setOpen]=useState(false);
const [form,setForm]=useState(0)
  return (
   <>
   <Dialog onClose={()=>{setOpen(false)}} open={open}>

                                {  form===0?(  <form
                                onSubmit={()=>{setOpen(false)}}>
                                      <Card
                                        sx={{
                                          width: "350px",
                                          fontSize: {
                                            xs: "3vw",
                                            sm: "2.5vw",
                                            md: "1.8vw",
                                            lg: "1.2vw",
                                            xl: ".8vw",
                                          },
                                        }}
                                      >
                                        <Card sx={{ borderRadius: "0px", backgroundColor: "#121212" }}>
                                          <CardContent
                                          >
                                            <CardContent>
                                              <Typography
                                                sx={{
                                                  fontWeight: "600",
                                                  fontFamily: "monospace",
                                                  color: "white",
                                                }}
                                              >
                                                Update OTT(non tmbd)
                                              </Typography>
                                              <TextField
                                                variant="filled"
                                                placeholder="ENTER IMBD ID PLEASE"
                                                sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                              />
                                            </CardContent>
                                            <CardContent>
                                              <Typography
                                                sx={{
                                                  color: "white",
                                                  fontFamily: "monospace",
                                                  display: "flex",
                                                  justifyContent: "center",
                                                }}
                                              >
                                                {" "}
                                                <PublicIcon color="secondary" /> IN-INDIA
                                              </Typography>
                                            </CardContent>
                                            <CardContent sx={{ borderRadius: "10px" }}>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Amazon Prime Video
                                              </Button>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Youtube
                                              </Button>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Voot
                                              </Button>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Netflix
                                              </Button>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Zee5
                                              </Button>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Sony Liv
                                              </Button>
                                              <Button
                                                sx={{
                                                  borderRadius: "20px",
                                                  backgroundColor: "white",
                                                  color: "black",
                                                  fontSize: {
                                                    sm: "1vw",
                                                    md: ".9vw",
                                                    lg: ".7vw",
                                                    xl: ".6vw",
                                                  },
                                                }}
                                              >
                                                <MovieIcon />
                                                Hotstar
                                              </Button>
                                            </CardContent>
                                            <CardContent>
                                              <Button
                                                sx={{
                                                  fontSize: "medium",
                                                  backgroundColor: "grey",
                                                  color: "white",
                                                }}
                                                >
                                                <UpdateIcon />
                                                submit changes
                                              </Button>
                                            </CardContent>
                                          </CardContent>
                                        </Card>
                                      </Card>
                                    </form>):
                                    
       (form===1?(<form
        onSubmit={(e) => {
          setOpen(false)
            handleUpdateTrailerKey(e);
          }}>
          <Card
            sx={{
              width: "350px",
              fontSize: {
                xs: "3vw",
                sm: "2.5vw",
                md: "1.8vw",
                lg: "1.2vw",
                xl: ".8vw",
              },
            }}
          >
            <Card sx={{ borderRadius: "0px", backgroundColor: "#121212" }}>
              <CardContent sx={{ ml: "12%" }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Update Trailer Key
                  </Typography>
                  <TextField
                    variant="filled"
                    placeholder="ENTER IMBD ID"
                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                    name="Vote"
                  />
                </CardContent>
                <CardContent>
                  <Typography color="white">Enter Trailer Key</Typography>
                  <TextField
                    variant="filled"
                    placeholder="trailer key"
                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                    name="trailer key"
                  />
                </CardContent>
                <CardContent>
                  <Button
                  type="submit"
                    sx={{
                      fontSize: "medium",
                      backgroundColor: "grey",
                      color: "white",
                    }}
                  >
                    <UpdateIcon />
                    submit changes
                  </Button>
                </CardContent>
              </CardContent>
            </Card>
          </Card>
        </form>):(form===2?(
                        <form
                          onSubmit={(e) => {
                            setOpen(false)
                            handleUpdateTrailer(e);
                          }}
                        >
                          <Card
                            sx={{
                              width: "350px",
                              fontSize: {
                                xs: "3vw",
                                sm: "2.5vw",
                                md: "1.8vw",
                                lg: "1.2vw",
                                xl: ".8vw",
                              },
                            }}
                          >
                            <Card sx={{ borderRadius: "0px", backgroundColor: "#121212" }}>
                              <CardContent>
                                <CardContent>
                                  <Typography
                                    sx={{
                                      fontFamily: "monospace",
                                      color: "white",
                                    }}
                                  >
                                    Update Trailer
                                  </Typography>
                                  <TextField
                                    variant="filled"
                                    placeholder="ENTER IMBD ID"
                                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                    name="IMBD ID"
                
                                  />
                                </CardContent>
                                <CardContent>
                                  <Typography color="white">
                                    Select Trailer Release Date(YYYY-MM-DD)
                                  </Typography>
                                  <TextField
                                  type="date"
                                    variant="filled"
                                    placeholder="YYYY-MM-DD"
                                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                    name="Trailer Release Date"
                
                                  />
                                </CardContent>
                                <CardContent>
                                  <Typography color="white">
                                    Select Movie Release Date(YYYY-MM-DD)
                                  </Typography>
                                  <TextField
                                    name="Movie Release Date"
                                    variant="filled"
                                    placeholder="YYYY-MM-DD"
                                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                    type='date'
                                  />
                                </CardContent>
                                <CardContent>
                                  <Typography color="white">is Recommended</Typography>
                                  <TextField
                                    name="recommended"
                                    variant="filled"
                                    placeholder="true or false"
                                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                  />
                                </CardContent>
                                <CardContent>
                                  <TextField
                                  name="notification"
                                    variant="filled"
                                    placeholder="Enter caption for notification"
                                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                  />
                                </CardContent>
                                <CardContent>
                                  <Button
                                    type="submit"
                                   
                                    sx={{
                                      fontSize: "medium",
                                      backgroundColor: "grey",
                                      color: "white",
                                    }}
                                  >
                                    <UpdateIcon />
                                    submit changes
                                  </Button>
                                </CardContent>
                                
                              </CardContent>
                            </Card>
                          </Card>
                        </form>):
                        (form===3?(
                          <form onSubmit={()=>{setOpen(false)}}>
                            <Card
                              sx={{
                                width: "350px",
                                fontSize: {
                                  xs: "3vw",
                                  sm: "2.5vw",
                                  md: "1.8vw",
                                  lg: "1.2vw",
                                  xl: ".8vw",
                                },
                              }}
                            >
                              <CardContent
                                sx={{
                                  textAlign: "center",
                                  fontFamily: "monospace",
                                  color: "white",
                                  backgroundColor: "#232323",
                                }}
                              >
                                Admin Datasheet
                              </CardContent>
                              <Card sx={{ borderRadius: "0px", backgroundColor: "#121212" }}>
                                <CardContent sx={{ fontFamily: "monospace", color: "white" }}>
                                  Upsert Movie Details
                                </CardContent>
                                <CardContent sx={{ ml: "12%" }}>
                                  <TextField
                                    variant="filled"
                                    placeholder="ENTER IMBD ID"
                                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                                  />
                                  <CardContent>
                                    {" "}
                                    <Button
                                      sx={{
                                        fontSize: "medium",
                                        backgroundColor: "grey",
                                        color: "white",
                                      }}
                                    >
                                      <UpdateIcon />
                                      submit changes
                                    </Button>
                                  </CardContent>
                                </CardContent>
                              </Card>
                            </Card>
                          </form>):(
   <form
        onSubmit={(e) => {
          setOpen(false)
            handleVote(e);
          }}>
          <Card
            sx={{
              width: "350px",
              fontSize: {
                xs: "3vw",
                sm: "2.5vw",
                md: "1.8vw",
                lg: "1.2vw",
                xl: ".8vw",
              },
            }}
          >
            <Card sx={{ borderRadius: "0px", backgroundColor: "#121212" }}>
              <CardContent sx={{ ml: "12%" }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Upsert Trailer Key
                  </Typography>
                  <TextField
                    variant="filled"
                    placeholder="Enter Vote number"
                    sx={{ backgroundColor: "white", borderRadius: "3px" }}
                    name="IMBD ID"
                  />
                </CardContent>
                <CardContent>
                  <Button
                  type="submit"
                    sx={{
                      fontSize: "medium",
                      backgroundColor: "grey",
                      color: "white",
                    }}
                  >
                    <UpdateIcon />
                    submit changes
                  </Button>
                </CardContent>
              </CardContent>
            </Card>
          </Card>
        </form>))))}
    </Dialog>
    
    <Stack direction="row" gap={{md:1,lg:2,xl:4}} sx={{display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:'flex'},justifyContent:"center",mt:{md:"30vw",lg:"25vw",xl:"20vw"}}}>
      <Button variant="contained" color="primary" onClick={()=>{setForm(0);setOpen(true)}}>Update OTT</Button>
      <Button variant="contained" color="secondary" onClick={()=>{setForm(1);setOpen(true)}}>Update Trailer Key</Button>
      <Button variant="contained" color="warning" onClick={()=>{setForm(2);setOpen(true)}}>Update Trailer</Button>
      <Button variant="contained" color="error" onClick={()=>{setForm(3);setOpen(true)}}>Upsert Movie Details</Button>
      <Button variant="contained" color="success" onClick={()=>{setForm(4);setOpen(true)}}>Upsert Trailer Key</Button>
    </Stack>
    <Box sx={{display:"flex",justifyContent:"center",mt:{xs:"40vw",sm:"20vw"}}}>
    <Stack  gap={2} sx={{display:{xs:"flex",sm:"flex",md:"none",lg:"none",xl:'none'},justifyContent:"center"}}>
      <Button variant="contained" color="primary" onClick={()=>{setForm(0);setOpen(true)}}>Update OTT</Button>
      <Button variant="contained" color="secondary" onClick={()=>{setForm(1);setOpen(true)}}>Update Trailer Key</Button>
      <Button variant="contained" color="warning" onClick={()=>{setForm(2);setOpen(true)}}>Update Trailer</Button>
      <Button variant="contained" color="error" onClick={()=>{setForm(3);setOpen(true)}}>Upsert Movie Details</Button>
      <Button variant="contained" color="success" onClick={()=>{setForm(4);setOpen(true)}}>Upsert Trailer Key</Button>
    </Stack>
    </Box>
    </>
  );
};

export default Update;
