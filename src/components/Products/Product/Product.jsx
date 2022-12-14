import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  ListItemButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./styles.js";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.products.image}
        title={Product.name}
        gutterBottom
      >
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {props.products.name}
              <Typography varient="h5" style={{marginTop:'-15px'}}>
              <h5 style={{margin:'20px 0 0px 0px'}}>Minimum Bid:</h5> {props.products.price}
            </Typography>
            </Typography>

          </div>
          {/* <Typography variant="body2" color="textSecondary">
            {props.products.describe}
          </Typography> */}
        </CardContent>
      </CardMedia>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <NotificationsIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
