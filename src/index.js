import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Game from './components/game/game.js';
import store from './store/gameStore';
import './index.css';

  // ========================================
  
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('root')
  );
  