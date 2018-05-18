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

const Fnc = {
    [keys.DATA_KEY_1]: (options) => option1,
    [keys.DATA_KEY_2]: (options) => option2,
    [keys.DATA_KEY_3]: (options) => option3,
    [keys.DATA_KEY_4]: (options) => option4,
    [keys.DATA_KEY_5]: (options) => option5,
    [keys.DATA_KEY_6]: (options) => option6,
}

const getTabData = (tab, opts) => {
    const datas = JSON.parse(JSON.stringify(tab.charts || []));
    datas.map((data, i) => {
        datas[i].options = [];
        data.keys.map((key, j) => {
            datas[i].options[j] = Fnc[key](opts);
        })
    });
    return datas;
}

const getChartData = (key, opts) => {
    return Fnc[key](opts);
}

export {
    getTabData,
    getChartData,
};