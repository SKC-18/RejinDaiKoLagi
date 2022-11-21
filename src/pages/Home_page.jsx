import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Products from "../components/Products/Products";
import Swip from "../components/Swiper/Swiper";
import { Typography } from "@mui/material";
import { Container } from "@material-ui/core";

export default function home_page() {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Swip />
      <hr/>
      <Typography>
        <h2 style={{fontFamily:'sans-serif', fontWeight:'initial'}}>Featured</h2>
        <Products />
      </Typography>
      <br />
      <hr/>
      <Typography>
      <h2 style={{fontFamily:'sans-serif', fontWeight:'initial'}}>Market</h2>
        <Products />
      </Typography>
    </Container>
  );
}
