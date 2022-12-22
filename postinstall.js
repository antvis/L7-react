function isTrue(value) {
  return !!value && value !== '0' && value !== 'false';
}

let envDisable = isTrue(process.env.CI);
let logLevel = process.env.npm_config_loglevel;
let logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;

let BANNER = `\u001b[31m---------------------------------------------------------------------------------------
\u001b[31m---------------------------------------------------------------------------------------
\u001b[0mThank you for installing \u001b[35m${'@antv/l7-react'}\u001b[0m: built from \u001b[32m${'https://github.com/antvis/L7-react'}

\u001b[31m L7-React 全面升级为 LarkMap\u001b[32m (${'https://github.com/antvis/LarkMap'})\u001b[31m, \u001b[31mL7-React 已经停止维护! 请手动升级。

\u001b[0m\u001b[96mLarkMap 新一代 React 地图可视分析组件库，提供易用/丰富/易用/专业的可视化组件，一站式满足可视化需求。了解更多:
\u001b[0m> \u001b[32m${'https://larkmap.antv.antgroup.com/guide'}\u001b[0m
\u001b[31m---------------------------------------------------------------------------------------
\u001b[31m---------------------------------------------------------------------------------------\n`;

// install后在控制台输出一段日志
if (!envDisable && !logLevelDisplay) {
  console.log && console.log(BANNER);
}
