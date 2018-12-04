import React, { Component } from "react";

export class App extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="mt-5">{this.state.count}</h1>
        <button onClick={this.handleIncrement} className="btn btn-primary mr-2">
          Increase
        </button>
        <button onClick={this.handleDecrement} className="btn btn-danger my-2">
          Decrease
        </button>
      </div>
    );
  }
}

export default App;
