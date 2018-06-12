import * as $ from "jquery";

export default function yueyingkehuanbi(obj) {
	//var myChart = echarts.init(document.getElementById('QV08'));

	var i = 0;
	var data_ = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {

		data_[i] = {
			"date": value[0].qText,
			"turnover": ((value[1].qNum || 0) * 100).toFixed(2),
			"people": ((value[2].qNum || 0) * 100).toFixed(2)
		};
		i++;

	});
	var yueyingkehuanbi = data_;
	//data[i]={"date":value[0].qText,"turnover":value[1].qNum,"people":value[2].qNum};
	var date = new Array();
	var turnover = new Array();
	var people = new Array();

	var date_ = new Array();
	var turnover_ = new Array();
	var people_ = new Array();
	for (var i = 0; i < 30; i++) {

		date[i] = yueyingkehuanbi[i].date;
		turnover[i] = yueyingkehuanbi[i].turnover;
		people[i] = yueyingkehuanbi[i].people;
	}
	date_ = [date[29], date[22], date[15], date[8]];
	turnover_ = [turnover[29], turnover[22], turnover[15], turnover[8]];
	people_ = [people[29], people[22], people[15], people[8]];

	var option = {
		animation: false,
		backgroundColor: '#fff',
		title: {
			text: '近一个月日营业额、客流按周可比环比',
			subtext: '',
			top: '5%',
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
			textStyle: {
				fontSize: 10,
			}
		},
		grid: {
			left: '2%',
			right: '2%',
			bottom: '10%',
			top: '15%',
			width: '90%',
			height: '80%',
			containLabel: true
		},
		legend: {
			data: ['营业额', '客流'],
			bottom: '3%',
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
				margin: 10,
				fontSize: 10,
				rotate: 15,
				fontWeight: 'bold'
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
			data: turnover_,
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
			data: people_,


		}]
	};
	return option;
}