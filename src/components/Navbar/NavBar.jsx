import React from "react";
// import { Routes, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  List,
  ListItemButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            {/* left for image if image found then cancek the name and add href  */}

            {/* <img src={""} alt ="Auction House" height="25px" className={classes.image} /> */}
            <a href="/" style={{textDecoration:"none", color:'white'}}>Auction House</a>
          </Typography>
          {/* <div className={classes.grow} /> */}
          <List sx={{ display: "flex", fontFamily:'"Roboto","Helvetica","Arial",sans-serif' }} >
            <ListItemButton onClick={() => navigate("/featured")} className={classes.list}>
              Featured
            </ListItemButton>

            <ListItemButton onClick={() => navigate("/Market")} className={classes.list}>
              Market
            </ListItemButton>

            <ListItemButton onClick={() => navigate("/SignIn")} className={classes.list}>
              Sign-In
            </ListItemButton>
          </List>
          <div className={classes.button} />
          <IconButton aria-label="Show liked Items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
