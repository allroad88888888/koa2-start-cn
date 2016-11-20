import {XUZU_BY_PAGE,DATA_SAVE} from "./../action/listAction";


import clone from "lodash/clone";
export function xuzu(state = {page:1}, action) {
  switch (action.type) {
    case XUZU_BY_PAGE:

    	var data =  Object.assign({},state.data);
      var page = state.page;
    	var showData = action.page===1?[]:clone(state.showData);

      if(action.data.code!==0){
         return state;
      }else{
        for(let i=0;i<action.data.result.length;i++){
          data[action.data.result[i].id.toString()] = action.data.result[i];
          //data[action.data[i].id+""] = action.data[i];
          showData.push(action.data.result[i].id);
        }
        return Object.assign({}, state, {
            data,
            showData,
            page:action.page?1:(page+1)
         });
      }

    	//showData
    	//console.log("啊哈",showData)


    default:
      return state
  }
}



//import {DATA_SAVE} from "./weixinAction";


//import clone from "lodash/clone";
export function save(state = {}, action) {
  switch (action.type) {
    case DATA_SAVE:
        var newState = Object.assign({}, state);
        newState[action.key] = action.data;
        return newState;
    default:
      return state
  }
}

