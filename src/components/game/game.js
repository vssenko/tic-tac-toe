import STATUS from '../../consts/status';
import {connect} from 'react-redux';
import React from 'react';
import Board from '../board/board.js';
import './game.css';

const mapStateToProps = (state) => ({status: state.status, currentMove: state.currentMove});

class Game extends React.Component {
    renderStatus(){
      switch(this.props.status){
        case STATUS.inGame:
          return `Current move ${this.props.currentMove}`;
        case STATUS.win:
          return `Winner is ${this.props.currentMove}`
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
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default connect(mapStateToProps)(Game);