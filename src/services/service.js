import moment from "moment";
import guolv from "./sense/guolv.js";
import qsensedata from "./sense/qsensedata.js";

const date_formart = {
    year: "YYYY",
    month: "YYYYMM",
    date: "YYYYMMDD",
}

const getTabData = async (tab, opts) => {
    var params = getParams(opts);
    await guolv_data(params);
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
    }).then(async r => {
        // console.log(r);
        return r;
    });

}

const getChartData = async (key, opts) => {
    var params = getParams(opts);
    await guolv_data(params);
    return get_sense_data(key, params).then(r => {
        // console.log(r);
        return r;
    });
}

const getHeaderData = async (key, opts) => {
    var params = getParams(opts);
    await guolv_data(params);
    return get_sense_data(key, params).then(r => {
        // console.log(r);
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

export function guolv_data(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                resolve(guolv(params));
            } catch (e) {
                reject(e);
            }
        }.bind(this), 0);
    })
}

function get_sense_data(key, params) {
    // console.log(key, params);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                resolve(qsensedata(key, params));
            } catch (e) {
                reject(e);
            }

        }.bind(this), 0);
    })
}


export {
    getHeaderData,
    getTabData,
    getChartData,
};