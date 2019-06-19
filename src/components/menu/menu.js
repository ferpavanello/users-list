import React from "react";
import { Grid, MenuItem, MenuList } from "@material-ui/core";

class Menu extends React.Component {
  render() {
    return (
      <Grid item xs={3}>
        <MenuList>
          <MenuItem
            selected={this.props.listSelected === "users"}
            onClick={() => this.props.onChangeList("users")}
          >
            Usuários
          </MenuItem>
          <MenuItem
            selected={this.props.listSelected === "posts"}
            onClick={() => this.props.onChangeList("posts")}
          >
            Publicações
          </MenuItem>
        </MenuList>
      </Grid>
    );
  }
}

export default Menu;
