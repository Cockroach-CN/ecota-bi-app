import {
    option1,
    option2,
    option3,
    option4,
    option5,
    option6
} from "../components/charts/options";


const {
    keys,
    groups
} = window.settings;

const Fn = {
    [keys.DATA_KEY_1]: (options) => option1,
    [keys.DATA_KEY_2]: (options) => option2,
    [keys.DATA_KEY_3]: (options) => option3,
    [keys.DATA_KEY_4]: (options) => option4,
    [keys.DATA_KEY_5]: (options) => option5,
    [keys.DATA_KEY_6]: (options) => option6,
}

const getTabData = (tab, opts) => {
    var aa = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "list");
    console.log(aa[0].value);

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
    var aa = Object.keys(opts).map(key => opts[key]).filter(o => o.class === "info");
    console.log(aa[0].value);
    return Fn[key](opts);
}

export {
    getTabData,
    getChartData,
};