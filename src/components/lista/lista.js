import React from "react";
import { Grid } from "@material-ui/core";
import ListaUsuarios from "../lista/listaUsuarios";
import ListaPublicacoes from "../lista/listaPublicacoes";

class Lista extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      apiSelected: ""
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ apiSelected: props.api });
    this.getItems(props.api);
  }

  getItems(api) {
    fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }

  render() {
    if (this.state.apiSelected === "users") {
      return (
        <Grid item xs={9}>
          <ListaUsuarios
            items={this.state.items}
            api={this.state.apiSelected}
          />
        </Grid>
      );
    } else if (this.state.apiSelected === "posts") {
      return (
        <Grid item xs={9}>
          <ListaPublicacoes
            items={this.state.items}
            api={this.state.apiSelected}
          />
        </Grid>
      );
    } else {
      return <Grid item xs={9} />;
    }
  }
}

export default Lista;
