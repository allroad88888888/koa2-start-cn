'use strict'
export const XUZU_BY_PAGE = "XUZU_BY_PAGE";
export const DATA_SAVE = "DATA_SAVE";

export function save(key,data){
    return {
        type:DATA_SAVE,
        key,
        data
    }
}




var {fetchPosts} = require("yuapt-help").helpAction;
var {dictionary} = require("yuapt-help").dictionaryAction;
var {searchSetParam,searchInit,searchSetValue,searchSetOthers} = require("yuapt-help").searchAction;

//初始化 search
export function xuzuSearchInit(){
	return (dispatch, getState) => {
		    return dispatch(searchInit("xuzuSearch",{
		    	"query": {
					"name": "query", //对应的数据字段名
					"type": "search", //类型
					"isStar": false, //是否为必填
					"value": "", //值
					"placeholder": "搜索", //默认显示
					"errorMessage": false, //错误信息
					"max": 20, //最大长度
					"min": 1,
				},
				"page": {
					"name": "page", //对应的数据字段名
					"isStar": true, //是否为必填
					"value": 1, //值
				}
		    }));
	}
}

//查询 设置值
export function xuzuSearchSetValue(fild,value){
	return (dispatch, getState) => {
			let tempValue = value;
			console.log("设置为",tempValue);
			dispatch(searchSetParam("xuzuSearch",fild,tempValue));
		    return dispatch(searchSetValue("xuzuSearch",fild,value));
	}
}

export function xuzuByPage(data,page) {
	// body...
	return {
		type:XUZU_BY_PAGE,
		data,
		page
	}
}



/*
    查询
 */
export function xuzuSearch(isTurnPage,page) {
		return (dispatch, getState) => {
			
			/*if(searchParam&&isTurnPage!==true){
				searchParam.page = 1;
			}else{
				searchParam.page = page;
			}*/
			if(!isTurnPage){
				dispatch(xuzuSearchSetValue("page",1));
			}
			let searchParam = Object.assign({},getState().search.xuzuSearch&&getState().search.xuzuSearch.searchParam);

			console.log("啊哈 娘子",searchParam)
			dispatch(fetchPosts("xuzuSearch", "/mr1/contract/getList",searchParam?searchParam:{page:1},"GET")).then((data)=>{
				 console.log("data",data)
				 dispatch(xuzuByPage(data.result,searchParam.page));

				 dispatch(xuzuSearchSetValue("page",Number(searchParam.page)+1));
			});
		    //return dispatch(fetchPosts("xuzuSearch", "/mr/contract/getList",searchParam?searchParam:{page:1},"GET"));
		}
}


export function loadWeiXinConfig() {

		var url = window.document.location.href.toString();
    	url = url.substring(0, url.indexOf("#")>0?url.indexOf("#"):url.length);

   /* 	if(weixinData){
    		return false;
    	}
*/
    	/*if(weixinData){
    		config(wx,data,list,callBack,finalCallBack);
    	}*/

		return (dispatch, getState) => {
			dispatch(fetchPosts("weixinConfig", "/wxapi/",{url,_url:"/wechat/jsapi"},"GET")).then((data)=>{
				console.log("微信数据",data);
				//config(wx,data.result.result,list,callBack,finalCallBack,dispatch);
			});

		    //return dispatch(fetchPosts("xuzuSearch", "/mr/contract/getList",searchParam?searchParam:{page:1},"GET"));
		}
}