import { Paper, TextField, Typography, Link } from "@material-ui/core";
import { Avatar, Grid, Button } from "@mui/material";
import React from "react";
// import { useRef, useState, useEffect } from "react";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "100h",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#b87aeb" };
  const txtstyle = { margin: "09px 0px" };
  const btmstyle = { margin: "8px 0px ", backgroundColor: "#b87aeb" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            {" "}
            <LockTwoToneIcon />{" "}
          </Avatar>
          <h2> SIGN IN </h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          variant="filled"
          style={txtstyle}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          variant="filled"
          style={txtstyle}
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox defaultunChecked />}
          label="Remember Me"
        />
        <Button type="submit" variant="contained" style={btmstyle} fullWidth>
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        <Typography>
          {" "}
          Don't have an account?
          <Link onClick={() => navigate("/SignUp")}> SignUp</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default SignIn;