import PLAYER from '../consts/player';
import STATUS from '../consts/status';
import ACTION_TYPE from '../consts/action-types';
import setSquareValueReducer from './setSquareValueReducer';

const actionReducerMap = {
    [ACTION_TYPE.SET_SQUARE_VALUE]: setSquareValueReducer
};

const initialState = {
    status: STATUS.inGame,
    currentMove: PLAYER.playerX,
    squares: new Array(9).fill(null)
};

function reducer(state = initialState, action){
    const customReducer = actionReducerMap[action.type];
    if (customReducer){
        return customReducer(state, action);
    }

    return state;
}

export default reducer;