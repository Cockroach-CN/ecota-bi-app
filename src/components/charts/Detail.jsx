import React from "react";
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import { PAGEMAP } from "../../commons/common.js"

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


const NavBar = ({ onLeftClick, onRightClick }) => <div className="info-navbar">
    <div onClick={onLeftClick}>
        <i style={{ fontSize: 20 }} className="iconfont icon-fanhui"></i>
    </div>
    <div onClick={onRightClick}>
        <Icon type="ellipsis"></Icon>
    </div>
</div>