import React, { Component } from "react";
import API from "../../utils/API";

class Configurator extends Component {
  state = {
    title: [],
    description: []
  };
  componentDidMount() {
    API.getConfig().then(res => {
      const title = res.data.calculator.title;
      this.setState({ title });
      const description = res.data.calculator.description;
      this.setState({ description });
    });
  }

  render() {
    return (
      <div className="testimonial">
        {this.state.title ? (
          <h3 className="Save-more-with Rectangle">{this.state.title}</h3>
        ) : (
          <p>Loading...</p>
        )}
        {this.state.description ? (
          <p className="With-Belloteroio-yo">{this.state.description}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Configurator;
