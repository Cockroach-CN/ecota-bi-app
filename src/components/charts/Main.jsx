import React from "react";
import { PAGEMAP } from "../../commons/common.js";
import "./Style.less";


const settings = window.settings;
const groups = settings.groups;

class Index extends React.Component {

    render() {

        return <div>
            {groups.map(group => <div key={group.key} className="chart-group-item">
                <p>{group.name}</p>
                <div>
                    {group.tabs.map(tab => <div key={tab.key}
                        onClick={() => {
                            this.props.setPage(PAGEMAP.LIST);
                            this.props.setOptions({ gkey: group.key, tkey: tab.key });
                        }}>
                        <img src={require(`../../${tab.imageUrl}`)} alt="icon" />
                        <p>{tab.name}</p>
                    </div>)}
                </div>
            </div>)}
        </div>
    }
}
export default Index;
