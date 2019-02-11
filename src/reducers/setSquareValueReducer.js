import PLAYER from '../consts/player';
import STATUS from '../consts/status';

export default function reducer(state, action){
    if (state.status !== STATUS.inGame){
        return state;
    }
    const newSquares = Array.from(state.squares);
    newSquares[action.payload.id] = state.currentMove;
    const newState = Object.assign({}, state, {squares: newSquares});
    const checkResult = checkGame(newSquares);
    if (checkResult){
        if (checkResult === STATUS.draw){
            newState.status = STATUS.draw;
        } else {
            newState.status = STATUS.win;
        }

        return newState;
    }else{
        newState.currentMove = getNextPlayer(newState.currentMove);
        return newState
    }
}

function checkGame(squares){
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

      const nullIndex = squares.indexOf(null);

      if (nullIndex === -1){
       return  STATUS.draw;
      }

      return null;
}

function getNextPlayer(currentPlayer){
   return currentPlayer === PLAYER.playerX ? PLAYER.playerO : PLAYER.playerX;
}