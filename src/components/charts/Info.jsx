import React from "react";
import {
    Tabs,
    Icon,
    Carousel,
} from "antd-mobile";
import { PAGEMAP } from "../../commons/common.js";

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
        this.container = this.refs.container;
    }

    render() {

        return <div ref="container" className="ecota-container animated slideInLeft">
            <NavBar
                onLeftClick={() => {
                    this.container.className = "ecota-container animated slideOutRight";
                    setTimeout(() => {
                        this.props.setPage(PAGEMAP.LIST);
                    }, 200);
                }}
                onRightClick={() => null} />
            <Tabs swipeable={false}
                tabs={this.state.tabs}
                tabBarPosition="bottom"
                page={String(this.props.options.ckey)}
                renderTab={tab => <div>{tab.title}</div>}
                onChange={tab => this.props.setOptions({ ckey: tab.key })}>
                <div className="info-tab-content">
                    {/* <div className="content-header" style={{ height: 50 }}>
                        header desc
                        <br />
                        header desc
                        <br />
                        header desc
                    </div> */}
                    <Carousel>
                        <div className="content-chart" style={{ boxShadow: "0 2px 8px 0 rgba(139,139,139,0.30)" }}>
                        </div>
                        <div className="content-chart" style={{ boxShadow: "#ccc -1px -1px 1px 1px inset" }}>c2</div>
                    </Carousel>
                    <Carousel>
                        <div className="content-chart">
                            <i style={{
                                fontSize: 26, position: "absolute", right: "0.2rem", bottom: "0.2rem", zIndex: 99,
                            }} className="iconfont icon-fangda"></i>
                        </div>
                        <div className="content-chart">c2</div>
                    </Carousel>
                    <Carousel>
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