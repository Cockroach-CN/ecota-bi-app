import Fn from "./fn.js";

const getTabData = async (tab, opts) => {
    var map = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "list");
    (values || []).map(v => map[v.key] = v.value);
    console.log(tab.key, map);

    const datas = JSON.parse(JSON.stringify(tab.lines || []));
    return new Promise(function (resolve, reject) {
        var promises = [];
        datas.map((data, i) => {
            datas[i].options = [];
            (data.charts || []).map((key, j) => {
                promises.push(Fn[key](opts));
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
    });
}

const getChartData = (key, opts) => {
    var map = {};
    var values = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "info");
    (values || []).map(v => map[v.key] = v.value);
    // console.log(key, map);

    return Fn[key](opts);
}

export {
    getTabData,
    getChartData,
};