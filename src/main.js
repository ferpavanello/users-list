import React from "react";
import { Grid } from "@material-ui/core";
import Menu from "./components/menu/menu";
import Detalhes from "./components/detalhes/detalhes";
import Lista from "./components/lista/lista";

const Main = () => (
  <Grid container className={styles.container}>
    <Menu />
    <Lista />
  </Grid>
);

const styles = () => ({
  container: {
    display: "flex"
  }
});

export default Main;
