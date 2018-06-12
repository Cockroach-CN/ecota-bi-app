import * as $ from "jquery";

export default function kpi(obj) {

    var data = new Array();

    var i = 0;
    $.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {
        data[i] = {
            "name": "当日营业额（万）",
            "value": ((value[0].qNum || 0) / 10000).toFixed(2)

        };
        data[i + 1] = {
            "name": "当月营业额（万）",
            "value": ((value[1].qNum || 0) / 10000).toFixed(2)
        };
        i++;
    });

    return data;
}