import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

class Detalhes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentWillReceiveProps(props) {
    this.getItem(props.idUser);
  }

  getItem(idUser) {
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
      .then(result => result.json())
      .then(result => this.setState({ item: result }));
  }

  render() {
    return (
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
    );
  }
}

export default Detalhes;
