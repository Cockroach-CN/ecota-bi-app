import * as $ from "jquery";

export default function yueyusuanwanchenglv(obj) {
	//var myChart = echarts.init(document.getElementById('QV11'));
	var i = 0;
	var data = new Array();
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {

		var data_v = value[0].qNum;
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
		animation: true,
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
			top: '50%'
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
				center: ['50%', '60%'],
				radius: ['50%', '60%'],
				label: {
					normal: {
						show: true,
						// color:'white',
						// fontStyle:'italic',
						fontSize: 15,
						formatter: '{b}: {d}%',
						position: 'center',
						padding: [35, 4, 5, 6]
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