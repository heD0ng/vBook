(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{375:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"domready的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domready的理解"}},[t._v("#")]),t._v(" domReady的理解")]),t._v(" "),s("p",[s("code",[t._v("domReady")]),t._v("是名为"),s("code",[t._v("DOMContentLoaded")]),t._v("事件的别称，当初始的"),s("code",[t._v("HTML")]),t._v("文档被完全加载和解析完成之后，"),s("code",[t._v("DOMContentLoaded")]),t._v("事件被触发，而无需等待样式表、图像和子框架的完全加载。")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("浏览器渲染"),s("code",[t._v("DOM")]),t._v("结构是有一定顺序的，虽然不同浏览器的实现各有不同，但是基本流程都大致相同：")]),t._v(" "),s("ul",[s("li",[t._v("自上而下，首先解析"),s("code",[t._v("HTML")]),t._v("标签，生成"),s("code",[t._v("DOM Tree")]),t._v("。")]),t._v(" "),s("li",[t._v("在解析到"),s("code",[t._v("<link>")]),t._v("或者"),s("code",[t._v("<style>")]),t._v("标签时，开始解析"),s("code",[t._v("CSS")]),t._v("，生成"),s("code",[t._v("CSSOM")]),t._v("，值的注意的是此时解析"),s("code",[t._v("HTML")]),t._v("标签与解析"),s("code",[t._v("CSS")]),t._v("是并行执行的。")]),t._v(" "),s("li",[t._v("当遇到"),s("code",[t._v("<script>")]),t._v("标签后，浏览器会立即开始解析脚本，并停止解析文档，因为脚本有可能会改动"),s("code",[t._v("DOM")]),t._v("与"),s("code",[t._v("CSS")]),t._v("，继续解析会浪费资源，所以应当将"),s("code",[t._v("<script>")]),t._v("标签放于"),s("code",[t._v("<body></body>")]),t._v("后。")]),t._v(" "),s("li",[t._v("当"),s("code",[t._v("DOM Tree")]),t._v("与"),s("code",[t._v("CSSOM")]),t._v("生成后，将两者结合进行布局，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的内部表示模型，可称为渲染树"),s("code",[t._v("render tree")]),t._v("。")]),t._v(" "),s("li",[t._v("根据计算好的信息绘制整个页面，系统会遍历渲染树，并调用"),s("code",[t._v("paint")]),t._v("方法，将内容显示在屏幕上。")])]),t._v(" "),s("p",[t._v("在浏览器解析"),s("code",[t._v("DOM")]),t._v("结构的过程中是存在阻塞过程的：")]),t._v(" "),s("ul",[s("li",[t._v("解析"),s("code",[t._v("JavaScript")]),t._v("过程中会阻塞浏览器的解析过程，准确来说解析渲染过程与解析"),s("code",[t._v("JavaScript")]),t._v("的过程是互斥的。")]),t._v(" "),s("li",[s("code",[t._v("CSS")]),t._v("加载解析时不会阻塞"),s("code",[t._v("DOM")]),t._v("树的解析过程，这两个解析过程是可以并行的，但是"),s("code",[t._v("CSS")]),t._v("加载过程中是不能进行"),s("code",[t._v("JavaScript")]),t._v("的解析的，也就是说"),s("code",[t._v("CSS")]),t._v("加载过程中是会阻塞"),s("code",[t._v("JavaScript")]),t._v("的解析，此外因为生成"),s("code",[t._v("Render Tree")]),t._v("时需要"),s("code",[t._v("CSSOM")]),t._v("，所以在"),s("code",[t._v("DOM Tree")]),t._v("解析完成而"),s("code",[t._v("CSSOM")]),t._v("未完成时不会继续生成"),s("code",[t._v("Render Tree")]),t._v("。")]),t._v(" "),s("li",[t._v("解析"),s("code",[t._v("HTML")]),t._v("结构同样不会阻塞"),s("code",[t._v("CSS")]),t._v("解析的过程，也同样不会和"),s("code",[t._v("JavaScript")]),t._v("的解析过程并行执行，并且"),s("code",[t._v("DOM Tree")]),t._v("解析未完成而"),s("code",[t._v("CSSOM")]),t._v("完成时同样不会继续生成"),s("code",[t._v("Render Tree")]),t._v("。")]),t._v(" "),s("li",[t._v("使用异步加载的"),s("code",[t._v("<script>")]),t._v("标签是不会阻塞"),s("code",[t._v("DOM")]),t._v("解析的，当然其就不会阻塞"),s("code",[t._v("DOMContentLoaded")]),t._v("事件的触发，但是依旧会阻塞"),s("code",[t._v("load")]),t._v("事件的触发。")])]),t._v(" "),s("p",[t._v("再来看一下"),s("code",[t._v("DOMContentLoaded")]),t._v("事件与"),s("code",[t._v("load")]),t._v("事件的触发时机：")]),t._v(" "),s("ul",[s("li",[t._v("当初始的"),s("code",[t._v("HTML")]),t._v("文档被完全加载和解析完成之后，"),s("code",[t._v("DOMContentLoaded")]),t._v("事件被触发，而无需等待样式表、图像和子框架的完全加载。关于触发的时机，如果文档中全部为"),s("code",[t._v("HTML")]),t._v("与"),s("code",[t._v("CSS")]),t._v("则"),s("code",[t._v("DomContentLoaded")]),t._v("事件无需等到"),s("code",[t._v("CSS")]),t._v("加载完毕即可触发；当"),s("code",[t._v("Js")]),t._v("都在"),s("code",[t._v("CSS")]),t._v("之前"),s("code",[t._v("DomContentLoaded")]),t._v("事件无需等到"),s("code",[t._v("CSS")]),t._v("加载完毕即可触发，当然解析"),s("code",[t._v("CSS")]),t._v("与"),s("code",[t._v("DOM")]),t._v("是需要等待前边的"),s("code",[t._v("Js")]),t._v("解析完毕的；当"),s("code",[t._v("Js")]),t._v("在"),s("code",[t._v("CSS")]),t._v("之后时，则"),s("code",[t._v("DomContentLoaded")]),t._v("事件需等到"),s("code",[t._v("CSS")]),t._v("与"),s("code",[t._v("Js")]),t._v("加载完毕才能够触发，上文也提到了"),s("code",[t._v("CSS")]),t._v("的加载会阻塞"),s("code",[t._v("Js")]),t._v("的加载，而"),s("code",[t._v("Js")]),t._v("标签本身也属于"),s("code",[t._v("DOM")]),t._v("结构，必须等待其加载完成之后才能触发"),s("code",[t._v("DomContentLoaded")]),t._v("事件；异步加载的"),s("code",[t._v("<script>")]),t._v("标签不会阻塞"),s("code",[t._v("DOMContentLoaded")]),t._v("事件。")]),t._v(" "),s("li",[t._v("当整个页面及所有依赖资源如样式表和图片都已完成加载时，将触发"),s("code",[t._v("load")]),t._v("事件。不使用动态加载的"),s("code",[t._v("<iframe>")]),t._v("同样会阻塞"),s("code",[t._v("load")]),t._v("事件，此外即使是异步加载的"),s("code",[t._v("<script>")]),t._v("标签同样会阻塞"),s("code",[t._v("load")]),t._v("事件。")])]),t._v(" "),s("p",[t._v("在各种条件下重新整理一下页面加载的过程，主要是在于"),s("code",[t._v("DOMContentLoaded")]),t._v("事件与"),s("code",[t._v("load")]),t._v("事件触发的时间线：")]),t._v(" "),s("ul",[s("li",[t._v("自上而下，首先解析"),s("code",[t._v("HTML")]),t._v("标签，生成"),s("code",[t._v("DOM Tree")]),t._v("，此时"),s("code",[t._v('document.readyState = "loading"')]),t._v("。")]),t._v(" "),s("li",[t._v("在解析到"),s("code",[t._v("<link>")]),t._v("或者"),s("code",[t._v("<style>")]),t._v("标签时，开始解析"),s("code",[t._v("CSS")]),t._v("，生成"),s("code",[t._v("CSSOM")]),t._v("，值的注意的是此时解析"),s("code",[t._v("HTML")]),t._v("标签与解析"),s("code",[t._v("CSS")]),t._v("是并行执行的。")]),t._v(" "),s("li",[t._v("解析到没有设置异步加载的"),s("code",[t._v("<script>")]),t._v("的时候，阻塞文档解析，等待"),s("code",[t._v("Js")]),t._v("脚本加载并且执行完成后，才会继续解析文档。")]),t._v(" "),s("li",[t._v("解析到异步"),s("code",[t._v("<script>")]),t._v("的时候不阻塞解析文档，继续向下解析，"),s("code",[t._v("defer")]),t._v("属性会使"),s("code",[t._v("Js")]),t._v("文件等待"),s("code",[t._v("DOM Tree")]),t._v("构建完成之后再执行，而"),s("code",[t._v("async")]),t._v("属性会使"),s("code",[t._v("Js")]),t._v("文件在下载完成后立即执行。")]),t._v(" "),s("li",[t._v("解析文档的时候遇到需要加载外部资源例如图片时，先解析这个节点，根据"),s("code",[t._v("src")]),t._v("创建加载线程，异步加载图片资源，不阻塞解析文档，当然浏览器对于一个域名能够开启最大的线程数量会有限制。")]),t._v(" "),s("li",[t._v("文档解析完成，"),s("code",[t._v('document.readyState = "interactive"')]),t._v("。")]),t._v(" "),s("li",[t._v("设置为"),s("code",[t._v("defer")]),t._v("属性的"),s("code",[t._v("<script>")]),t._v("脚本开始按照顺序执行。")]),t._v(" "),s("li",[t._v("触发"),s("code",[t._v("DOMContentLoaded")]),t._v("事件。")]),t._v(" "),s("li",[t._v("等待设置为"),s("code",[t._v("async")]),t._v("属性的"),s("code",[t._v("<script>")]),t._v("以及图片与"),s("code",[t._v("<iframe>")]),t._v("等加载，直至页面完全加载完成。")]),t._v(" "),s("li",[s("code",[t._v("load")]),t._v("事件触发，"),s("code",[t._v('document.readyState = "complete"')]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用"}},[t._v("#")]),t._v(" 调用")]),t._v(" "),s("p",[t._v("有些时候我们希望尽快介入对"),s("code",[t._v("DOM")]),t._v("的干涉，此时调用"),s("code",[t._v("DOMContentLoaded")]),t._v("事件显然更加合适，而为了处理各种浏览器，需要对其进行兼容处理。")]),t._v(" "),s("ul",[s("li",[t._v("对于支持"),s("code",[t._v("DOMContentLoaded")]),t._v("的浏览器使用"),s("code",[t._v("DOMContentLoaded")]),t._v("事件。")]),t._v(" "),s("li",[t._v("如果是小于"),s("code",[t._v("525")]),t._v("版本的"),s("code",[t._v("Webkit")]),t._v("则通过轮询"),s("code",[t._v("document.readyState")]),t._v("来实现。")]),t._v(" "),s("li",[t._v("对于旧版本的"),s("code",[t._v("IE")]),t._v("浏览器使用"),s("code",[t._v("Diego Perini")]),t._v("发现的著名"),s("code",[t._v("hack")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* https://www.cnblogs.com/JulyZhang/archive/2011/02/12/1952484.html */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * 注册浏览器的DOMContentLoaded事件\n * @param { Function } onready [必填]在DOMContentLoaded事件触发时需要执行的函数\n * @param { Object } config [可选]配置项\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDOMContentLoaded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("onready"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浏览器检测相关对象，在此为节省代码未实现，实际使用时需要实现。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//var Browser = {};")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置是否在FF下使用DOMContentLoaded（在FF2下的特定场景有Bug）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableMozDOMReady")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isReady "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//确保onready只执行一次")]),t._v("\n        isReady "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onready")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*IE*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Webkit*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("525")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("loaded|complete")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*FF Opera 高版webkit 其他*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" Browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableMozDOMReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOMContentLoaded"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOMContentLoaded"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br")])]),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/WindrunnerMax/EveryDay\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://juejin.im/post/6844903667733118983\nhttps://juejin.im/post/6844903535314731021\nhttps://juejin.im/post/6844903623583891469\nhttps://juejin.im/post/6844904072340832264\nhttps://juejin.im/post/6844904176569286669\nhttps://www.cnblogs.com/caizhenbo/p/6679478.html\nhttps://www.cnblogs.com/rubylouvre/p/4536334.html\nhttps://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded\nhttps://gwjacqueline.github.io/%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BDjs/\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);