import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import DetalhesUsuarios from "../detalhes/detalhesUsuarios";

class ListaUsuarios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      regSelected: 1,
      apiSelected: ""
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ items: props.items });
    this.setState({ apiSelected: props.api });
  }

  render() {
    return (
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
                  <ListItemText primary={`${item.id} - ${item.name}`} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={4}>
          <DetalhesUsuarios
            id={this.state.regSelected}
            api={this.state.apiSelected}
          />
        </Grid>
      </Grid>
    );
  }
}

export default ListaUsuarios;
