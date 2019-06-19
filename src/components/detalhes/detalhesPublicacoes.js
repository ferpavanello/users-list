import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

class DetalhesPublicacoes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentWillReceiveProps(props) {
    this.getItem(props.api, props.id);
  }

  getItem(api, id) {
    fetch(`https://jsonplaceholder.typicode.com/${api}/${id}`)
      .then(result => result.json())
      .then(result => this.setState({ item: result }));
  }

  render() {
    return (
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.state.item.title}
          </Typography>
          <Typography variant="body2" component="p">
            {this.state.item.body}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default DetalhesPublicacoes;
