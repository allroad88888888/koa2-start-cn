'use strict'
/*所有滚动 都在这里*/
import * as React from 'react';
import("./select-list.scss");
var List = React.createClass({
  handleClick: function(item, e) {
      this.props.onChange&&this.props.onChange(item);
      e.stopPropagation();
  },
  render: function() {
    let {dataShow,dataKey,items,selectItem} = this.props;
    each(items, function(item, i) {
        let name = isArray == false ? item : item[dataShow];
        let one = isArray == false ? (function(){
            let result=  {};
            result[dataKey] = i;
            result[dataShow] = name;
            return result;
        }.bind(i))() : item;
        /*console.log("select循环",item);
        console.log("select循环",selectItem);*/
        list.push(<li key={i} className={item[dataKey]===selectItem[dataKey]?"select":"select-no"} onClick={this.handleClick.bind(this,one)}>{name}</li>);
    }.bind(this));
    return (
        <div className="drop-up">
            <ul className="drop-container">
                {a}{list}
            </ul>
        </div>
    )
  }
});
module.exports = List;