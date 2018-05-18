import React from "react";
import ReactDom from "react-dom"
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import echarts from "echarts";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP } from "../../commons/common.js";
import { getTabData } from "../../services/service.js";
import "./Style.less";

const { groups } = window.settings;
class Index extends React.Component {

    constructor(props) {
        super(props);
        const { gkey, tkey } = props.options;
        const settingTabs = (groups.filter(g => g.key === gkey)[0] || { tabs: [] }).tabs;
        const tabs = settingTabs.map((tab, i) => ({ key: String(tab.key), title: tab.name }));
        this.container = null;
        this.tabs = tabs || [];
        this.settingTabs = settingTabs;
    }

    componentDidMount() {
        this.container = this.refs.container;
    }

    render() {

        const { gkey } = this.props;
        const { tabs, settingTabs, container } = this;
        return <div ref="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.LIST, container)}
                onRightClick={() => null} />
            <Tabs swipeable={false}
                tabs={tabs}
                tabBarPosition="bottom"
                page={String(this.props.options.tkey)}
                renderTab={tab => <div>{tab.title}</div>}
                onChange={tab => this.props.setOptions({ tkey: tab.key })}>
                {settingTabs.map(tab =>
                    <Panel key={tab.key} tab={tab} onLarge={(key) => {
                        this.props.setOptions({ ckey: key });
                        this.props.setPage(PAGEMAP.DETAIL);
                    }} />
                )}
            </Tabs>
        </div>
    }
}

export default Index;


class Panel extends React.Component {

    constructor(props) {
        super(props);
        const { charts } = props.tab || [];
        this.state = {
            unionkey: Math.random(),
            datas: charts,
        }
    }

    componentDidMount() {
        const { tab } = this.props;
        const { unionkey } = this.state;
        const width = document.body.clientWidth;
        const datas = getTabData(tab, {});
        datas.map((data, di) => data.options.map((option, oi) => {
            const dom = document.getElementById(`chart-${di}-${oi}-${unionkey}`);
            dom.style.width = width - 30 + "px";
            const chart = echarts.init(dom);
            chart.setOption(option);
        }));
    }

    render() {
        const { tab, onLarge } = this.props;
        const { datas, unionkey } = this.state;
        return (
            <div className="info-tab-content">
                <div className="content-header">{tab.header}</div>
                {datas.map((data, di) =>
                    <Carousel key={data.key} style={styleTabContent} dots={(data.keys || []).length > 1 ? true : false}>
                        {(data.keys || []).map((o, ci) =>
                            <div key={ci} className="content-chart">
                                <div id={`chart-${di}-${ci}-${unionkey}`}></div>
                                {ci === 0 &&
                                    <i style={styleFangda} className="iconfont icon-fangda" onClick={() => onLarge((data.keys || [])[ci])} />}
                            </div>
                        )}
                    </Carousel>
                )}
            </div>
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
