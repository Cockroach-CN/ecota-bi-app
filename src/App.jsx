import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import A from "./components/A.jsx";
import B from "./components/B.jsx";
import "./App.less";
import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Router>
            <div>
                <Route path="/a" component={A}></Route>
                <Route path="/b" component={B}></Route>
            </div>
        </Router>
    }
}

ReactDom.render(<App />, document.getElementById("react-app-root"));