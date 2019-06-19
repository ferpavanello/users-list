import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import Detalhes from "../detalhes/detalhes";

class Lista extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      regSelected: 1,
      apiSelected: ""
    };
  }

  componentWillReceiveProps(props) {
    this.getItems(props.api);
    this.setState({ apiSelected: props.api });
  }

  getItems(api) {
    fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }

  render() {
    return (
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={8}>
            <List>
              <Typography variant="h6">Lista de Usuários</Typography>
              {this.state.items.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    button
                    selected={this.state.regSelected === index + 1}
                    onClick={() =>
                      this.setState({
                        regSelected: index + 1
                      })
                    }
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={4}>
            <Detalhes
              id={this.state.regSelected}
              api={this.state.apiSelected}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Lista;
