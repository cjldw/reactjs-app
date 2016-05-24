import React from "react";
import {Provider} from "react-redux";
import {Router, hashHistory} from "react-router";
import Store from "./store";
import Routes from "./routes";


export default class Root extends React.Component {
    render() {
        let store = Store.getStoreWithMiddleware();
        <Provider store={store}>
            <Router routes={Routes}/>
        </Provider>
    }
}
