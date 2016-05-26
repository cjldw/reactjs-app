import React from "react";
import {Link} from "react-router";

export default class Home extends React.Component {
    render() {
        return <div><h1> Hello World</h1>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/intro">Introduction</Link>
            <br/>
            <Link to="/about">about</Link>
            <br/>
            {this.props.children}
            </div>
    }
}
