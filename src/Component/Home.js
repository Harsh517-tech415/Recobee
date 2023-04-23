import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { getGraphData } from "../Api";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";


const Home = () => {
  const [userActivity, setUserActivity] = useState([]);
  const [user, setUser] = useState([]);
  const [review, setReview] = useState([]);
  const [day, setDay] = useState(7);
  const [anchorEl, setAnchorEl] = useState(null);
  const [chartInstance, setChartInstance] = useState(null); // Keep track of the chart instance

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item) => {
    setAnchorEl(null);
    setDay(item);
  };

  useEffect(() => {
    async function getData() {
      const data = await getGraphData(day);
      setUserActivity((d) => data[0]);
      if(day!==7){
      setUser((d) => data[1]);}
      else
      {
        
      }
      if(day===7)
      {
      setReview((d) => data[1]);
      }
      else
      {
      setReview((d) => data[2]);
      }
      console.log(data);
    }
    getData();
  }, [day]);

  const graphData1 = {
    labels: userActivity.map((item) => {
      return item.date;
    }),
    datasets: [
      {
        label: "Count",
        data: userActivity.map((item) => {
          return item.count;
        }),
        backgroundColor:"#E59866"
      },
    ],
  };
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User Activity",
      },
    },
  };

  const graphData2 = {
    labels: user.map((item) => {
      return item.date;
    }),
    datasets: [
      {
        label: "Count",
        data: user.map((item) => {
          return item.count;
        }),
      },
    ],
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User",
      },
    },
  };
  const graphData3 = {
    labels: review.map((item) => {
      return item.date;
    }),
    datasets: [
      {
        label: "Count",
        data: review.map((item) => {
          return item.count;
        }),
        backgroundColor:"#52BE80"
      },
    ],
  };
  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Review",
      },
    },
  };


  
  return (
      <Box>
        <Typography
          sx={{
            ml: "15%",
            textAlign: { sm: "left", lg: "left" },
            fontSize: { sm: "60px", lg: "70px" },
            fontWeight: "800",
          }}
        >
          Welcome to <br />
          Recobee 👋
        </Typography>
        <Button onClick={handleClick}>Day:{day}</Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose(7);
            }}
          >
            7
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose(15);
            }}
          >
            15
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose(30);
            }}
          >
            30
          </MenuItem>
        </Menu>
        <Grid container >
          <Grid item 
           xs="12" sm="10" md="10" lg="6" xl="5"
           >
            <Bar responsive="true" options={options1} data={graphData1} />
          </Grid>
          {day !== 7 && (
            <Grid 
              item xs="12" sm="10" md="10" lg="6"xl="5"
            >
              <Bar responsive="true" options={options2} data={graphData2} />
            </Grid>
          )}
          <Grid 
            item xs="12" sm="10" md="10" lg="6" xl="5"
          >
            <Bar responsive="true" options={options3} data={graphData3} />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
export default Home;
