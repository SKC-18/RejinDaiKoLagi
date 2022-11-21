import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./styles.js";

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
              <Typography varient="h5" style={{ marginTop: "-15px" }}>
                <h5
                  style={{
                    margin: "20px 0 0px 0px",
                    border: "1px solid grey",
                    borderRadius: "20px",
                    padding: "7px",
                  }}
                >
                  Minimum Bid: {props.products.price}
                </h5>{" "}
              </Typography>
            </Typography>
          </div>
          <div className="timer">Timer comes here</div>
        </CardContent>
      </CardMedia>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <NotificationsIcon className={classes.view} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
