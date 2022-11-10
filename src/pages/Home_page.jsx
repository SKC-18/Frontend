import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Products from "../components/Products/Products";
import Swip from "../components/Swiper/Swiper";

export default function home_page() {
  return (
    <div>
      <NavBar />
      <Swip />
      <Products />
    </div>
  );
}
