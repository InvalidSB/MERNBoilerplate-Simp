import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import { UserContext } from "../App";

export default function Navbar() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {state ? (
        <AppBar
          position="static"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Toolbar style={{ width: "80%", margin: "auto" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration:"none",color:"white"}}>
                <HomeIcon style={{ fontSize: 18 }} />
                HOME
              </Link>
            </Typography>

            <Button color="inherit">
              <Link to="/profile" style={{textDecoration:"none",fontSize: 18 ,fontWeight:"bold",color:"white",marginRight:30}}>Profile</Link>
            </Button>
            <Button color="inherit" style={{padding:"5px 10px",backgroundColor: "cyan"}}>
              <Link
                to="/login"
                onClick={() => {
                  localStorage.clear();
                  dispatch({ type: "CLEAR" });
                }}
                style={{textDecoration:"none",color:"black"}}
              >
                Logout
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      ) : null}
    </Box>
  );
}
