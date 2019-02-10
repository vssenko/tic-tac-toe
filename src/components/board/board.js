import React from 'react';
import Square from '../square/square.js'
import './board.css';

export default class Board extends React.Component {
  constructor(props){
    super();
    this.state = {
      currentMove: props.currentMove,
      squares: props.squares
    };
  }

    squareClickHandler(id){
      return this.props.setSquare(id);
    }

    renderSquare(i) {
      return <Square id={i} value={this.props.squares[i]} squareClick={(id) => this.squareClickHandler(id)}/>;
    }
  
    render() {
      return (
        <div>
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
  }