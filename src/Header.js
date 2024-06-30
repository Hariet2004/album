import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles"; // Adjust the path as necessary

const Header = () => {
  const classes = useStyles();

  const handleAboutUs = () => {
    // Handle navigation or logic for About Us
    console.log('About Us clicked');
  };

  const handleContactUs = () => {
    // Handle navigation or logic for Contact Us
    console.log('Contact Us clicked');
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon} />
        <Typography variant="h6" style={{ marginLeft: "10px", flexGrow: 1 }}>
          Photo Album
        </Typography>
        <Button color="inherit" onClick={handleAboutUs}>About Us</Button>
        <Button color="inherit" onClick={handleContactUs}>Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
