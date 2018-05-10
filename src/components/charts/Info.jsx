import React from "react";
import {
    Tabs,
} from "antd-mobile";

const settings = window.settings;
const groups = settings.groups;
class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            tabs: [],
        }
    }

    componentDidMount() {
        const { options } = this.props;
        const charts = (groups.filter(g => g.key === options.gkey)[0] || { charts: [] }).charts;
        this.state.tabs = charts.map((chart, i) => {
            if (chart.key === options.ckey) {
                this.state.tabIndex = i;
            }
            return ({ title: chart.name, sub: chart.key });
        });
        this.setState(this.state);
    }


    render() {
        return <div className="ecota-container">
            <Tabs swipeable={false}
                initialPage={this.state.tabIndex}
                tabs={this.state.tabs}
                tabBarPosition="bottom"
                // tabBarUnderlineStyle={{ display: "none" }}
                renderTab={(tab) => <div>{tab.title}</div>}
                onChange={(tab, index) => this.props.setOptions({ ckey: tab.sub })}>
                {this.props.options.gkey + "--" + this.props.options.ckey}
            </Tabs>
        </div>
    }
}

export default Index;