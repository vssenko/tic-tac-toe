import PLAYER from '../../consts/player';
import STATUS from '../../consts/status';

import React from 'react';
import Board from '../board/board.js';
import './game.css';

export default class Game extends React.Component {
    constructor(){
      super();
      this.state = {
        status: STATUS.inGame,
        currentMove: PLAYER.playerX,
        squares: new Array(9).fill(null)
      };
    };

    setSquare(id){
      if (this.state.status !== STATUS.inGame){
        return;
      }
      const newSquares = Array.from(this.state.squares);
      newSquares[id] = this.state.currentMove;
      this.setState({squares: newSquares}, () => this.checkGame());
    }

    checkGame(){
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
      const squares = this.state.squares;
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return this.setState({status: STATUS.win});
        }
      }

      const nullIndex = squares.indexOf(null);

      if (nullIndex === -1){
       return  this.setState({status: STATUS.draw});
      }

      return this.setNextPlayer();
    }

    setNextPlayer(){
      if (this.state.currentMove === PLAYER.playerX){
        this.setState({currentMove: PLAYER.playerO});
      } else {
        this.setState({currentMove: PLAYER.playerX});
      }
    }

    renderStatus(){
      switch(this.state.status){
        case STATUS.inGame:
          return `Current move ${this.state.currentMove}`;
        case STATUS.win:
          return `Winner is ${this.state.currentMove}`
        case STATUS.draw:
          return 'Draw';
        default:
          return '';
      }
    }

    render() {
      return (
        <div className="game">
          <div className="game-board">
          <div className="status">{this.renderStatus()}</div>
            <Board squares={this.state.squares}
                   currentMove={this.state.currentMove}
                   // checkGame={() => this.checkGame()}
                   setSquare={(id) => this.setSquare(id)}/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }