import * as $ from "jquery";

function yueyingketongbi(obj) {

	//var myChart = echarts.init(document.getElementById('QV09'));
	var i = 0;
	var data = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {

		data[i] = {
			"date": value[0].qText,
			"turnover": value[1].qNum,
			"people": value[2].qNum
		};
		i++;
	});
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
			top: 80,
			left: 50,
			bottom: 85
		},
		legend: {
			data: ['营业额', '客流'],
			bottom: '20px',
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
				margin: 22,
				fontSize: 10,
			},
			axisTick: {
				show: false
			},

		}],
		yAxis: [{
			type: 'value',
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