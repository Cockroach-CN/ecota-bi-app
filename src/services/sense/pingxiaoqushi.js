import * as $ from "jquery";

export default function pingxiaoqushi(obj) {
    var data = new Array();

    var i = 0;

    $.each(obj.qHyperCube.qStackedDataPages[0].qData[0].qSubNodes, function (key, value) {
        var shichang_ = value.qSubNodes;
        data[i] = {
            "time": value.qText,
            "value": value.qSubNodes

        };
        i++;
    });
    var d1 = {};
    var shizhi = new Array();
    var keys = new Array();
    //把每个市场所对应的值封装在数组
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].value.length; j++) {

            d1[data[i].value[j].qText] = Number(data[i].value[j].qMaxPos) ? data[i].value[j].qMaxPos.toFixed(2) : 0;

        }
        // console.log(JSON.stringify(d1));
        shizhi[i] = d1;
        d1 = {};
    }
    for (var key in shizhi[0]) {
        keys.push(key);
    }
    var obj = {};
    for (var j = 0; j < keys.length; j++) {
        obj[keys[j]] = [];
        for (var i = 0; i < 5; i++) {
            obj[keys[j]].push(Number(shizhi[i][keys[j]]));

        }
        // for (var i = 0; i < shizhi.length; i++) {
        // obj[keys[j]].push(shizhi[i][keys[j]]);

        // }
    }
    //console.log(JSON.stringify(shizhi));

    var date_ = new Array();
    var value_ = new Array();
    var series = new Array();

    for (var i = 0; i < 5; i++) {

        date_[i] = data[i].time;

        series[i] = {
            name: keys[i],
            type: 'line',
            stack: '总量',
            lineStyle: {
                width: 2
            },

            data: obj[keys[i]]
        };

    }

    var option = {
        animation: false,
        backgroundColor: '#fff',
        title: {
            text: '近五个月坪效趋势',
            subtext: '',
            top: '2%',
            textStyle: {
                color: '#666666',
                fontSize: 16,

            },
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#fff'
                }
            },
            confine: true,
            textStyle: {
                fontSize: 10,
            }
        },
        grid: {
            left: '1%',
            //right: '2%',
            bottom: '10%',
            top: '10%',
            width: '95%',
            height: '78%',
            containLabel: true
        },
        legend: {
            data: keys,
            // orient: 'vertical',
            textStyle: {
                fontSize: 10,
                fontWeight: 'bold'
            },
            itemHeight: 10,

            // right: '0%',
            left: '1%',
            bottom: '0%'
        },
        xAxis: [{
            type: 'category',
            data: date_,
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 5,
                fontSize: 10,
                rotate: 20,
                fontWeight: 'bold'
            },
            axisTick: {
                show: false
            },

        }],
        yAxis: [{
            type: 'value',
            //min: -50,
            //max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value}元',
                margin: 12,
                fontSize: 10,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#9DE1FD',
                    type: 'dashed'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        }],
        series: series
        /* [{
             name: '坪效',
             type: 'line', //折线图
             data: value_,
             smooth: true,
             lineStyle: {
                 normal: {
                     color: '#61A6D3'
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#61A6D3',
                     borderWidth: 3,
                 }
             },
             label: {
                 normal: {
                     show: true,
                     position: 'top',
                     formatter: '{c}元'
                 }
             },
 
         }]*/
    };

    return option;

}