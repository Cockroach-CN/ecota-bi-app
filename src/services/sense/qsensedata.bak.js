import qsocks from "qsocks";
import huiyuankapaiming from "./huiyuankapaiming.js";
import yueyusuanwanchenglv from "./yueyusuanwanchenglv.js";
import rileijidachenglv from "./rileijidachenglv.js";
import yuedachenglv from "./yuedachenglv.js";
import yuepingxiaopaiming from "./yuepingxiaopaiming.js";
import yueyingkehuanbi from "./yueyingkehuanbi.js";
import yueyingketongbi from "./yueyingketongbi.js";
import yueyingyeetongbi from "./yueyingyeetongbi.js";
import kpi from "./kpi.js";
import guolv from "./guolv.js";

export default function qsensedata(id, params) {

	var keys = new Array();
	for (var key in params) {
		keys.push(key);

	}
	//alert(params);
	var sc = params.区域市场名称;
	var md = params.门店名称;
	var yyrq = params.营业日期;
	var sc_values = new Array();
	var md_values = new Array();
	var yyrq_values = new Array()
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
		host: 'localhost',
		//origin: 'http://localhost',
		rejectUnauthorized: false,
		isSecure: true
	};

	//	 qsocks.Connect(config)
	//    .then(function (global) {
	//      // console.log(global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462'));
	//     return  global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462')
	//    }).then( async(app) => {
	// 	// console.log(app);
	// 		
	// 	var _data = null;
	// 	var _data1=null;
	// 	var _data2=null;
	// 	var _data3=null;
	// 	var _data4=null;
	// 	var _data5=null;
	// 	var _data6=null;
	// 	var _data7=null;
	// 	
	// 	
	//    
	// 	var _data1=await app.clearAll(false).then(async (cube)=> {
	// 		
	// 		var _data2=  await app.getField("区域市场名称").then(async (field)=> {
	//				
	//		 	   var _data3=await field.selectValues(sc_values,false,false).then(function (layout) {
	//			              
	//		 		
	//				    		  return _data3;
	//
	//				        })
	//				        	console.log(field);
	//				        return _data2;
	//				      }).catch(function (err) { console.log(err) });
	// 		return _data1;
	// 	}).catch(function (err) { console.log(err) });
	//    
	//        
	//    	//alert(key.toString()!="营业日期");
	//    		
	//    		//	alert(key.toString());
	//  
	// 	  await app.getField("区域市场名称").then(async (field)=> {
	//    				
	//	 	   var _data3=await field.selectValues(sc_values,false,false).then(function (layout) {
	//		              
	//	 		 // console.log( layout);
	//			    		  return _data3;
	//
	//			        })
	//			        	//console.log(field);
	//			        //return _data2;
	//			      }).catch(function (err) { console.log(err) });
	//    		
	//    		
	//    			await app.getField("门店名称").then(async (field)=> {
	//    				 
	//			    	 var _data5=await field.selectValues(md_values,false,false).then(function (layout) {
	//		                 return _data5;
	//			        })
	//			          // return _data4;
	//			      }).catch(function (err) { console.log(err) });
	//   	     
	//             await app.getField("营业日期").then(async (field)=> {
	//	    	
	//    	     var _data7=await  field.select(yyrq,false,0).then(function (layout) {
	//                   
	//    	    	 return _data7;
	//
	//        })
	//       // return _data6;
	//      }).catch(function (err) { console.log(err) });
	//      // console.log("--------------");
	//    });


	var option = qsocks.Connect(config)
		.then(function (global) {
			// console.log(global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462'));
			return global.openDoc('a3fe3c06-1423-4d2c-9495-a677e0f6e462')
		}).then(async (app) => {
			// console.log(app);

			var _data = null;
			var _data1 = null;
			var _data2 = null;
			var _data3 = null;
			var _data4 = null;
			var _data5 = null;
			var _data6 = null;
			var _data7 = null;
			//	   var _data1=await app.clearAll(false).then(async (cube)=> {   return _data1;}).catch(function (err) { console.log(err) });
			//	 	var  _data2=await app.getField("区域市场名称").then(async (field)=> {
			//		 	   var _data3=await field.selectValues(sc_values,false,false).then(function (layout) {
			//		 		 // console.log( layout);
			//				    		  return _data3;
			//
			//				        }).catch(function (err) { console.log(err);})
			//				        	//console.log(field);
			//				       // console.log(2);
			//				        return _data2;
			//				      }).catch(function (err) { console.log(err);
			//
			////				    field.selectValues(sc_values,false,false).then(function (layout) {
			////			              
			////		 		 // console.log( layout);
			////				    		  return _data3;
			////
			////				        }) 
			//				      });
			//	    		
			//	    		
			//	      var _data4=await app.getField("门店名称").then(async (field)=> {
			//	    				 
			//				    	 var _data5=await field.selectValues(md_values,false,false).then(function (layout) {
			//			                 return _data5;
			//				        }).catch(function (err) { console.log(err);})
			//				         // console.log(4);
			//				          return _data4;
			//				      }).catch(function (err) { console.log(err); 
			//				      
			////				       field.selectValues(md_values,false,false).then(function (layout) {
			////			                 return _data5;
			////				        })
			//				      
			//				      });
			//	   	     
			//	     var _data6= await app.getField("营业日期").then(async (field)=> {
			//		    	
			//	    	      var _data7=await  field.select(yyrq,false,0).then(function (layout) {
			//                       
			//	    	    	 return _data7;
			//
			//	        })
			//	        //console.log(6);
			//	        return _data6;
			//	      }).catch(function (err) { console.log(err);
			//
			////	   field.select(yyrq,false,0).then(function (layout) {
			////              
			//// 	    	 return _data7;
			////
			////     })
			////	      
			//	      });


			// console.log("--------------");


			var _data = await app.getObject(id).then(async (cube) => {
				return await cube.getLayout().then(function (layout) {
					switch (id) {
						case "kFJrN":
							return huiyuankapaiming(layout);
							break;
						case "ZCVjxV":
							return huiyuankapaiming(layout);
							break;
						case "JWwayJ":
							return kpi(layout);
							break;
						case "BmsqW":
							return yueyingketongbi(layout);
							break;
						case "HyQJJ":
							return yueyingkehuanbi(layout);
							break;
						case "HyxrDw":
							return yuepingxiaopaiming(layout);
							break;
						case "eeUdGe":
							return rileijidachenglv(layout);
							break;
						case "LYJsJyJ":
							return yuedachenglv(layout);
							break;
						case "QUVTVG":
							return yuedachenglv(layout);
							break;
						case "LvWmjQg":
							return yueyingyeetongbi(layout);
							break;
						case "umCTV":
							return yueyusuanwanchenglv(layout);
							break;
						default:
							break;
					}

				});
			}).catch(function (err) {
				console.log(err)
			});
			return _data;
		});
	//option.then(data => {
	//	 console.log("=============");
	//	 console.log(data);
	//})
	return option;
}