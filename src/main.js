import React from "react";
import { Grid } from "@material-ui/core";
import Menu from "./components/menu/menu";
import Lista from "./components/lista/lista";
import Busca from "./components/busca/busca";

const Main = () => (
  <Grid container className={styles.container}>
    <Grid item xs={12}>
      <Grid container>
        <Busca />
      </Grid>
      <Grid container>
        <Menu />
        <Lista />
      </Grid>
    </Grid>
  </Grid>
);

const styles = () => ({
  container: {
    display: "flex"
  }
});

export default Main;
