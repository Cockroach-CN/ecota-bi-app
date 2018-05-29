import * as $ from "jquery";

export default function yuepingxiaopaiming(obj) {
	//var myChart = echarts.init(document.getElementById('QV07'));
	var i = 0;
	var data = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {

		data[i] = {
			"name": value[0].qText,
			"value": value[1].qNum
		};
		i++;
	});
	var yuepingxiaopaiming = data;

	//data[i]={"name":value[0].qText,"value":value[1].qNum};
	var name = new Array();
	var value = new Array();
	for (var i = 0; i < yuepingxiaopaiming.length; i++) {

		name[i] = yuepingxiaopaiming[i].name;
		value[i] = yuepingxiaopaiming[i].value;
	}
	var option = {
		backgroundColor: '#fff',
		title: {
			text: '近一个月区域市场坪效排名',
			subtext: '',
			left: 'center',
			top: '3%',
			textStyle: {
				color: '#666666',
				fontSize: 14,

			},
		},
		tooltip: {
			trigger: 'axis',
			confine: true,
			textStyle: {
				fontSize: 10,
			}
		},
		grid: {
			left: '3%',
			right: '5%',
			bottom: '5%',
			top: '20%',
			containLabel: true
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			data: name,
			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 22,
				rotate: 50,
				fontSize: 10,
			},
			axisTick: {
				show: false
			},
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				formatter: '{value} 元',
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
			name: '坪效排名',
			type: 'bar',
			//data:value,
			data: [80, 360, 200, 334, 260, 330, 220, 100, 150, 250].sort(function (x, y) {
				return y - x;
			}),
			barWidth: 12,
			itemStyle: {
				normal: {
					color: '#61A6D3',
					barBorderRadius: [5, 5, 0, 0],
				}
			},
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				},
				{
					type: 'min',
					name: '最小值'
				}
				]
			},
			markLine: {
				label: {
					normal: {
						position: 'middle'
					}
				},
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}]
	};
	return option;
}