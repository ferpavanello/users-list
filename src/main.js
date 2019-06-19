import React from "react";
import { Grid } from "@material-ui/core";
import Menu from "./components/menu/menu";
import Lista from "./components/lista/lista";
import Busca from "./components/busca/busca";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      listSelected: ""
    };
  }

  render() {
    return (
      <Grid container className={styles.container}>
        <Grid item xs={12}>
          <Grid container>
            <Busca />
          </Grid>
          <Grid container>
            <Menu
              listSelected={this.state.listSelected}
              onChangeList={newList => this.setState({ listSelected: newList })}
            />
            <Lista api={this.state.listSelected} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = () => ({
  container: {
    display: "flex"
  }
});

export default Main;
