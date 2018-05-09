import React from "react";

class B extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log(this.props);
        return <div>
            A{this.props.match.path}
            <br />
        </div>
    }
}
export default B;   