import { Grid, Typography } from "@material-ui/core";
import React from "react";
import NavBar from "../components/Navbar/NavBar";

const image = ["https://picsum.photos/id/6/500/300 "];

export default function Item() {
  return (
    <div>
      <NavBar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Typography></Typography>
      </Grid>
    </div>
  );
}
