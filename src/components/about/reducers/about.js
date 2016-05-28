import {handleActions} from "redux-actions";
import { combineReducers } from 'redux';
import {DO_SUBSCRIBE_RESPONSE, DO_SUBSCRIBE_REQUEST, DO_SUBSCRIBE} from "../actions/about";

export default handleActions({
    [DO_SUBSCRIBE_REQUEST]: (state, action) => {
        return Object.assign({}, state, {name: action.payload, age: 1});
    },
    [DO_SUBSCRIBE_RESPONSE]: (state, action) => {
        return Object.assign({}, state, {name: action.payload.author, age: 2});
    }
});


