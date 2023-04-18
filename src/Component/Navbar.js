import { Button,Box,AppBar,Container,IconButton,Toolbar, Typography, Stack, CardContent, Card } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TheatersIcon from '@mui/icons-material/Theaters';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {  useTheme } from "@mui/material/styles";
const drawerWidth = 240;
const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate=useNavigate()
  return (
   <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <TheatersIcon sx={{display:{xs:'none',md:'flex'},mr:1}}/>
        <Typography
        variant='h6'
        noWrap
        component="a"
        href="/"
        sx={{
          mr:2,
          display:{xs:'none',md:'flex'},
          fontFamily:"monospace",
          fontWeight:700,
          letterSpacing:'.3rem',
          color:'inherit',
          textDecoration:"none"}}>
          Recobee
        </Typography>
        <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}>
          
          <Button
        onClick={handleDrawerOpen}
        variant='contained'
        sx={{ ml: "3%",backgroundColor:"transparent" }}
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
            <ListItem  disablePadding>
              <ListItemButton onClick={()=>{navigate('/Movies')}}>
                <ListItemIcon>
                  <LocalMoviesIcon />
                </ListItemIcon>
                <ListItemText primary="Movie" />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton onClick={()=>{navigate('/update')}}>
                <ListItemIcon>
                  <BrowserUpdatedIcon />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton onClick={()=>{navigate('/dashboard')}}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
        </Box>
        <TheatersIcon sx={{display:{xs:'flex',md:'none'},mr:1}}/>
        <Typography
        variant="h5"
        noWrap
        component='a'
        href='/'
        sx={{
          mr:2,
          display:{xs:'flex',md:'none'},
          flexGrow:1,
          fontFamily:'monospace',
          fontWeight:700,
          letterSpacing:'.3rem',
          color:'inherit',
          textDecoration:'none'
        }}>
          Recobee
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Stack direction="row">
            <CardContent sx={{cursor:'pointer',fontWeight:700}} onClick={()=>{navigate('/Movies')}}>Movies</CardContent>
            <CardContent sx={{cursor:'pointer',fontWeight:700}} onClick={()=>{navigate('/update')}}>Update</CardContent>
            <CardContent sx={{cursor:'pointer',fontWeight:700}} onClick={()=>{navigate('/dashboard')}}>DashBoard</CardContent>
          </Stack>
          </Box>

      </Toolbar>
    </Container>
   </AppBar>
  )
}

export default Navbar