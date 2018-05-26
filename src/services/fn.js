import socket from "./socket";
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

// const url = "ws://127.0.0.1:8181";
const url = "ws://10.0.1.60:8181";
const Fn = {
    [keys.CHART_KEY_1]: (options) => socket.send(url, option1),
    [keys.CHART_KEY_2]: (options) => socket.send(url, option2),
    [keys.CHART_KEY_3]: (options) => socket.send(url, option3),
    [keys.CHART_KEY_4]: (options) => socket.send(url, option4),
    [keys.CHART_KEY_5]: (options) => socket.send(url, option5),
    [keys.CHART_KEY_6]: (options) => socket.send(url, option6),
}

// export default Fn;


export function get_sense_data(key, params) {
    console.log(key, params);
    return new Promise(function (resolve, reject) {
        resolve(option1);
    })
}