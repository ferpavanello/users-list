import React from "react";
import { TextField, Grid } from "@material-ui/core";

const Busca = () => (
  <Grid item xs={12}>
    <TextField
      id="buscar"
      label="Buscar"
      type="search"
      className={styles.textField}
      margin="normal"
    />
  </Grid>
);

const styles = () => ({
  textField: {
    background: "#9de1fe"
  }
});

export default Busca;
