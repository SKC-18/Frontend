import { Grid, Typography } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Products from "../components/Products/Products";

const productDetail = {
  id: 1,
  name: "Painting",
  describe: "Mac book extremly powerful used by steve  jobs ",
  price: "$5",
  image: "https://picsum.photos/id/1/500/400",
};

export default function Item() {
  return (
    <div>
      <NavBar />
      <Box mt={12}>
        <Grid container sx={{ height: "100px" }}>
          {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
          <Grid item xs={12} md={6}>
            <img
              src={productDetail.image}
              alt="product"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">{productDetail.name}</Typography>
            <Typography varient="h1">{productDetail.describe}</Typography>
            <Button>BID it</Button>
          </Grid>
        </Grid>
        <Products />
      </Box>
    </div>
  );
}
