import {
  Grid,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  ListItem,
} from "@material-ui/core";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Container,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Products from "../components/Products/Products";
import PropTypes from "prop-types";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const productDetail = {
  id: 1,
  name: "Painting",
  describe: "Mac book extremly powerful used by steve  jobs ",
  price: "$5",
  image: "https://picsum.photos/id/1/500/400",
};

const bids = ["$50,000", "$47,000"];
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const navigate = useNavigate();
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Live Bid Details</DialogTitle>
      <List sx={{ pt: 0 }}>
        {bids.map((bids) => (
          <ListItem button onClick={() => handleListItemClick(bids)} key={bids}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={bids} />
          </ListItem>
        ))}
      </List>
      <DialogActions>
        <Button
          onClick={handleClose}
          style={{
            color: "black",
            padding: "7px",
            background: "#8585b9",
            border: "1px solid transparent",
            borderRadius: "15px",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          style={{
            color: "black",
            padding: "7px",
            background: "#8585b9",
            border: "1px solid transparent",
            borderRadius: "15px",
          }}
        >
          Bid Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Item() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(bids[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <Container maxWidth="lg">
      <div style={{ overflow: "hidden" }}>
        <NavBar />
        <Box mt={12}>
          <Grid
            container
            sx={{ height: "60px" }}
            style={{ padding: "20px", marginBottom: "20px" }}
          >
            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
            <Grid item xs={12} md={6}>
              <img
                src={productDetail.image}
                alt="product"
                style={{
                  objectFit: "cover",
                  width: "70%",
                  border: "1px solid transparent",
                  borderRadius: "20px",
                  marginLeft: "20%",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ borderLeft: "1px solid grey", padding: "20px" }}
            >
              <Typography variant="h4">{productDetail.name}</Typography>
              <Typography varient="h1">{productDetail.describe}</Typography>
              <div>
                <Typography variant="subtitle1" component="div">
                  Highest Bid: {selectedValue}
                </Typography>
                <br />
                <Button
                  variant="outlined"
                  onClick={handleClickOpen}
                  style={{
                    color: "black",
                    padding: "7px",
                    background: "#8585b9",
                    border: "1px solid transparent",
                    borderRadius: "15px",
                  }}
                >
                  BID IT!
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => navigate("/sellProduct")}
                  style={{
                    color: "black",
                    padding: "7px",
                    background: "#8585b9",
                    border: "1px solid transparent",
                    borderRadius: "15px",
                  }}
                >
                  Sell Your Product!
                </Button>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                />
              </div>
            </Grid>
          </Grid>
          <hr />
          <br />
          <Products />
        </Box>
      </div>
    </Container>
  );
}
