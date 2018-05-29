import qsocks from "qsocks";
import huiyuankapaiming from "./huiyuankapaiming.js";
import yueyusuanwanchenglv from "./yueyusuanwanchenglv.js";
import rileijidachenglv from "./rileijidachenglv.js";
import yuedachenglv from "./yuedachenglv.js";
import yuepingxiaopaiming from "./yuepingxiaopaiming.js";
import yueyingkehuanbi from "./yueyingkehuanbi.js";
import yueyingketongbi from "./yueyingketongbi.js";
import yueyingyeetongbi from "./yueyingyeetongbi.js";
import guolv from "./guolv.js";

export default function qsensedata(id, params) {

	var keys = new Array();
	for (var key in params) {
		keys.push(key);

	}

	var sc = params.区域市场名称;
	var md = params.门店名称;
	var yyrq = params.营业日期;
	var sc_values = new Array();
	var md_values = new Array();
	var yyrq_values = new Array();

	if (sc) {
		for (var i = 0; i < sc.length; i++) {
			sc_values[i] = {
				"qText": sc[i],
				"qIsNumeric": false,
				"qNumber": 0
			};

		}
	}

	if (md) {
		for (var i = 0; i < md.length; i++) {
			md_values[i] = {
				"qText": md[i],
				"qIsNumeric": false,
				"qNumber": 0
			};

		}
	}



	//var keys=new Array();
	//	for(var key in params)
	//	{
	//		keys.push(key);
	//		alert(key!="区域市场名称");
	//		if(key!="营业日期"){
	//			for(var i=0;i<params[key].length;i++){
	//				params[key][i]={
	//						"qText":params[key][i],
	//						"qIsNumeric": false,
	//						"qNumber": 0
	//					};
	//				
	//			}
	//			
	//		}
	//	//console.log("Key是:" + key);
	//	//console.log("对应的值是:" + obj[key]);
	//	}


	var config = {
		host: 'nan',
		//origin: 'http://localhost',
		rejectUnauthorized: false,
		isSecure: true
	};


	var option = qsocks.Connect(config)
		.then(function (global) {
			// console.log(global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462'));
			return global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462')
		}).then(async (app) => {
			// console.log(app);

			var _data = null;



			app.clearAll(false).then(function (cube) { }).catch(function (err) {
				console.log(err)
			});


			//alert(key.toString()!="营业日期");

			//	alert(key.toString());

			app.getField("区域市场名称").then(function (field) {

				field.selectValues(sc_values, false, false).then(function (layout) {


				})
			}).catch(function (err) {
				console.log(err)
			});


			app.getField("门店名称").then(function (field) {

				field.selectValues(md_values, false, false).then(function (layout) {

				})
			}).catch(function (err) {
				console.log(err)
			});

			app.getField("营业日期").then(function (field) {

				field.select(yyrq, false, 0).then(function (layout) {


				})
			}).catch(function (err) {
				console.log(err)
			});


			// console.log("--------------");
			var _data = await app.getObject(id).then(async (cube) => {
				var _ddd = await cube.getLayout().then(function (layout) {

					var obj = huiyuankapaiming(layout);
					// console.log(obj);
					return obj;
					// console.log(layout);

				})
				// console.log(_ddd);
				return _ddd;
			}).catch(function (err) {
				console.log(err)
			})
			// console.log(_data);
			return _data;


		});

	option.then(data => {
		console.log("=============");
		console.log(data);
	})
	return option;



}