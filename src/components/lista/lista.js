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
  constructor() {
    super();

    this.state = {
      items: [],
      userSelected: 1
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }

  render() {
    return (
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" className={styles.titulo}>
              Usuários
            </Typography>
            <List>
              {this.state.items.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    button
                    selected={this.state.userSelected === index + 1}
                    onClick={() =>
                      this.setState({
                        userSelected: index + 1
                      })
                    }
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Detalhes idUser={this.state.userSelected} />
        </Grid>
      </Grid>
    );
  }
}

const styles = () => ({
  titulo: {
    margin: "10px 0"
  }
});

export default Lista;
