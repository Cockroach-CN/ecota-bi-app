import * as $ from "jquery";

export default function yueyingyeetongbi(obj) {

	//var myChart = echarts.init(document.getElementById('QV10'));

	var i = 0;
	var data_;
	var subtext;
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {
		//百分比
		data_ = value[0].qNum;
		subtext = value[0].qText;
	});

	var yueyingyeetongbi = data_;
	//var subtext = yueyingyeetongbi * 100 + '%';
	var data = new Array();

	if (yueyingyeetongbi > 0 || yueyingyeetongbi == 0) {

		data = [{
			value: 1 - yueyingyeetongbi,
			name: ''
		}, {
			value: yueyingyeetongbi,
			name: ''
		}];
	} else {

		data = [{
			value: 1,
			name: ''
		}];
	}
	var option = {
		animation: true,
		title: {
			show: true,
			text: '当月营业额同比增长率',
			textStyle: {
				color: '#000',
				fontSize: 15,
				// fontWeight:700,
				// width:100/dayMonthStep+'%',
				// height:'100%',
				align: 'center'
			},
			subtext: subtext,
			subtextStyle: {
				color: '#00A4A4',
				fontSize: 20,
				lineHeight: 80,
				align: 'center'
			},
			// left:(7.2-titleLength*1.06+i*100/dayMonthStep)+'%',
			left: 'center',
			top: '50%'
		},
		//		    tooltip: {
		//		        trigger: 'item',
		//		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		//		    },
		//		    legend: {
		//		        orient: 'vertical',
		//		        x: 'left',
		//		       // data:['','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
		//		    },
		series: [

			{
				name: '月营业额可比同比',
				type: 'pie',
				center: ['50%', '60%'],
				radius: ['50%', '60%'],
				//		            label: {
				//		                normal: {
				//		                   show: true,
				//		                    // color:'white',
				//		                    // fontStyle:'italic',
				//		                    fontSize:10,
				//		                    formatter:'{b}: {d}%',
				//		                    position: 'center'
				//		                }
				//		            },
				labelLine: {
					normal: {
						show: false
					}
				},
				data: data
			}
		],
		color: ['#E56C19', '#00A4A4']
	};
	return option;
}