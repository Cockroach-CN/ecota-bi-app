import {
    get_sense_data
} from "./fn.js";

const getTabData = async (tab, opts) => {
    var params = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "list");
    (values || []).map(v => params[v.key] = v.value);
    console.log(tab.key, params);

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
    var params = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "info");
    (values || []).map(v => params[v.key] = v.value);
    console.log(key, params);

    return get_sense_data(key, params).then(r => {
        console.log(r);
        return r;
    });
}

export {
    getTabData,
    getChartData,
};