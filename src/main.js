import React from "react";
import { Grid } from "@material-ui/core";
import Menu from "./components/menu/menu";
import Lista from "./components/lista/lista";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      listSelected: ""
    };
  }

  render() {
    return (
      <Grid container>
        <Menu
          listSelected={this.state.listSelected}
          onChangeList={newList => this.setState({ listSelected: newList })}
        />
        <Lista api={this.state.listSelected} />
      </Grid>
    );
  }
}

export default Main;
