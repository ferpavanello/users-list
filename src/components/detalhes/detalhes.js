import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

class Detalhes extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      item: {}
    };
  }

  componentWillReceiveProps() {
    this.getItem();
  }

  getItem() {
    const { idUser } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
      .then(result => result.json())
      .then(result => this.setState({ item: result }));
  }

  render() {
    return (
      <Grid item xs={4}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.state.item.name}
            </Typography>
            <Typography variant="body2" component="p">
              {this.state.item.email}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Detalhes;
