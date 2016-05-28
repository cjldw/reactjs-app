import React from "react";
import {connect} from "react-redux";
import {doSubscribeRequest, doSubscribe} from './actions/about';


class About extends React.Component {
    render() {
        let {dispatch, name, age} = this.props;
        return <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button onClick={ (e) => dispatch(doSubscribeRequest("luowen"))}> ClickMe </button>
            <button onClick={ (e) => dispatch(doSubscribe('uuu'))}> SubscribeMe </button>
        </div>;
    }
}


function select(state){
    return state.about;
}

export default connect(select)(About);
