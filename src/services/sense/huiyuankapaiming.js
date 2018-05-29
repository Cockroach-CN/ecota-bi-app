import * as $ from "jquery";

function huiyuankapaiming(obj) {
	var i = 0;
	var data = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {

		data[i] = {
			'name': value[0].qText,
			"value": (value[1].qNum * 100).toFixed(2)
		};
		i++;
	});
	var huiyuankapaiming = data;
	//data[i]={'name':value[0].qText,"value":value[1].qNum};
	var name = new Array();
	var value = new Array();
	for (var i = 0; i < huiyuankapaiming.length; i++) {
		name[i] = huiyuankapaiming[i].name;
		value[i] = huiyuankapaiming[i].value;
	}
	var option = {
		animation: true,
		title: {
			//show:'true',
			text: '会员卡售卡排名',
			subtext: '20180523',
			left: 'center',
			//left:'5%',
			//top:'1%',
			textStyle: {
				color: '#666666',
				fontSize: 14,

			},
		},
		grid: {
			top: '10%',
			left: '15%',
			right: '5%',
			bottom: '23%',
			containLabel: false
		},
		legend: {
			show: false
		},
		yAxis: [{
			type: 'value',
			name: '达成率',
			min: 0,
			max: 400,
			interval: 50,
			axisLabel: {
				formatter: '{value}%',
				fontSize: 8
			},

			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: true,
				//formatter: '{value}%',
				lineStyle: {
					color: '#9DE1FD',
					type: 'dashed'
				}
			},

			splitArea: {
				show: true,
				areaStyle: {
					color: ['rgba(255,255,255,0.15)', 'rgba(0,0,0,0)']
				}
			}
		}],
		xAxis: {
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				interval: 0,
				rotate: 30,
				textStyle: {
					color: '#000',
					//fontSize:font_size_unit*2
					fontSize: 10
				}
			},
			data: name
			// data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		series: [{
			name: '达成率',
			type: 'bar',
			barCategoryGap: '40%',
			label: {
				normal: {
					show: true,
					position: 'top',
					rotate: 30,
					formatter: '{c}%',
					textStyle: {
						color: '#000',
						//fontSize:font_size_unit*2
						fontSize: 10
					}
				}
			},
			data: value
			//data:[10, 52, 200, 334, 390, 330, 220,100,150,250]
		}],
		color: ['#FF2E12']
	};

	//echarts.init(document.getElementById('QV04')).setOption(option);
	return option;
}