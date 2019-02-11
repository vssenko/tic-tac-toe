import React from 'react';
import { connect } from 'react-redux';
import Square from '../square/square.js';
import {setSquareValue} from '../../actions';
import './board.css';

export default class Board extends React.Component {
    renderSquare(id) {
      const mapStateToProps = (state) => ({value: state.squares[id]});
      const mapDispatchToProps = (dispatch) => ({squareClick: () => dispatch(setSquareValue({id}))});
      const ConnectedSquare = connect(mapStateToProps, mapDispatchToProps)(Square);
      return <ConnectedSquare/>;
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