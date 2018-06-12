
import huiyuankapaiming from "./huiyuankapaiming.js";
import yueyusuanwanchenglv from "./yueyusuanwanchenglv.js";
import rileijidachenglv from "./rileijidachenglv.js";
import yuedachenglv from "./yuedachenglv.js";
import yuepingxiaopaiming from "./yuepingxiaopaiming.js";
import yueyingkehuanbi from "./yueyingkehuanbi.js";
import yueyingketongbi from "./yueyingketongbi.js";
import yueyingyeetongbi from "./yueyingyeetongbi.js";
import pingxiaoqushi from "./pingxiaoqushi.js";
import kpi from "./kpi.js";



var data_id = ["LYJsJyJ", "eeUdGe", "kFJrN", "HyxrDw", "HyQJJ", "BmsqW", "umCTV", "LvWmjQg", "HYpwwB", "RaWzaX", "vNHp"];//bendi

var data_sx = { "区域市场名称": [], "门店名称": [], "营业日期": "" };

var str = new Array();

var result_id = new Array();
//排序
function bubbleSort(array) {
    var i = 0, len = array.length, j, d; for (; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (array[i] < array[j]) {
                d = array[j]; array[j] = array[i]; array[i] = d;
            }
        }
    }
    return array;
}

function data3_change(d3, qFieldName) {
    d3.params.qFieldName = qFieldName;
    return d3;
}

function data4_change(d4, h, qFieldValues) {
    d4.params.qFieldValues = qFieldValues;
    d4.handle = h;
    return d4;

}
function data6_change(d6, h, qMatch) {
    d6.handle = h;

    d6.params.qMatch = qMatch;
    return d6;

}

export default function qsensedata(id, params) {
    //OpenDoc
    var data0 = {
        "method": "OpenDoc",
        "id": 1,
        "handle": -1,
        "params": [
            "141ad079-eadf-493e-b2d4-6f5fb846df1e"
        ]
    };
    //ClearAll
    var data5 = {
        "handle": 1,
        "method": "ClearAll",
        "id": 6,
        "params": {
            "qLockedAlso": false,
            "qStateName": ""
        }
    };
    //GetObject
    var data1 = {
        "handle": 1,
        "id": 2,
        "method": "GetObject",
        "params": {
            "qId": ""
        }
    };

    var data2 = {
        "handle": 2,
        "method": "GetLayout",
        "params": {},
        "outKey": -1,
        "id": 3
    };
    var data3 = {
        "handle": 1,
        "method": "GetField",
        "params": {
            "qFieldName": "",
            "qStateName": ""
        },
        "id": 4
    };
    var data4 = {
        "handle": 2,
        "method": "SelectValues",
        "id": 5,
        "params": {
            "qFieldValues": [],
            "qToggleMode": false,
            "qSoftLock": false
        }
    };


    var data6 = {
        "handle": 2,
        "method": "Select",
        "params": {
            "qMatch": "",
            "qSoftLock": false,
            "qExcludedValuesMode": 0
        },
        "outKey": -1,
        "id": 7
    };

    return new Promise(function (resolve, reject) {
        try {
            var socket = new WebSocket("ws://124.205.55.164/app/");
            socket.addEventListener('open', function (event) {
                //向GetObject中加id
                socket.send(JSON.stringify(data0));
            });

            // Listen for messages
            socket.addEventListener('message', function (event) {
                var option = null;
                // console.log('Message from server', event.data);
                var s = event.data;
                var flag = 0;
                if (JSON.parse(s).result != undefined) {
                    result_id.push(JSON.parse(s).id);
                }
                if (JSON.parse(s).id == 1 && JSON.parse(s).result != undefined) {
                    socket.send(JSON.stringify(data5));
                }
                //判断是否有筛选条件
                //  if(data_sx.区域市场名称.length!=0 || data_sx.门店名称.length!=0 || data_sx.营业日期.length!=0){
                //alert(123);
                var ym = ["区域市场名称", "门店名称", "营业日期"];
                var sc = params.区域市场名称;
                var md = params.门店名称;
                var yyrq = params.营业日期;
                var sc_values = new Array();
                var md_values = new Array();
                var yyrq_values = new Array()
                if (sc) {
                    for (var i = 0; i < sc.length; i++) {
                        sc_values[i] = {
                            "qText": sc[i],
                            "qIsNumeric": false,
                            "qNumber": 0
                        };

                    }
                }
                if (md) {
                    for (var i = 0; i < md.length; i++) {
                        md_values[i] = {
                            "qText": md[i],
                            "qIsNumeric": false,
                            "qNumber": 0
                        };

                    }
                }

                if (JSON.parse(s).id == 6 && JSON.parse(s).result != undefined) {
                    for (var i = 0; i < ym.length; i++) {
                        if (ym[i] == "营业日期") {
                            data3.id = 10;
                            socket.send(JSON.stringify(data3_change(data3, "营业日期")));
                        } else {
                            data3.id = 8 + i;
                            socket.send(JSON.stringify(data3_change(data3, ym[i])));
                        }
                    }
                }

                if (JSON.parse(s).id == 8 && JSON.parse(s).result != undefined) {
                    var h = JSON.parse(s).result.qReturn.qHandle;
                    socket.send(JSON.stringify(data4_change(data4, h, sc_values)));
                }

                if (JSON.parse(s).id == 9 && JSON.parse(s).result != undefined) {
                    var h = JSON.parse(s).result.qReturn.qHandle;
                    socket.send(JSON.stringify(data4_change(data4, h, md_values)));
                }

                if (JSON.parse(s).id == 10 && JSON.parse(s).result != undefined) {
                    var h = JSON.parse(s).result.qReturn.qHandle;
                    socket.send(JSON.stringify(data6_change(data6, h, yyrq)));
                }

                if (JSON.parse(s).id == 7 && JSON.parse(s).result != undefined) {
                    data1.params.qId = id;
                    socket.send(JSON.stringify(data1));
                }

                if (JSON.parse(s).id == 2 && JSON.parse(s).result != undefined) {
                    var a = JSON.parse(s).result.qReturn.qHandle;
                    data2.handle = a;
                    socket.send(JSON.stringify(data2));
                }

                if (JSON.parse(s).result && JSON.parse(s).result.qLayout) {
                    // if ((1 + 1) === 2) {
                    if (JSON.parse(s).result.qLayout.title == "会员卡售卡排名") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qDataPages[0].qMatrix;
                        // console.log('huiyuankapaiming', JSON.stringify(data));
                        option = huiyuankapaiming(data);
                    }

                    if (JSON.parse(s).result.qLayout.title == "近一个月日营业额、客流按周可比同比") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qDataPages[0].qMatrix;
                        // console.log('yueyingketongbi', JSON.stringify(data));
                        option = yueyingketongbi(data);
                    }

                    if (JSON.parse(s).result.qLayout.title == "月营业额可比同比") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout;
                        // console.log('yueyingyeetongbi', JSON.stringify(data));
                        option = yueyingyeetongbi(data);
                    }


                    if (JSON.parse(s).result.qLayout.title == "当月预算完成率") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout;
                        // console.log('yuewanchenglv', JSON.stringify(data));
                        option = yueyusuanwanchenglv(data);
                    }

                    if (JSON.parse(s).result.qLayout.title == "日累计达成率") {
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qDataPages[0].qMatrix;
                        // console.log('rileijidachenglv', JSON.stringify(data));
                        option = rileijidachenglv(data);
                    }

                    if (JSON.parse(s).result.qLayout.title == "当月达成率") {
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qDataPages[0].qMatrix;
                        // console.log('yuedachenglv', JSON.stringify(data));
                        option = yuedachenglv(data);

                    }

                    if (JSON.parse(s).result.qLayout.title == "当日营业额") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qGrandTotalRow;
                        var data_1 = new Array();

                        // $('#QV01').text(data[0]);
                    }

                    if (JSON.parse(s).result.qLayout.title == "当月营业额") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qGrandTotalRow;
                        var data_1 = new Array();
                    }

                    if (JSON.parse(s).result.qLayout.title == "近一个月日营业额、客流按周可比环比") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qDataPages[0].qMatrix;
                        // console.log('yueyingkehuanbi', JSON.stringify(data));
                        option = yueyingkehuanbi(data);

                    }

                    if (JSON.parse(s).result.qLayout.title == "近一个月区域市场坪效排名") {
                        var i = 0;
                        var data = JSON.parse(s).result.qLayout.qHyperCube.qDataPages[0].qMatrix;
                        // console.log('yuepingxiaopaiming', JSON.stringify(data));
                        option = yuepingxiaopaiming(data);

                    }
                    console.log(option);
                    resolve(option);
                }
                // socket.close();
            });

            socket.onclose = function (evt) {
                console.log("Connection closed.");
            };

        } catch (e) {
            reject(e);
        }
    });
}