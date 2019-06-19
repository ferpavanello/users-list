import React from "react";
import { Grid, MenuItem, MenuList } from "@material-ui/core";

class Menu extends React.Component {
  render() {
    return (
      <Grid item xs={3}>
        <MenuList>
          <MenuItem onClick={() => this.props.onChangeList("users")}>
            Usuários
          </MenuItem>
          <MenuItem onClick={() => this.props.onChangeList("posts")}>
            Publicações
          </MenuItem>
        </MenuList>
      </Grid>
    );
  }
}

export default Menu;
