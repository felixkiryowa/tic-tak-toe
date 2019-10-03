import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {

    constructor() {
        super();
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }

    handleSquareClick(i) {
        const { squares } = this.state;
        const allSquares = squares.slice();
        if (this.calculateWinner(allSquares) || allSquares[i]) {
            return;
        }
        allSquares[i] = this.state.xIsNext ? 'X' : 'O';;
        this.setState({
            squares: allSquares,
            xIsNext: !this.state.xIsNext
        });
    }
    

    renderSquare(i) {
        return <Square 
        squareValue={ this.state.squares[i]} 
        handleSquareClick={() => this.handleSquareClick(i)}
        />;
    }

    render() {
        const { squares } = this.state;
        const winner = this.calculateWinner(squares);
        let status

        if (winner) {
            status = 'Winner: ' + winner;
          } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
          }
    
        return (
          <div className="container">
            <div className="status">
              {status}
            </div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
}

export default Board;
