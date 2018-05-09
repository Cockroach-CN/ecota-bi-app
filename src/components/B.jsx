import React from "react";
import * as qsocks from "../services/qsocks.bundle";

class B extends React.Component {

    componentDidMount() {
        console.log(qsocks);
    }

    render() {
        return <div>B{this.props.p}</div>
    }
}
export default B;