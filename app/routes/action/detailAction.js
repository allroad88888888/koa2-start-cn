/**
 * Created by zylee on 2016/11/18.
 */
var {fetchPosts} = require("yuapt-help").helpAction;
export const XUZU_DETAIL = "XUZU_DETAIL";

export function xuzuDetail(key,data){
    return {
        type:XUZU_DETAIL,
        key,
        data
    }
}

//查询
export function getDetail(id) {
    return (dispatch, getState) => {

        return dispatch(fetchPosts(`detail${id}`, `/mr/contract/get/${id}`,{},"POST")).then((data)=>{

          //return dispatch(xuzuDetail(id,data.result))
        });
    }
}