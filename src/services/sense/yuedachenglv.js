import * as $ from "jquery";

export default function yuedachenglv(obj) {

	//var myChart = echarts.init(document.getElementById('QV06'));

	var data = new Array();

	var i = 0;
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {
		data[i] = {
			"name": value[0].qText,
			"turnover": value[1].qNum,
			"yusuan": value[2].qNum,
			"dachenglv": value[3].qNum
		};
		i++;
	});

	var yuedachenglv = data;
	//data[i]={"name":value[0].qText,"turnover":value[1].qNum,"yusuan":value[2].qNum,"dachenglv":value[3].qNum};
	var name = new Array();
	var turnover = new Array();
	var yusuan = new Array();
	var dachenglv = new Array();
	for (var i = 0; i < yuedachenglv.length; i++) {
		name[i] = yuedachenglv[i].name;
		turnover[i] = yuedachenglv[i].turnover / 1000000;
		yusuan[i] = yuedachenglv[i].yusuan / 1000000;
		dachenglv[i] = yuedachenglv[i].dachenglv * 100;
	}
	var option = {
		title: {
			//show:'true',
			text: '当月达成率',
			subtext: '',
			left: 'center',
			//left:'5%',
			top: '3%',
			textStyle: {
				color: '#666666',
				fontSize: 14,

			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
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
			top: '20%',
			width: '100%',
			//height: 200,
			containLabel: true
		},
		legend: {
			data: ['销售额', '预算额', '达成率'],
			bottom: '5%'
		},
		xAxis: [{
			type: 'category',
			data: name,
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
		yAxis: [

			{
				type: 'value',
				name: '销售额/预算',
				min: 0,
				max: 30,
				interval: 6,
				axisLabel: {
					formatter: '{value}百万',
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
			},
			{
				type: 'value',
				name: '达成率',
				min: 0,
				max: 20,
				interval: 4,
				axisLabel: {
					formatter: '{value} %',
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
			}
		],
		series: [{
			name: '销售额',
			type: 'bar',
			data: turnover,
			barWidth: 12,
			itemStyle: {
				normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#EF8A62',
				}
			}
		},
		{
			name: '预算额',
			type: 'bar',
			data: yusuan,
			barWidth: 12,
			itemStyle: {
				normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#2166AC',
				}
			}
		},
		{
			name: '达成率',
			type: 'line',
			yAxisIndex: 1,
			data: dachenglv,

			itemStyle: {
				normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#B2182B ',
				}
			}
		}
		]
	};
	return option;
}