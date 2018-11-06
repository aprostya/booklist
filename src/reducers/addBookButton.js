import * as types from '../actions/types';

export default function addBookButton(state = { isActive: false }, action) {
    switch (action.type) {
        case types.SET_ADD_BTN_ACTIVE:
            return { ...state, isActive: action.isActive }
        default:
            return state;
    }
}
