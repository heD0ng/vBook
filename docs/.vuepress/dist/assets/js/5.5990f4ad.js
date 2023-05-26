(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{314:function(t,s,n){t.exports=n.p+"assets/img/node_memory.e1fc8d56.png"},327:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"性能优化在工作中的实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化在工作中的实践"}},[t._v("#")]),t._v(" 性能优化在工作中的实践")]),t._v(" "),s("h3",{attrs:{id:"场景一-滚动卡顿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景一-滚动卡顿"}},[t._v("#")]),t._v(" 场景一-滚动卡顿")]),t._v(" "),s("h4",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("在某模块的列表页，存在"),s("strong",[t._v("开始事件截图")]),t._v("和"),s("strong",[t._v("结束事件截图")]),t._v("的选项，点击图片会将该图片进行放大，当前页面的pageSize为10，产品反馈该页面加载以及滑动卡顿严重。")]),t._v(" "),s("h4",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("首先，利用浏览器中的performance进行性能查看，可以观察到以下结论")]),t._v(" "),s("ul",[s("li",[t._v("DOMContentLoaded：2.23s")]),t._v(" "),s("li",[t._v("finish：23.7s；")])]),t._v(" "),s("p",[t._v("然后，利用fps工具查看当前页面的fps（command+shift+p，搜索frame即可），刷新页面可以看到：")]),t._v(" "),s("ul",[s("li",[t._v("fps：21")])]),t._v(" "),s("h4",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("当前问题主要归结于2点：")]),t._v(" "),s("ul",[s("li",[t._v("finish时间过长；")]),t._v(" "),s("li",[t._v("页面fps过低")])]),t._v(" "),s("p",[t._v("所以，需要做的是优化图片大小、更换加载策略；")]),t._v(" "),s("h4",{attrs:{id:"方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),s("p",[t._v("前端侧采用了以下方案：")]),t._v(" "),s("ul",[s("li",[t._v("图片压缩：列表页展示缩略图；")]),t._v(" "),s("li",[t._v("懒加载：懒加载该缩略图；")]),t._v(" "),s("li",[t._v("预加载：点击‘缩略图’以及点击‘详情’，都需要加载原图，所以提前加载；")]),t._v(" "),s("li",[t._v("并发加载：预加载图片，采用并发加载；")])]),t._v(" "),s("h4",{attrs:{id:"成效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成效"}},[t._v("#")]),t._v(" 成效")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("指标")]),t._v(" "),s("th",[t._v("优化前")]),t._v(" "),s("th",[t._v("目标")]),t._v(" "),s("th",[t._v("优化后")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Finish Time")]),t._v(" "),s("td",[t._v("20+")]),t._v(" "),s("td",[t._v("10-")]),t._v(" "),s("td",[t._v("8 - 9")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("FPS")]),t._v(" "),s("td",[t._v("20-25")]),t._v(" "),s("td",[t._v("40 - 60")]),t._v(" "),s("td",[t._v("45 - 55")]),t._v(" "),s("td")])])]),t._v(" "),s("h4",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("总体上，达成了优化目标，最影响体验的卡顿问题得以解决。")]),t._v(" "),s("h3",{attrs:{id:"场景二-流水线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景二-流水线"}},[t._v("#")]),t._v(" 场景二-流水线")]),t._v(" "),s("h4",{attrs:{id:"背景-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景-2"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("在某天上线需求时，"),s("strong",[t._v("流水线")]),t._v("崩了，也就是一直发布失败，进而联系运维以及其他人员，在凌辰4点左右解决流水线问题后，终于上线成功。通过观察流水线发布记录，可以发现在当日上线之前的"),s("strong",[t._v("一周")]),t._v("以前，流水线构建的失败率就开始提升，在我上线需求时，失败率飚高达到80%+。")]),t._v(" "),s("h4",{attrs:{id:"分析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析-2"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("通过日志分析、运维侧人员以及谷歌搜索的查找，可以发现是由于内存问题所引起的崩溃问题。")]),t._v(" "),s("p",[s("img",{attrs:{src:n(314),alt:"node_memory"}})]),t._v(" "),s("p",[t._v("进而，通过利用mac的活动监视器来查看build时的CPU状况，可以看到：")]),t._v(" "),s("ul",[s("li",[t._v("内存使用情况在1.83G左右；")])]),t._v(" "),s("p",[t._v("查看流水线设置，发现当前采用的node版本为10，所以推测是"),s("strong",[t._v("node版本引起的内存溢出问题")]),t._v("。")]),t._v(" "),s("p",[t._v("更进一步，通过流水线发布记录，发现之前上线的版本中增加了新依赖：vue-code-diff，猜测是因为该依赖问题，所以利用webpack-bundle-analyzer分析打包体积，可以发现：")]),t._v(" "),s("ul",[s("li",[t._v("vue-code-diff：压缩后的大小为1.33M")])]),t._v(" "),s("p",[t._v("可以看出，确实该依赖体积比较大。")]),t._v(" "),s("p",[t._v("为了验证该猜测，拉取上线该需求之前的代码进行build打包，通过观察内存大小，发现内存大小在1.4G左右。")]),t._v(" "),s("p",[s("strong",[t._v("需要注意的是")]),t._v("，node版本存在内存限制问题（上表的值存在波动范围，并不是严格阈值）。")]),t._v(" "),s("h4",{attrs:{id:"结论-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论-2"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("问题可以归结为：")]),t._v(" "),s("ul",[s("li",[t._v("在上线vue-code-diff之后，整个项目的内存就即将达到node 10内存限制的阈值；")]),t._v(" "),s("li",[t._v("在上线我需求时，内存溢出了，导致整个一系列问题；")])]),t._v(" "),s("h4",{attrs:{id:"方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案-2"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),s("p",[t._v("主要有以下几种解决方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("修改node 版本：node 版本改为了12；")])]),t._v(" "),s("li",[s("p",[t._v("增加node内存：“build” ： “node --man_old_space_size = 1024 * 2 node_modules/.bin/vue-cli-service build”；")])]),t._v(" "),s("li",[s("p",[t._v("代码或依赖优化：")]),t._v(" "),s("ul",[s("li",[t._v("按需加载（lodash、echart、MTD、element ui、moment）；")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 减少语言包打包体积\nconfig.plugins.push(\n\tnew webpack.ContextReplcementPlugin(/moment[/\\\\]locale$/, /zh-cn|en/);\n)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[t._v("DLL（axios、vue）；")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// webpack.dll.config.js\nconst webpack = require('webpack');\nconst fs = require('fs');\n\nmoodule.export = {\n\tentry: {\n\t\tvue_vueRouter_vuex_axios: ['vue', 'vue-router', 'vuex', 'axios'],\n\t\tvue: ['vue'],\n\t\tvueRouter: ['vue-router'],\n\t\tvuex: ['vuex'],\n\t\taxios: ['axios'],\n\t},\n\toutput: {\n\t\tpath: fs.resolve(__dirname, 'dll'),\n\t\tfilename: '[name]_dll.js',\n\t\tlibrary: '[name]_lib'\n\t},\n\tplugins: [\n\t\tnew webpack.DLLPlugin({\n\t\t\tpath: fs.join(__dirname, 'dll', '[name]_manifest.json'),\n\t\t\t// name与上面的library，需要对应起来\n\t\t\tname: '[name]_lib'\n\t\t})\n\t]\n}\n\n-----\n将生成的文件上传到S3中\n----\n\n// vue.config.js\n\nconfigureWebpack: config => {\n\tif (config.mode === 'production') {\n\t\tconst dllLibNames = ['vue_vueRouter_vuex_axios'];\n\t\tconst dllCdnPublicPath = 'xxx.com';\n\t\tconst dllPlugins = [];\n\t\tconst script = [];\n\t\t\n\t\tdllLibNames.forEach((name, i) => {\n\t\t\tdllPlugins.push({\n\t\t\t\tnew webpack.DLLReferencePlugin({\n\t\t\t\t\tmanifest: fs.join(dllCdnPublicPath, `${name}_manifest.json`)\n\t\t\t\t})\n\t\t\t})\n\t\t\tscript.push({\n\t\t\t\tpath: `${name}.dll.js`,\n\t\t\t\tattributes: {\n\t\t\t\t\tcrossorigin: 'anonymous'\n\t\t\t\t}\n\t\t\t})\n\t\t\tif (i === dllLibNames.length - 1) {\n\t\t\t\tdllPlugins.push(\n\t\t\t\t\tnew HtmlWebpackTagsPlugin({\n\t\t\t\t\t\tappend: false,\n\t\t\t\t\t\tpublicPath: dllCdnPublicPath,\n\t\t\t\t\t\tscript\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t}\n\t\t})\n\t\tconfig.plugins.push(...dllPlugins);\n\t}\n}\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br")])]),s("ul",[s("li",[t._v("多进程打包thread-loader：提效明显\n"),s("ul",[s("li",[s("p",[t._v("巨石项目：20+M")]),t._v(" "),s("ul",[s("li",[t._v("多进程：19 - 23 s；")]),t._v(" "),s("li",[t._v("单进程：55 - 63 s；")])])]),t._v(" "),s("li",[s("p",[t._v("轻项目：")]),t._v(" "),s("ul",[s("li",[t._v("多进程：5 - 7 s；")]),t._v(" "),s("li",[t._v("单进程：13 - 15 s；")])])])])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// vue.config.js\n\nconfigureWebpack: config => {\n\tif (config.mode === 'production') {\n\t\tconfig.module.rules.push({\n\t\t\ttest: '/\\.js$/',\n\t\t\texclude: '/node_modules/'\n\t\t\tuse:[\n\t\t\t\t{\n\t\t\t\t\tloader: 'thread-loader'\n\t\t\t\t\toption: {\n\t\t\t\t\t\tworkers: require('os').cpus().length - 1,\n\t\t\t\t\t\tworkerParallelJobs: 50,\n\t\t\t\t\t\tpoolTimeout: 2000\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'babel-loader'\n\t\t\t]\n\t\t})\n\t\tconfig.module.rules.push({\n\t\t\ttest: '/\\.vue$/',\n\t\t\texclude: '/node_modules/'\n\t\t\tuse:[\n\t\t\t\t{\n\t\t\t\t\tloader: 'thread-loader'\n\t\t\t\t\toptions: {\n\t\t\t\t\t\tworkers: require('os').cpus().length - 1,\n\t\t\t\t\t\tworkerParallelJobs: 50,\n\t\t\t\t\t\tpoolTimeout: 2000\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'vue-loader'\n\t\t\t]\n\t\t})\n\t\tconfig.module.rules.push({\n\t\t\ttest: '/\\.tsx?$/',\n\t\t\texclude: '/node_modules/'\n\t\t\tuse:[\n\t\t\t\t{\n\t\t\t\t\tloader: 'thread-loader'\n\t\t\t\t\toptions: {\n\t\t\t\t\t\tworkers: require('os').cpus().length - 1,\n\t\t\t\t\t\tworkerParallelJobs: 50,\n\t\t\t\t\t\tpoolTimeout: 2000\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'babel-loader',\n\t\t\t\t{\n\t\t\t\t\tloader: 'thread-loader'\n\t\t\t\t\toptions: {\n\t\t\t\t\t\t// 将tsx文件添加到vue文件的ts代码块中\n\t\t\t\t\t\tappendTsxSuffixTo: ['/\\.vue$/'],\n\t\t\t\t\t\texperimentalWatchApi: true,\n\t\t\t\t\t\t// 多进程打包，不配置的话，打包会报错\n\t\t\t\t\t\thappyPackMode: true,\n\t\t\t\t\t\t// 禁用类型检查，提高构建速度\n\t\t\t\t\t\ttranpileOnly: true\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t})\n\t}\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("webpack插件：写了一个注释文件大小的插件，可以清晰地看见每个文件的大小；")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class FileSizePlugin {\n  apply(compiler) {\n    compiler.hooks.emit.tapAsync('FileSizePlugin', (compilation, callback) => {\n      Object.keys(compilation.assets).forEach((filename) => {\n        const source = compilation.assets[filename].source();\n        const size = compilation.assets[filename].size() / 1024.0;\n        const comment = `/* ${filename} file is ${size.toFixed(2)} Kb */\\n\\n`;\n        compilation.assets[filename].source = () => (comment + source);\n      });\n      callback();\n    });\n  }\n}\n\nmodule.exports = FileSizePlugin;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h4",{attrs:{id:"最后-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后-2"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("总体上，提升了自己定位、思考、解决问题的能力。")]),t._v(" "),s("h3",{attrs:{id:"场景三-全量加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景三-全量加载"}},[t._v("#")]),t._v(" 场景三-全量加载")]),t._v(" "),s("h4",{attrs:{id:"背景-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景-3"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("某一个页面，全量加载所有仓店数据（60000+），导致页面加载、渲染等卡顿问题。")]),t._v(" "),s("h3",{attrs:{id:"场景四-自动化插入标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景四-自动化插入标签"}},[t._v("#")]),t._v(" 场景四-自动化插入标签")]),t._v(" "),s("ul",[s("li",[t._v("script必须是"),s("strong",[t._v("双标签")]),t._v("；")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class InsertLinkPlugin {\n    constructor(options) {\n        this.options = Array.isArray(options) ? options: [options];\n    }\n    apply(compiler) {\n        compiler.hooks.emit.tapAsync('InsertLinkPlugin', (compilation, callback) => {\n            let html = compilation.assets['index.html'];\n            this.options.forEach(option => {\n                if (/dns/.test(option.type.toLowerCase())) {\n                    const tag = `<link rel=\"dns-prefetch\" href=\"${option.url}\" />`;\n                    html = html.replace('<title>', `${tag}<title>`)\n                } else if (/(js|javascript)/.test(option.type.toLowerCase())) {\n                    if (option.defer) {\n                        const tag = `<script rel=\"text/javascript\" href=\"${option.url}\" defer ><\/script>`;\n                        html = html.replace('</body>', `${tag}</body>`)\n                    } else if (option.async) {\n                        const tag = `<script rel=\"text/javascript\" href=\"${option.url}\" async ><\/script>`;\n                        html = html.replace('</body>', `${tag}</body>`)\n                    } else {\n                        const tag = `<script rel=\"text/javascript\" href=\"${option.url}\" ><\/script>`;\n                        html = html.replace('</body>', `${tag}</body>`)\n                    }\n                } else if (/css/.test(option.type.toLowerCase())) {\n                    const tag = `<link rel=\"stylesheet\" href=\"${option.url}\" />`;\n                    html = html.replace('</body>', `${tag}</body>`)\n                }\n            })\n\n            compilation.assets['index.html'] = {\n                source: () => html,\n                size: () => html.length\n            };\n            callback();\n        })\n    }\n}\n\nconfig.plugins.push(\n    new InsertLinkPlugin([\n        {\n            url: '//lx.meituan.net',\n            type: 'dns'\n        },\n        {\n            url: '//lx.meituan.com',\n            type: 'js',\n            defer: true\n        },\n        {\n            url: '//s3plus.meituan.net',\n            type: 'js',\n            async: true\n        },\n    ])\n)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);