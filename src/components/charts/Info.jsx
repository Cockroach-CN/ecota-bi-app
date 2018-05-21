import React from "react";
import echarts from "echarts";
import Filter from "../elements/Filter.jsx";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP } from "../../commons/common.js";
import { getChartData } from "../../services/service.js";
class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            random: 0,
            showModal: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const container = document.getElementById("container");
            container.className = "";
        }, 300);
        this.getData();
    }

    getData() {
        const { ckey, opts } = this.props.options
        const data = getChartData(ckey, opts);
        const width = document.body.clientWidth;
        const dom = document.getElementById("chart");
        dom.style.width = width + "px";
        const chart = echarts.init(dom);
        chart.setOption(data);
    }

    render() {
        const { random, showModal } = this.state;
        return <div id="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.LIST, true)}
                onRightClick={() => this.setState({ showModal: true })} />
            <div id="chart" style={styleContent} className="info-tab-content"></div>
            <Filter type="info"
                random={random}
                visable={showModal}
                opts={this.props.options.opts}
                onOk={(opts) => this.props.setOptions({ opts }, () => {
                    this.getData();
                    this.setState({ random: Math.random(), showModal: false });
                })}
                onClose={() => this.setState({ showModal: false })} />
        </div>
    }
}
export default Index;


const styleContent = {
    height: "calc(100% - 0.39rem)",
    width: "100%",
    background: "#FFF",
    paddingTop: "0.39rem",
    // padding: "0.1rem",
    // margin: "0.05rem",
    // width: "calc(100 % - 0.1rem)",
    // boxShadow: "0 2px 8px 0 rgba(139,139,139,0.30)",
}