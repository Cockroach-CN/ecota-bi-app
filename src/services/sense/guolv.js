import qsocks from "qsocks";

export default function guolv(params) {

	var keys = new Array();
	for (var key in params) {
		keys.push(key);

	}
	//alert(params);
	var sc = params.区域市场名称;
	var md = params.门店名称;
	var yyrq = params.营业日期;

	var yearStr = yyrq.substring(0, 4);//销售年 
	var monthStr = yyrq.substring(4, 6);//营业月份
	var dayStr = yyrq.substring(6, 9);//营业日

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

	qsocks.Connect(config).then(function (global) {
		// console.log(global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462'));
		return global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462')
	}).then(async (app) => {
		await app.clearAll(false);
		if (sc_values && sc_values.length > 0) {
			await app.getField("区域市场名称").then(async (field) => {
				await field.selectValues(sc_values, false, false);
			}).catch(function (err) {
				field.selectValues(sc_values, false, false);
			});
		}
		if (md_values && md_values.length > 0) {
			await app.getField("门店名称").then(async (field) => {
				await field.selectValues(md_values, false, false);
			}).catch(function (err) {
				field.selectValues(md_values, false, false);
			});
		}
		if (yearStr) {
			await app.getField("销售年").then(async (field) => {
				await field.select(yearStr, false, 0);
			}).catch(function (err) { console.log(err) });
		}

		if (monthStr) {
			await app.getField("营业月份").then(async (field) => {
				await field.select(monthStr, false, 0);
			}).catch(function (err) { console.log(err) });
		}

		if (darStr) {
			await app.getField("营业日").then(async (field) => {
				await field.select(dayStr, false, 0);
			}).catch(function (err) { console.log(err) });
		}
	});
}