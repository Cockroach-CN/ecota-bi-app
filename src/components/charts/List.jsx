import React from "react";
import ReactDom from "react-dom"
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import echarts from "echarts";
import Filter from "../elements/Filter.jsx";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP } from "../../commons/common.js";
import { getTabData } from "../../services/service.js";
import "./Style.less";

const { groups } = window.settings;
class Index extends React.Component {

    constructor(props) {
        super(props);
        const { gkey } = props.options;
        const settingTabs = (groups.filter(g => g.key === gkey)[0] || { tabs: [] }).tabs;
        const tabs = settingTabs.map((tab, i) => ({ key: String(tab.key), title: tab.name }));
        this.state = {
            random: 0,
            showModal: false,
            tabs: tabs || [],
            settingTabs: settingTabs || []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const container = document.getElementById("container");
            container.className = "";
        }, 300);
    }

    render() {
        const { gkey, options, setPage, setOptions } = this.props;
        const { tabs, random, settingTabs } = this.state;
        const { showModal } = this.state;
        return <div id="container" >
            <NavBar
                onLeftClick={() => setPage(PAGEMAP.MAIN, true)}
                onRightClick={() => this.setState({ showModal: true })} />
            <Tabs swipeable={false}
                tabs={tabs}
                tabBarPosition="bottom"
                page={String(options.tkey)}
                renderTab={tab => <div>{tab.title}</div>}
                onChange={tab => setOptions({ tkey: tab.key })}>
                {settingTabs.map(tab =>
                    <Panel key={tab.key}
                        tab={tab}
                        random={random}
                        opts={options.opts}
                        onLarge={(key) => {
                            setOptions({ ckey: key });
                            setPage(PAGEMAP.INFO);
                        }} />
                )}
            </Tabs>
            <Filter type="list"
                visable={showModal}
                opts={options.opts}
                random={random}
                onOk={(opts) => {
                    setOptions({ opts }, () => this.setState({ showModal: false, random: Math.random() }));
                }}
                onClose={() => this.setState({ showModal: false })} />
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
        this.getList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.random !== this.props.random) {
            this.getList();
        }
    }

    getList() {
        const { tab, opts } = this.props;
        const { unionkey } = this.state;
        const width = document.body.clientWidth;
        const datas = getTabData(tab, opts);
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
