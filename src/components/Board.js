import React, { Component } from 'react';
import Cell from './Cell';

import './Board.css';

const cells = new Array(9);
cells.fill(0);

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(''),
      winner: false,
      xIsNext: false
    };
  }
  displayInput = async (index, value) => {
    const newCells = [...this.state.cells];
    newCells[index] = value;  
    await this.setState({
      cells: newCells,
      xIsNext: !this.state.xIsNext
    });
    await this.checkWinner();
  };

  checkWinner = async () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const cells = this.state.cells;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        await this.setState({
          winner: cells[a]
        });
      }
    }
  };
  render() {
    return (
      <div className="Board">
        {!this.state.winner ? null : (
          <h3 style={{ width: '100%' }}>Winner is {this.state.winner} </h3>
        )}
        {this.state.xIsNext ? (
          <h4 style={{ width: '100%' }}>Turn of Player 2</h4>
        ) : (
          <h4 style={{ width: '100%' }}>Turn of Player 1</h4>
        )}

        {this.state.cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              arrIndex={index}
              xIsNext={this.state.xIsNext}
              displayInput={this.displayInput}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
