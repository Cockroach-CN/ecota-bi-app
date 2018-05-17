import React from "react";
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import echarts from "echarts";
import { PAGEMAP } from "../../commons/common.js";

const option = {
    backgroundColor: "#000",
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}

const option2 = {
    backgroundColor: '#000',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 274, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

const settings = window.settings;
const groups = settings.groups;
class Index extends React.Component {

    constructor(props) {
        super(props);
        const { gkey, ckey } = props.options;
        const tabs = (groups.filter(g => g.key === gkey)[0] || { charts: [] }).charts
            .map((chart, i) => ({ key: String(chart.key), title: chart.name }));
        this.state = {
            tabs: tabs,
        }
        this.container = null;
    }

    componentDidMount() {
        const width = document.getElementById("tab-content").clientWidth;
        this.container = this.refs.container;
        const aa = document.getElementById("chart1");
        aa.style.width = width - 10 + "px";
        const chart1 = echarts.init(aa);
        chart1.setOption(option2);
        const bb = document.getElementById("chart2");
        bb.style.width = width - 10 + "px";
        const chart2 = echarts.init(bb);
        chart2.setOption(option);
    }

    render() {

        return <div ref="container">
            <NavBar
                onLeftClick={() => this.props.setPage(PAGEMAP.LIST, this.container)}
                onRightClick={() => null} />
            <Tabs swipeable={false}
                tabs={this.state.tabs}
                tabBarPosition="bottom"
                page={String(this.props.options.ckey)}
                renderTab={tab => <div>{tab.title}</div>}
                onChange={tab => this.props.setOptions({ ckey: tab.key })}>
                <div id="tab-content" className="info-tab-content">
                    {/* <div className="content-header" style={{ height: 50 }}>
                        header desc
                        <br />
                        header desc
                        <br />
                        header desc
                    </div> */}
                    <Carousel style={styleTabContent}>
                        <div className="content-chart"></div>
                        <div className="content-chart">c2</div>
                    </Carousel>
                    <Carousel style={styleTabContent}>
                        <div className="content-chart">
                            <div id="chart1" style={{ height: "100%" }}></div>
                            <i onClick={() => this.props.setPage(PAGEMAP.DETAIL)}
                                style={{
                                    fontSize: 26, position: "absolute", right: "0.2rem", bottom: "0.2rem", zIndex: 99,
                                }} className="iconfont icon-fangda"></i>
                        </div>
                        <div id="chart2" className="content-chart">c2</div>
                    </Carousel>
                    <Carousel style={styleTabContent}>
                        <div className="content-chart">c1</div>
                        <div className="content-chart">c2</div>
                    </Carousel>
                </div>
            </Tabs>
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

const styleTabContent = {
    margin: "0.05rem",
    width: "calc(100 % - 0.1rem)",
    boxShadow: "0 2px 8px 0 rgba(139,139,139,0.30)",
}