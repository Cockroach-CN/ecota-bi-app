import * as $ from "jquery";

export default function yueyusuanwanchenglv(obj) {
	//var myChart = echarts.init(document.getElementById('QV11'));
	var i = 0;
	var data = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {

		var data_v = value[0].qNum;
		if (data_v) {
			var data_v2 = 1;
		} else {
			var data_v2 = 1 - data_v;
		}
		var data_v2 = 1 - data_v;
		data[i] = {
			"name": '完成',
			"value": data_v
		};
		data[i + 1] = {
			"name": '未完成',
			"value": data_v2
		};
		//			
	});

	var yueyusuanwanchenglv = data;


	var option = {
		animation: false,
		title: {
			show: true,
			text: '当月预算完成率',
			textStyle: {
				color: '#000',
				//fontSize:font_size_unit*3.9,
				// fontWeight:700,
				// width:100/dayMonthStep+'%',
				height: '100%',
				align: 'center'
			},
			// left:(7.2-titleLength*1.06+i*100/dayMonthStep)+'%',
			left: 'center',
			top: '40%'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		//		    legend: {
		//		        orient: 'vertical',
		//		        x: 'left',
		//		        data:['完成','未完成']
		//		    },
		series: [

			{
				name: '当月预算完成率',
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['75%', '85%'],
				label: {
					normal: {
						show: true,
						// color:'white',
						// fontStyle:'italic',
						fontSize: 18,
						formatter: '{b}: {d}%',
						position: 'center',
						padding: [37, 5, 5, 6]
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: yueyusuanwanchenglv
			}
		],
		color: ['#00A4A4', '#E56C19']
	};
	return option;
}