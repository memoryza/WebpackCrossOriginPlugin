额 webpack1.x(后续的版本中支持了直接配置crossorigin）没找到设置script属性的插件，顺手写了一个用，动态增加script的属性，想加啥就自己加

	
	const WebpackCrossOriginPlugin = require('./index');
	
	webpackConfig.plugins.unshift(new WebpackCrossOriginPlugin({
	  source: "script.type = 'text/javascript';",
	  target: "script.type = 'text/javascript';script.setAttribute('crossorigin','anonymous');"
	}));

