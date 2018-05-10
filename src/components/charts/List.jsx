import React from "react";
import { PAGEMAP } from "../../commons/common.js";
import "./Style.less";

const settings = window.settings;
const groups = settings.groups;

class Index extends React.Component {

    render() {

        return <div className="ecota-container">
            {groups.map(group => <div key={group.key} className="chart-group-item">
                <p>{group.name}</p>
                <div>
                    {group.charts.map(chart => <div key={chart.key}
                        onClick={() => {
                            this.props.setPage(PAGEMAP.INFO);
                            this.props.setOptions({ gkey: group.key, ckey: chart.key });
                        }}>
                        <img src={require(`../../${chart.imageUrl}`)} alt="icon" />
                        <p>{chart.name}</p>
                    </div>)}
                </div>
            </div>)}
        </div>
    }
}
export default Index;
