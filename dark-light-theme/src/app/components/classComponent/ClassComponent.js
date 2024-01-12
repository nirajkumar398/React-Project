import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("constructor is called", this.state.count);
  }
  componentDidMount() {
    console.log("Component is mounted");
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render");
    return (
      <div onClick={this.increaseCounter}>increate ${this.state.count}</div>
    );
  }
}

export default ClassComponent;
