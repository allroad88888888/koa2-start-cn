
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


/*export default createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               changePositionKey="Q">
    <LogMonitor />
  </DockMonitor>
)
*/
/*module.exports =  createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               changePositionKey="Q">
    <LogMonitor />
  </DockMonitor>
);*/

/*
import React from 'react'

//从redux-devtools中引入createDevTools
import { createDevTools } from 'redux-devtools';

//显示包是单独的，要额指定
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//创建DevTools组件
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey  ='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

export default DevTools*/

//创建DevTools组件
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey  ='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);



//module.exports = DevTools;
export default DevTools;