import React from "react";
import ReactDom from "react-dom"
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import echarts from "echarts";
import { PAGEMAP } from "../../commons/common.js";
import { NavBar } from "../elements/Common.jsx";
import { option1, option2, option3, option4, option5, option6 } from "./options.js";
import "./Style.less";

const settings = window.settings;
const groups = settings.groups;
class Index extends React.Component {

    constructor(props) {
        super(props);
        const { gkey, ckey } = props.options;
        const tabs = (groups.filter(g => g.key === gkey)[0] || { charts: [] }).charts
            .map((chart, i) => ({ key: String(chart.key), title: chart.name }));
        this.tabs = tabs;
        this.container = null;
    }

    componentDidMount() {
        this.container = this.refs.container;

    }

    render() {

        return <div ref="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.LIST, this.container)}
                onRightClick={() => null} />
            <Tabs swipeable={false}
                tabs={this.tabs}
                tabBarPosition="bottom"
                page={String(this.props.options.ckey)}
                renderTab={tab => <div>{tab.title}</div>}
                onChange={tab => this.props.setOptions({ ckey: tab.key })}>
                <div ref="tabContent" className="info-tab-content">
                    <div className="content-header">
                        header desc
                    </div>
                    <Panel options={[option1, option6, option3]}></Panel>
                    <Panel options={[option4]} onLarge={() => this.props.setPage(PAGEMAP.DETAIL)}></Panel>
                    {/* <Panel options={[option5, option6]}></Panel> */}
                </div>
            </Tabs>
        </div>
    }
}

export default Index;


class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.key = Math.random();
        this.options = props.options || [];
        this.onLarge = props.onLarge || undefined
    }

    componentDidMount() {
        const { key, options } = this;
        const width = document.body.clientWidth;
        options.map((o, i) => {
            const dom = document.getElementById(`chart-${i}-${key}`);
            dom.style.width = width - 30 + "px";
            const chart = echarts.init(dom);
            chart.setOption(o);
        });
    }

    render() {
        const { key, options, onLarge } = this;
        return (
            <Carousel style={styleTabContent} dots={options.length > 1 ? true : false}>
                {options.map((o, i) =>
                    <div className="content-chart">
                        <div id={`chart-${i}-${key}`}></div>
                        <i style={styleFangda} className="iconfont icon-fangda" onClick={onLarge} />
                    </div>
                )}
            </Carousel>
        );
    }
}

const styleTabContent = {
    margin: "0.05rem",
    width: "calc(100 % - 0.1rem)",
    boxShadow: "0 2px 8px 0 rgba(139,139,139,0.30)",
}

const styleFangda = {
    fontSize: 26,
    position: "absolute",
    right: "0.1rem",
    bottom: "0.1rem",
    zIndex: 99,
}
