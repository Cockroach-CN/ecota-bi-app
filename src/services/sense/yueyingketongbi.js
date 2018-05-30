import * as $ from "jquery";

export default function yueyingketongbi(obj) {

	//var myChart = echarts.init(document.getElementById('QV09'));
	var i = 0;
	var data = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {
		var turnover_ =
			data[i] = {
				"date": value[0].qText,
				"turnover": (value[1].qNum * 100).toFixed(2),
				"people": (value[2].qNum * 100).toFixed(2)
			};
		i++;
	});
	//console.log(JSON.stringify(data));
	var yueyingketongbi = data;
	//data[i]={"date":value[0].qText,"turnover":value[1].qNum,"people":value[2].qNum};
	var date = new Array();
	var turnover = new Array();
	var people = new Array();

	for (var i = 0; i < yueyingketongbi.length; i++) {

		date[i] = yueyingketongbi[i].date;
		turnover[i] = yueyingketongbi[i].turnover;
		people[i] = yueyingketongbi[i].people;
	}
	var option = {
		backgroundColor: '#fff',
		title: {
			text: '近一个月日营业额、客流按周可比同比',
			subtext: '',
			top: '25',
			textStyle: {
				color: '#666666',
				fontSize: 14,

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
			left: '2%',
			right: '2%',
			bottom: '10%',
			top: '20%',
			width: '100%',
			containLabel: true
		},
		legend: {
			data: ['营业额', '客流'],
			bottom: '5%',
		},
		xAxis: [{
			type: 'category',
			data: date,
			axisPointer: {
				type: 'shadow'
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 10,
				fontSize: 10,
				rotate: 45,
				fontWeight: 'bold'
			},
			axisTick: {
				show: false
			},

		}],
		yAxis: [{
			type: 'value',
			min: 0,
			max: 200,
			interval: 40,
			axisLabel: {
				formatter: '{value} %',
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
		series: [{
			name: '营业额',
			type: 'line', //折线图
			data: turnover,
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
					formatter: '{c}%'
				}
			},

		}, {
			name: '客流',
			type: 'line', //折线图
			smooth: true,
			lineStyle: {
				normal: {
					color: '#C14655'
				}
			},
			itemStyle: {
				normal: {
					color: '#C14655',
					borderWidth: 3,
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: '{c}%',
					position: 'bottom'
				}
			},
			data: people


		}]
	};
	return option;

}