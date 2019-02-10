import React from 'react';
import './square.css';

export default class Square extends React.Component {
    constructor(props){
        super();
        this.state = {
            id: props.id
        };
    }

    render() {
      return (
        <button className="square" onClick={() => this.props.squareClick(this.state.id)}>
          {this.props.value}
        </button>
      );
    }
  }