import React from "react";
import echarts from "echarts";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP } from "../../commons/common.js";
import { getChartData } from "../../services/service.js";
class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            const container = document.getElementById("container");
            container.className = "";
        }, 300);
        const data = getChartData(this.props.options.ckey);
        const width = document.body.clientWidth;
        const dom = document.getElementById("chart");
        dom.style.width = width + "px";
        const chart = echarts.init(dom);
        chart.setOption(data);
    }

    render() {
        return <div id="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.INFO, true)}
                onRightClick={() => null} />
            <div id="chart" style={styleContent} className="info-tab-content"></div>
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