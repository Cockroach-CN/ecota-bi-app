import Fn from "./fn.js";

const getTabData = (tab, opts) => {
    var map = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "list");
    (values || []).map(v => map[v.key] = v.value);
    console.log(tab.key, map);

    const datas = JSON.parse(JSON.stringify(tab.charts || []));
    datas.map((data, i) => {
        datas[i].options = [];
        data.keys.map((key, j) => {
            datas[i].options[j] = Fn[key](opts);
        })
    });
    return datas;
}

const getChartData = (key, opts) => {
    var map = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "info");
    (values || []).map(v => map[v.key] = v.value);
    console.log(key, map);

    return Fn[key](opts);
}

export {
    getTabData,
    getChartData,
};