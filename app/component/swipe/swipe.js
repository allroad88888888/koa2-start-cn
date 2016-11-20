
import React, {Component, PropTypes} from 'react';
import * as ReactDOM from 'react-dom';

class Swipe extends Component {
     constructor(props) {
        super(props);
        this.state = {
          value: props.value,
          isShowLoad:true
        };

        this.scrollInit = this.scrollInit.bind(this);
        //this.scrollEnd = this.scrollEnd.bind(this);
        //this.upFn = this.upFn.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
    }
    componentWillMount(){
        let _this = this;
        _this.AlloyTouch = false;
        require.ensure([], () => {
           _this.AlloyTouch = require("./alloyTouch.js");
           _this.$ = require("./../zepto/zepto");
        })
    }
    componentWillReceiveProps(nextProps){

        if(nextProps.isShowLoad!==undefined&&nextProps.isShowLoad!==this.state.isShowLoad){
            this.setState({
                isShowLoad:nextProps.isShowLoad
            })
        }
    }
    componentDidUpdate(prevProps,prevState){
       /* if(this.AlloyTouch&&prevState.isShowLoad!==this.state.isShowLoad){
            //console.log("掉用这里？")
            this.scrollInit();
        }*/
    }
    componentDidMount(){
        let _this = this;
        if(_this.AlloyTouch){
            _this.scrollInit()
        }else{
            require.ensure([], () => {
               _this.AlloyTouch = require("./alloyTouch.js");
               _this.$ = require("./../zepto/zepto");
               _this.scrollInit();
            })
        }
    }
    scrollInit(){
        let dom = ReactDOM.findDOMNode(this.refs.swipe); //offsetTop
        let {property,width,min,max,step,findScroller,vertical,target,findDis} = this.props;
        let prevTarget = false;
        let $ = this.$;

        if(findDis!==false){
            let dis = $(findDis,$(dom)).eq(0).width();
            min = -dis;
            step = dis;
        }

        //console.log("dom",dom);
        new this.AlloyTouch({
            touch: dom,//反馈触摸的dom
            findScroller: function(evt){
                let $target=  $(evt.target);
                let $parent = $target.parents(findScroller),
                $children = $target.children(findScroller);

                if($target.hasClass(findScroller.replace(".",""))){
                    return $target.get(0);
                }else if($parent.length>0){
                    return $parent.get(0);
                }/*else if($children.length>0){
                    this.scroller = $children.get(0);
                }*/
                else{
                    //console.error($target,"************************************************")
                    return false;
                }
            },//".Serial-number", container-Serial-number
            vertical: vertical,//不必需，默认是true代表监听竖直方向touch
            target: target, //运动的对象
            property: property,  //被运动的属性
            sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
            factor: 1,//不必需,表示触摸位移与被运动属性映射关系，默认值是1
            min: min, //不必需,运动属性的最小值
            max: max, //不必需,滚动属性的最大值
            step: step,
            spring: true, //不必需,是否有回弹效果。默认是true
            inertia: false, //不必需,是否有惯性。默认是true
            intelligentCorrection: true,
            touchStart: function (value,target) {
                if(prevTarget&&prevTarget!=target){
                    this.to(prevTarget,property,0,400,this.iosEase);
                    ////console.error("删除  缩放",prevTarget)
                }
                prevTarget = target;

               // //console.error(this);

            }
        });

    }
    render() {
        return (
            <div className={this.props.cssName} ref="swipe">
                {this.props.children}
            </div>
        );
    }
}

Swipe.defaultProps={
    property:"translateX",
    width:false,
    min:0,
    max:0,
    step:0,
    vertical:false,
    findScroller:false,
    target:"",
    cssName:"",
    findDis:false

}

module.exports = Swipe;

