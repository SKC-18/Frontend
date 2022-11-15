import {
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Button } from "@mui/material";
import React from "react";
// import { useRef, useState, useEffect } from "react";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import useStyles from "../components/Products/Product/styles";

const Item = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "100h",
    width: 280,
  };
  const container = {
    width: '100%',
    backgroundColor:'grey'
  };
  const avatarStyle = { backgroundColor: "#b87aeb" };
  const txtstyle = { margin: "09px 0px" };
  const btmstyle = { margin: "8px 0px ", backgroundColor: "#b87aeb" };

  return (
<Container>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={6}>
            <h1>HHHHHHHHHH</h1>
            <Card>
        <CardContent>
          <div>
            <Typography variant="h6" gutterBottom>
              {props.products.name}
              <Typography varient="h5" style={{ marginTop: "-15px" }}>
                <h5 style={{ margin: "20px 0 0px 0px" }}>Minimum Bid:</h5>{" "}
                {props.products.price}
              </Typography>
            </Typography>
          </div>
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
        </IconButton>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>GGGG</h1>
          </Grid>
        </Grid>
     </Container>
  );
};
export default Item;
