import React, { Component } from 'react';
import './Board.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  displayInput = async arrIndex => {
    if (this.props.xIsNext) {
      await this.setState({
        value: 'X'
      });
    } else {
      await this.setState({
        value: 'O'
      });
    }
    await this.props.displayInput(arrIndex, this.state.value);
  };
  render() {
    return (
      <div
        className="Board__Cell"
        onClick={() => this.displayInput(this.props.arrIndex)}
      >
        {this.state.value ? <h3>{this.state.value}</h3> : null}
      </div>
    );
  }
}

export default Cell;
