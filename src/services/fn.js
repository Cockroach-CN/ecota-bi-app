import socket from "./socket";
import qsensedata from "./sense/qsensedata.js"

export function get_sense_data(key, params) {
    // console.log(key, params);
    return qsensedata(key, params);
}