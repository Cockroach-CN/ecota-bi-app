import React from "react";
import ReactDom from "react-dom";
import List from "./components/charts/List.jsx";
import Info from "./components/charts/Info.jsx";
import Detail from "./components/charts/Detail.jsx";
import 'animate.css';
import "./App.less";
import "./fonts/iconfont.css";
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
                tkey: groups[0].tabs[0].key,
                ckey: "",
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

    setPage(page, back) {

        let timeout = 0;
        if (back) {
            timeout = 150;
            var container = document.getElementById("container");
            if (container) { container.className = "animated slideOutRight" };
        }
        setTimeout(() => {
            this.state.page = page;
            this.setState(this.state);
            if (!back) {
                var container = document.getElementById("container");
                if (container) { container.className = "animated slideInLeft" };
            }
        }, timeout);
    }

    setOptions(options) {
        this.state.options = window.merge(this.state.options, options);
        this.setState(this.state);
    }
}

ReactDom.render(<App />, document.getElementById("react-app-root"));



