import React from "react";
import ReactDom from "react-dom";
import List from "./components/charts/List.jsx";
import Info from "./components/charts/Info.jsx";
import Detail from "./components/charts/Detail.jsx";
import "./App.less";
import { PAGEMAP } from "./commons/common.js";
import 'antd-mobile/dist/antd-mobile.css';

const settings = window.settings;
const groups = settings.groups;
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: PAGEMAP.LIST,
            options: {
                gkey: groups[0].key,
                ckey: groups[0].charts[0].key,
            },
        }
        this.setPage = this.setPage.bind(this);
        this.setOptions = this.setOptions.bind(this);
    }

    render() {
        let component = null;
        const pageProps = {
            options: this.state.options,
            setPage: this.setPage,
            setOptions: this.setOptions,
        }
        switch (this.state.page) {
            case PAGEMAP.LIST:
                component = <List {...pageProps} />
                break;
            case PAGEMAP.INFO:
                component = <Info {...pageProps} />
                break;
            case PAGEMAP.DETAIL:
                component = <Detail {...pageProps} />
                break;
            default:
                component = <List {...pageProps} />
                break;
        }
        return component;
    }

    setPage(page) {
        this.state.page = page;
        this.setState(this.state);
    }

    setOptions(options) {
        this.state.options = window.merge(this.state.options, options);
        this.setState(this.state);
    }
}

ReactDom.render(<App />, document.getElementById("react-app-root"));



