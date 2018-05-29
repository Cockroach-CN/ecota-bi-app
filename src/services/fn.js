import socket from "./socket";
import qsensedata from "./sense/qsensedata.js"
import guolv from "./sense/guolv.js";
export function get_sense_data(key, params) {
    console.log(key, params);
    guolv(params);
    return qsensedata(key, params);
}