import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import PublicIcon from "@mui/icons-material/Public";
import MovieIcon from "@mui/icons-material/Movie";
import { handleUpdateTrailer, handleUpdateTrailerKey, handleVote } from "../Api";
import { authUser } from "../App";
const Update = () => {
  const { id, setId, refresh } = useContext(authUser);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1}
      
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display:""}}>
        <form>
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
        </form>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <form
          onSubmit={(e) => {
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
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <form
        onSubmit={(e) => {
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
                    Upsert Trailer Key
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
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <form
        onSubmit={(e) => {
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
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <form>
          {" "}
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
              // sx={{ ml: "12%" }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontFamily: "monospace",
                      color: "white",
                    }}
                  >
                    Upsert OTT(non tmbd)
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
        </form>
      </Grid>
    </Grid>
  );
};

export default Update;
