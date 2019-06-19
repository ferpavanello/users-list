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
      selected: 1
    };
  }

  componentWillReceiveProps(props) {
    this.getItems(props.api);
  }

  getItems(api) {
    console.log(api);
    fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then(results => results.json())
      .then(results => this.setState({ items: results }));

    console.log(this.state.items);
  }

  render() {
    return (
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={8}>
            <List>
              <Typography variant="h6" className={styles.titulo}>
                Usuários
              </Typography>
              {this.state.items.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    button
                    selected={this.state.selected === index + 1}
                    onClick={() =>
                      this.setState({
                        selected: index + 1
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
            <Detalhes id={this.state.selected} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = () => ({
  titulo: {
    display: "inline-block",
    marginBottom: 10
  }
});

export default Lista;
