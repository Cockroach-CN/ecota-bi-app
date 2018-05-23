import qsocks from "qsocks";
import {
    option1,
    option2,
    option3,
    option4,
    option5,
    option6
} from "../components/charts/options";
const {
    keys
} = window.settings;

const Fn = {
    [keys.DATA_KEY_1]: (options) => option1,
    [keys.DATA_KEY_2]: (options) => option2,
    [keys.DATA_KEY_3]: (options) => option3,
    [keys.DATA_KEY_4]: (options) => option4,
    [keys.DATA_KEY_5]: (options) => option5,
    [keys.DATA_KEY_6]: (options) => option6,
}

export default Fn;


window.onload = function () {
    var ws = new WebSocket("ws://localhost:8181");
    ws.onopen = function () {
        console.warn("onopen");
        ws.send("Hello!");
    }

    ws.onmessage = function (evt) {
        console.warn("onmessage");
        console.warn(evt);
    }

    ws.onerror = function (evt) {
        console.warn("onerror");
    };
}