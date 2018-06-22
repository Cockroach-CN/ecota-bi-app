import React from "react";
import ReactDom from "react-dom"
import {
    Tabs,
    Icon,
    Toast,
    Carousel,
} from "antd-mobile";
import echarts from "echarts";
import Filter from "../elements/Filter.jsx";
import { NavBar } from "../elements/Common.jsx";
import { PAGEMAP, getType } from "../../commons/common.js";
import { getTabData, getHeaderData } from "../../services/service.js";
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
                prerenderingSiblingsNumber={0}
                tabBarUnderlineStyle={{ display: "none" }}
                renderTab={tab => <div>{tab.title}</div>}
                onChange={tab => {
                    setOptions({ tkey: tab.key });
                    this.setState({ random: Math.random() });
                }}>
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
        const { lines } = props.tab || [];
        this.state = {
            loading: false,
            unionkey: Math.random(),
            datas: lines,
            headers: [],
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

    async getList() {
        const { tab, opts } = this.props;
        const { unionkey } = this.state;
        const width = document.body.clientWidth;
        try {
            Toast.loading(null, 5);
            if (tab.header) {
                getHeaderData(tab.header, opts).then(result => {
                    var type = getType(result);
                    this.setState({ headers: type === "array" ? result : [] });
                });
            }
            const datas = await getTabData(tab, opts);
            (datas || []).map((data, di) => (data.options || []).map((option, oi) => {
                const dom = document.getElementById(`chart-${di}-${oi}-${unionkey}`);
                if (dom && option) {
                    dom.style.width = width - 40 + "px";
                    const chart = echarts.init(dom);
                    chart.setOption(option);
                }
            }));
        } catch (e) {
            // console.error(e);
            Toast.fail("加载失败！");
        } finally {
            Toast.hide();
        }
    }

    render() {
        const { tab, onLarge } = this.props;
        const { datas, headers, unionkey } = this.state;
        return (
            <div className="info-tab-content">
                {headers.length ?
                    <div className="content-header">
                        {headers.map((header, i) => <div key={i}>
                            <p>{header.name}</p>
                            <span>{header.value}</span>
                        </div>)}
                    </div> : undefined
                }
                {(datas || []).map((data, di) =>
                    <Carousel key={data.key}
                        style={styleTabContent}
                        swiping={(data.charts || []).length > 1 ? true : false}
                        dots={(data.charts || []).length > 1 ? true : false}>
                        {(data.charts || []).map((o, ci) =>
                            <div key={ci} className="content-chart">
                                <div id={`chart-${di}-${ci}-${unionkey}`}></div>
                                {ci === 0 &&
                                    <i style={styleFangda} className="iconfont icon-fangda" onClick={() => onLarge((data.charts || [])[ci])} />}
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
    boxShadow: "0 2px 8px 0 rgba(139,139,139,0.30)"
}

const styleFangda = {
    color: "#666666",
    fontSize: 19,
    position: "absolute",
    right: "0.1rem",
    bottom: "0.08rem",
    zIndex: 999
}

const styleTabTitle = {
    color: "#666666"
}