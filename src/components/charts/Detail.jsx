import React from "react";
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP } from "../../commons/common.js";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.container = null;
    }

    componentDidMount() {
        this.container = this.refs.container;
    }

    render() {
        return <div ref="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.INFO, this.container)}
                onRightClick={() => null} />
        </div>
    }
}
export default Index;
