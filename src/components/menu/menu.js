import React from "react";
import { Grid, MenuItem, MenuList } from "@material-ui/core";

const Menu = () => (
  <Grid item xs={3}>
    <MenuList>
      <MenuItem>Usuários</MenuItem>
      <MenuItem>Publicações</MenuItem>
    </MenuList>
  </Grid>
);

export default Menu;
