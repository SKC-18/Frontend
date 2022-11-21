/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";


import useStyles from "./sellp";

export default function sellProduct() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
    <NavBar />
      <div className={classes.place}>
        <Typography variant="h1" style={{ fontSize: "30px" }}>
          Sell Your Product
        </Typography>
        <br></br>
        <Typography variant="h6" component="h6">
          Product Name
        </Typography>
        <TextField
          id="outlined-adornment-name"
          label="Detailed Name"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          style={{ width: "20%" }}
        />
        <br />
        <br />
        <br />
        <br />
        <Typography
          variant="h6"
          component="h6"
        >
          Minimum Bid:{" "}
        </Typography>
        <TextField
          id="outlined-basic"
          label="Price $"
          variant="outlined"
          type="number"
          style={{ width: "10%"}}
        />
        <p>* Please enter minimum bid you accept for your product</p>
        
        <br />
        <Typography
          variant="h6"
          component="h6"
          style={{}}
        >
          Product Description:
        </Typography>
        <TextField
          id="outlined-basic"
          multiline
          rows={3}
          label="Long Description"
          variant="outlined"
          type="textarea"
          style={{ width: "60%"}}
        />
        <p>* Describe the product you're placing in the auction</p>
        <br />
        <form>
          <br></br>
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >
              Submit
            </Button>
        </form>
        <div>
        </div>
      </div>
    </Container>
  );
}