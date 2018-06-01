import 'animate.css';
import 'babel-polyfill';
import "./App.less";
import "./fonts/iconfont.css";
import 'antd-mobile/dist/antd-mobile.css';
import React from "react";
import ReactDom from "react-dom";
import Main from "./components/charts/Main.jsx";
import List from "./components/charts/List.jsx";
import Info from "./components/charts/Info.jsx";
import { PAGEMAP } from "./commons/common.js";

const { groups, filters } = window.settings;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: PAGEMAP.MAIN,
            options: {
                gkey: groups[0].key,
                tkey: groups[0].tabs[0].key,
                ckey: "",
                opts: {},
            },
        }
        this.setPage = this.setPage.bind(this);
        this.setOptions = this.setOptions.bind(this);
    }

    componentDidMount() {
        (filters || []).map(f => {
            this.state.options.opts[f.key] = {
                key: f.key,
                type: "date",
                operate_type: f.type,
                whole: true,
                class: f.class,
                value: f.type === "btn" ? [] : "",
            }
        });
        this.setState(this.state);
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
            case PAGEMAP.MAIN:
                component = <Main {...pageProps} />
                break;
            default:
                component = <Main {...pageProps} />
                break;
        }
        return component;
    }

    setPage(page, back) {
        let timeout = 0;
        if (back) {
            timeout = 150;
            var container = document.getElementById("container");
            if (container) {
                const className = "animated " + (page === PAGEMAP.LIST ? "zoomOut" : "slideOutRight");
                container.className = className;
            };
        }
        setTimeout(() => {
            this.state.page = page;
            this.setState(this.state);
            if (!back) {
                var container = document.getElementById("container");
                if (container) {
                    const className = "animated " + (page === PAGEMAP.INFO ? "zoomIn" : "slideInLeft");
                    container.className = className;
                };
            }
        }, timeout);
    }

    setOptions(options, back) {
        this.state.options = window.merge(this.state.options, options);
        this.setState(this.state, () => back && back());
    }
}

ReactDom.render(<App />, document.getElementById("react-app-root"));



