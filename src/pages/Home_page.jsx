import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Products from "../components/Products/Products";
import Swip from "../components/Swiper/Swiper";
import { Typography } from "@mui/material";

export default function home_page() {
  return (
    <div>
      <NavBar />
      <Swip />
      <Products />
      <br />
      <Typography>
        <h1>Featured</h1>
        <Products />
      </Typography>
      <Typography>
        <h1>Market</h1>
        <Products />
      </Typography>
    </div>
  );
}
