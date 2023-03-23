import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {  useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useNavigate } from 'react-router-dom'
const drawerWidth = 240;
const Home = () => {
  const navigate=useNavigate()
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleDrawerOpen}
        variant="outlined"
        color="warning"
        sx={{ ml: "3%" }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {["Movie"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>{navigate('/Movies')}}>
                <ListItemIcon>
                  <LocalMoviesIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
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
    </Box>
  );
};

export default Home;
