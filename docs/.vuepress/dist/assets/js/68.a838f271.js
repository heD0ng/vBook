(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{381:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[s._v("#")]),s._v(" 跨域")]),s._v(" "),t("p",[s._v("制定"),t("code",[s._v("HTML")]),s._v("规则时，出于安全的考虑，一个源的网站不允许与另一个源的资源进行交互，浏览器制定此规则为"),t("strong",[s._v("同源策略")]),s._v("。")]),s._v(" "),t("p",[s._v("同源即指的网站具有相同的域，即 "),t("strong",[s._v("协议(protocol)、主机(host)、端口号(port)")]),s._v(" 相同。")]),s._v(" "),t("p",[s._v("跨域资源嵌入是允许的，但是浏览器限制了"),t("code",[s._v("Javascript")]),s._v("不能与加载的内容进行交互，如嵌入的"),t("code",[s._v("<script>、<img>、<link>、<iframe>")]),s._v("等。")]),s._v(" "),t("h2",{attrs:{id:"受限的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#受限的场景"}},[s._v("#")]),s._v(" 受限的场景")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("XHR")]),s._v("请求不能发送。")]),s._v(" "),t("li",[s._v("无法对跨域请求的资源进行修改。")]),s._v(" "),t("li",[s._v("不同源的"),t("code",[s._v("Cookie")]),s._v("、"),t("code",[s._v("LocalStorage")]),s._v("无法读取。")])]),s._v(" "),t("h2",{attrs:{id:"跨域解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域解决方案"}},[s._v("#")]),s._v(" 跨域解决方案")]),s._v(" "),t("h3",{attrs:{id:"jsonp跨域请求数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp跨域请求数据"}},[s._v("#")]),s._v(" JSONP跨域请求数据")]),s._v(" "),t("p",[s._v("由于"),t("code",[s._v("<script>")]),s._v("可以对跨域资源进行请求，于是可以对"),t("code",[s._v("DOM")]),s._v("动态地"),t("code",[s._v("append")]),s._v("一个"),t("code",[s._v("<script>")]),s._v("并添加"),t("code",[s._v("src")]),s._v("且携带一个"),t("code",[s._v("callback")]),s._v("函数名,待请求完成后调用"),t("code",[s._v("callback")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//前端")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jsonpHandle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//首先定义函数，请求完成后会携带参数调用函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1/test.php?callback=jsonpHandle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<script><\\/script>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("attr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 动态地添加一个script")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后端配合实现")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"b"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$callback")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'callback'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$callback")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"("')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json_encode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('")"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"cors跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors跨域"}},[s._v("#")]),s._v(" CORS跨域")]),s._v(" "),t("p",[s._v("对于简单请求，浏览器会直接发送"),t("code",[s._v("CORS")]),s._v("请求，具体说来就是在"),t("code",[s._v("header")]),s._v("中加入"),t("code",[s._v("origin")]),s._v("请求头字段。同样，在响应头中，返回服务器设置的相关"),t("code",[s._v("CORS")]),s._v("头部字段，"),t("code",[s._v("Access-Control-Allow-Origin")]),s._v("字段为允许跨域请求的源。请求时浏览器在请求头的"),t("code",[s._v("Origin")]),s._v("中说明请求的源，服务器收到后发现允许该源跨域请求，则会成功返回。"),t("br"),s._v("\n对于非简单请求，浏览器会自动先发送一个"),t("code",[s._v("options")]),s._v("请求，如果发现服务器支持该请求，则会将真正的请求发送到后端，反之，如果浏览器发现服务端并不支持该请求，则会在控制台抛出错误。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//响应头 Response Headers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Content-Type: text/html;charset=utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Access-Control-Allow-Origin:http://localhost:8080'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// *代表允许任何网址请求")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Access-Control-Allow-Methods:POST,GET'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许请求的类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Access-Control-Allow-Credentials: true'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置是否允许发送 cookies")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Access-Control-Allow-Headers: Content-Type,Origin,Refer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许自定义请求头的字段 ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"nginx代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx代理"}},[s._v("#")]),s._v(" Nginx代理")]),s._v(" "),t("p",[s._v("通过代理的手段，监听同一端口添加不同路径实现不同服务的跨域访问。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("location  /test\n{\n    proxy_pass   http://127.0.0.1:81;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"图片ping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片ping"}},[s._v("#")]),s._v(" 图片ping")]),s._v(" "),t("p",[s._v("直接新建一个"),t("code",[s._v("<img>")]),s._v("，然后在地址中存放一些简单数据，这种方法只支持"),t("code",[s._v("get")]),s._v("请求，且只能单向地向服务器发送请求，在统计广告曝光次数中比较常见，"),t("code",[s._v("XSS")]),s._v("攻击也常用其获取"),t("code",[s._v("cookie")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<img src="http://127.0.0.1?key=value">\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"相同主域document-domain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同主域document-domain"}},[s._v("#")]),s._v(" 相同主域document.domain")]),s._v(" "),t("p",[s._v("例如对于"),t("code",[s._v("www.example.com")]),s._v("与"),t("code",[s._v("abc.example.com")]),s._v("，其主域名是一样的。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domain "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//相同主域")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ifrWin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ifr"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contentWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可以操作iframe")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"window-name共享数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-name共享数据"}},[s._v("#")]),s._v(" window.name共享数据")]),s._v(" "),t("p",[s._v("不同域的"),t("code",[s._v("iframe")]),s._v("把共享的信息放在"),t("code",[s._v("window.name")]),s._v("里面，此方法只适用于两个"),t("code",[s._v("iframe")]),s._v("之间的跨域。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"b"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"window-postmessage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-postmessage"}},[s._v("#")]),s._v(" window.postMessage")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("window.postMessage")]),s._v("来向其它的"),t("code",[s._v("window")]),s._v("对象发送消息，无论这个"),t("code",[s._v("window")]),s._v("对象是属于同源或不同源，这种方法不能和服务端交换数据。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//主window")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("frames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:81"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//iframe //出于安全考虑验证来源")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);