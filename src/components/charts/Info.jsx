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
    }

    render() {

        return <div className="ecota-container">
            <NavBar onLeftClick={() => this.props.setPage(PAGEMAP.LIST)}
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
                        <div className="content-chart">c1</div>
                        <div className="content-chart">c2</div>
                    </Carousel>
                    <Carousel>
                        <div className="content-chart">c1</div>
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
        <Icon type="left"></Icon>
    </div>
    <div onClick={onRightClick}>
        <Icon type="ellipsis"></Icon>
    </div>
</div>