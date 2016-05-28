import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import {createStore, applyMiddleware, combineReducers} from "redux";
import Reducers from "./reducers";

export default function getStoreWithMiddleware() {
    const logger = loggerMiddleware();
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

    const initState = createStoreWithMiddleware(Reducers);

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./', () => {
      const nextRootReducer = require('./reducers');
      initState.replaceReducer(nextRootReducer);
    });
  }

  return initState;
}


