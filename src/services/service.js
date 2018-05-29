import moment from "moment";
import {
    get_sense_data
} from "./fn.js";

const date_formart = {
    year: "YYYY",
    month: "YYYYMM",
    date: "YYYYMMDD",
}

const getTabData = async (tab, opts) => {
    var params = getParams(opts);

    const datas = JSON.parse(JSON.stringify(tab.lines || []));
    return new Promise(function (resolve, reject) {
        var promises = [];
        datas.map((data, i) => {
            datas[i].options = [];
            (data.charts || []).map((key, j) => {
                promises.push(get_sense_data(key, params));
            });
        });
        Promise.all(promises).then(function (os) {
            var index = 0;
            datas.map((data, i) => (data.charts || []).map((key, j) => {
                datas[i].options[j] = os[index];
                index++;
            }));
            resolve(datas);
        });
    }).then(r => {
        console.log(r);
        return r;
    });
}

const getChartData = (key, opts) => {
    var params = getParams(opts);

    return get_sense_data(key, params).then(r => {
        console.log(r);
        return r;
    });
}

const getParams = (opts) => {
    var params = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "list" || o.class === "both");
    (values || []).map(v => {
        if (v.operate_type === "time") {
            params[v.key] = v.value ? moment(v.value).format(date_formart[v.type]) : v.value;
        } else {
            params[v.key] = v.value
        }
    });
    return params;
}


export {
    getTabData,
    getChartData,
};