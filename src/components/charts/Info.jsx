import React from "react";
import echarts from "echarts";
import Filter from "../elements/Filter.jsx";
import { o2o } from "../../commons/common.js"
import { Toast } from "antd-mobile";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP } from "../../commons/common.js";
import { getChartData } from "../../services/service.js";
class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            params: o2o(this.props.options.opts),
            random: 0,
            loading: false,
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

    async getData() {
        const { ckey } = this.props.options;
        try {
            Toast.loading();
            const data = await getChartData(ckey, this.state.params);
            const width = document.body.clientWidth;
            const dom = document.getElementById("chart");
            if (dom && data) {
                dom.style.width = width + "px";
                const chart = echarts.init(dom);
                chart.setOption(data);
            }
        } catch (e) {
            // console.error(e);
            Toast.fail("加载失败！");
        } finally {
            Toast.hide();
        }
    }

    render() {
        const { params, random, showModal } = this.state;
        return <div id="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.LIST, true)}
                onRightClick={() => this.setState({ showModal: true })} />
            <div id="chart" style={styleContent} className="info-tab-content"></div>
            <Filter type="info"
                opts={params}
                random={random}
                visable={showModal}
                onOk={(params) => this.setState({ params }, () => {
                    this.getData();
                    this.setState({ random: Math.random(), showModal: false })
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
