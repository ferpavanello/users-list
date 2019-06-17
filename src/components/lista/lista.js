import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

class Lista extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
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
      <Grid item xs={5}>
        <Typography variant="h6" className={styles.titulo}>
          Usuários
        </Typography>
        <List>
          {this.state.items.map(function(item, index) {
            return (
              <ListItem>
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
        </List>
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
