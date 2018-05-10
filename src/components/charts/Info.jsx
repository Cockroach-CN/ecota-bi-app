import React from "react";

class Index extends React.Component {
    render() {
        return <div onClick={() => this.props.setPage("list")} >Info{this.props.options.gkey}--{this.props.options.ckey}</div>
    }
}

export default Index;