import React from "react";
import { CircularProgress, Grid } from "@mui/material";
const Loading = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "calc(100vh - 68px)" }}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
