import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "react-logger";
import {createStore, applyMiddleware, combileReducers} from "redux";
import Reducers from "./reducers";

export default function getStoreWithMiddleware() {
    let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware());
    return createStore(Reducers, createStoreWithMiddleware);
}


