import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./styles";
import Featured from "../../pages/Featured";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            {/* left for image if image found then cancek the name and add href  */}

            {/* <img src={""} alt ="Auction House" height="25px" className={classes.image} /> */}
            <a href="/">Auction House</a>
          </Typography>
          <div className={classes.grow} />

          <li>
            <a href="../../pages/Featured"> Featured </a>
          </li>
          <li>
            <a href="/market">Market</a>
          </li>
          <li>
            <a href="/sign-in"> Sign-In</a>
          </li>

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
