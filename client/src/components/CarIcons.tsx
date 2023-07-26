import { Grid, IconButton, Typography } from "@mui/material";

import Avatar from "@mui/material/Avatar";

const CarIcons = () => {
  return (
    <>
      <Typography variant="h1" mt={2} align="center">
        Brands
      </Typography>
      <Grid
        container
        spacing={2}
        p={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={2}>
          <IconButton color="primary">
            <Avatar src={require("../images/bmw.png")} alt="" />
          </IconButton>
        </Grid>
        <Grid item lg={2}>
          <IconButton color="primary">
            <Avatar src={require("../images/mercedes_benz.png")} alt="" />
          </IconButton>
        </Grid>
        <Grid item lg={2}>
          <IconButton color="primary">
            <Avatar src={require("../images/audi.png")} alt="" />
          </IconButton>
        </Grid>
        <Grid item lg={2}>
          <IconButton color="primary">
            <Avatar src={require("../images/vw.png")} alt="" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default CarIcons;
