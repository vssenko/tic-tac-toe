import ActionTypes from '../consts/action-types';

export function setSquareValue(payload){
    return {type: ActionTypes.SET_SQUARE_VALUE, payload}
}