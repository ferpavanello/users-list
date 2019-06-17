import React from "react";
import Container from "@material-ui/core/Container";
import { Paper, Grid } from "@material-ui/core";
import Menu from "./components/menu/menu";
import Detalhes from "./components/detalhes/detalhes";

const Main = () => (
  <Grid container className={styles.container}>
    <Menu />
    <Detalhes />
  </Grid>
);

const styles = () => ({
  container: {
    display: "flex"
  }
});

export default Main;
