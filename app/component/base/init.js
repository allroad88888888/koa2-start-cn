import $ from "./../zepto/zepto";

const Init = function (argument) {
    require("./base.scss");
    require("./normalize.css");
    let html = require("./svg.html");

    //console.log("获取 html内容，"+html)
    $("body").prepend(html);
    //
    //
    //
    
}


module.exports = Init;