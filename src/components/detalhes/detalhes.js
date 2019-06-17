import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Detalhes = () => (
  <Grid item xs={5}>
    <Card elevation={0}>
      <CardContent>
        <Typography variant="h5" component="h2">
          About Me
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Detalhes;
