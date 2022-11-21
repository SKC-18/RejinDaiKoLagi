import { React, useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

export default function SignUp() {
  const paperStyle = {
    padding: 20,
    height: "100h",
    width: 280,
    margin: "20px auto",
  };
  const avtstyle = { backgroundColor: "#b87aeb" };
  const txtstyle = { margin: "09px 0px" };
  const btmstyle = { margin: "8px 0px ", backgroundColor: "#b87aeb" };
  //const initialValues = {email:"",username:"", phoneno:"", password:"" }
  //const[formValues, setFormValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  //check valid email
  const handleChangeOnEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      // If email is invalid, show an error message
      //rejin do css
      // alert("Invalid Email");
      console.log("invalid email");
    }
  };

  //check strong password
  const handleChangeOnPassword = (e) => {
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
    if (!passwordRegex.test(email)) {
      console.log("Weak Password");
    }
  };

  //check  if the passwords match or not
  const handleChangeOnPassword2 = (e) => {
    setPassword2(e.target.value);
    if (password !== password2) {
      console.log("Passwords do not match ");
    }
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avtstyle}>
              {" "}
              <BorderColorTwoToneIcon />{" "}
            </Avatar>
            <h2> SIGN UP </h2>
            <Typography variant="caption">
              {" "}
              Please fill the following details:{" "}
            </Typography>
            <form>
              <TextField
                label="Full Name"
                name="fullname"
                placeholder="Enter your name"
                variant="filled"
                style={txtstyle}
                fullWidth
                required
              />
              <TextField
                label="UserName"
                name="username"
                placeholder="Enter your username"
                /*value={formValues.username}*/ variant="filled"
                style={txtstyle}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                placeholder="Enter your email id"
                /*value={formValues.email}*/ variant="filled"
                style={txtstyle}
                inputProps={{ type: "email" }}
                onChange={handleChangeOnEmail}
                fullWidth
                required
              />
              <TextField
                label="Phone No"
                name="phoneno"
                placeholder="Enter your phone no."
                /*value={formValues.phoneno}*/ variant="filled"
                style={txtstyle}
                fullWidth
                required
              />
              <TextField
                label="BirthDate"
                placeholder=" DD/MM/YY "
                variant="filled"
                style={txtstyle}
                fullWidth
                required
              />

              <TextField
                label="Password"
                name="password"
                placeholder="Enter password"
                /*value={formValues.password}*/ variant="filled"
                style={txtstyle}
                type="password"
                fullWidth
                required
                onChange={handleChangeOnPassword}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                name="password"
                placeholder="Enter password again"
                /*value={formValues.password}*/ variant="filled"
                style={txtstyle}
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                onChange={handleChangeOnPassword2}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel control={<Checkbox />} label=" I accept the" />
              <Link to="/TermsConditions"> Terms and Conditions </Link>

              <Button
                type="submit"
                variant="contained"
                style={btmstyle}
                fullWidth
              >
                Sign up
              </Button>

              <Typography>
                {" "}
                Already have an account?
                <Link to="/SignIn"> SignIn</Link>
              </Typography>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
