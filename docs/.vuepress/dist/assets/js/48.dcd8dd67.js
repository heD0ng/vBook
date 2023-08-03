(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{360:function(v,_,e){"use strict";e.r(_);var t=e(7),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"http协议发展历程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议发展历程"}},[v._v("#")]),v._v(" HTTP协议发展历程")]),v._v(" "),_("p",[_("code",[v._v("HTTP")]),v._v("超文本传输协议是一个用于传输超文本文档的应用层协议，它是为"),_("code",[v._v("Web")]),v._v("浏览器与"),_("code",[v._v("Web")]),v._v("服务器之间的通信而设计的，"),_("code",[v._v("HTTP")]),v._v("协议到目前为止全部的版本可以分为"),_("code",[v._v("HTTP 0.9")]),v._v("、"),_("code",[v._v("HTTP 1.0")]),v._v("、"),_("code",[v._v("HTTP 1.1")]),v._v("、"),_("code",[v._v("HTTP 2.0")]),v._v("、"),_("code",[v._v("HTTP 3.0")]),v._v("，其中现在普遍应用的版本是"),_("code",[v._v("HTTP 1.1")]),v._v("版本，正在推进"),_("code",[v._v("HTTP 2.0")]),v._v("版本，以及未来的"),_("code",[v._v("HTTP 3.0")]),v._v("版本。")]),v._v(" "),_("h2",{attrs:{id:"http-0-9"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9"}},[v._v("#")]),v._v(" HTTP 0.9")]),v._v(" "),_("p",[_("code",[v._v("HTTP 0.9")]),v._v("也被称为单行协议，最初版本的"),_("code",[v._v("HTTP")]),v._v("协议并没有版本号，后来它的版本号被定位在"),_("code",[v._v("0.9")]),v._v(" 以区分后来的版本，"),_("code",[v._v("HTTP 0.9")]),v._v("极其简单，请求由单行指令构成，以唯一可用方法"),_("code",[v._v("GET")]),v._v("开头，其后跟目标资源的路径。"),_("code",[v._v("HTTP 0.9")]),v._v("的响应内容并不包含"),_("code",[v._v("HTTP")]),v._v("头，这意味着只有"),_("code",[v._v("HTML")]),v._v("文件可以传送，无法传输其他类型的文件，也没有状态码或错误代码，出现异常时一个特殊的包含问题描述信息的"),_("code",[v._v("HTML")]),v._v("文件将被响应返回。")]),v._v(" "),_("h3",{attrs:{id:"特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),_("ul",[_("li",[v._v("只有一个请求行，并没有"),_("code",[v._v("HTTP")]),v._v("请求头和请求体。")]),v._v(" "),_("li",[v._v("服务器没有返回头信息，只返回数据信息。")]),v._v(" "),_("li",[v._v("第三个是返回的文件内容是以ASCII 字符流来传输的，因为都是HTML 格式的文件，所以使用ASCII 字节码来传输是最合适的。")])]),v._v(" "),_("h2",{attrs:{id:"http-1-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[v._v("#")]),v._v(" HTTP 1.0")]),v._v(" "),_("p",[_("code",[v._v("HTTP 1.0")]),v._v("构建了可扩展性，为了满足传输多种类型文件的需求，为了让客户端和服务器能更深入地交流，"),_("code",[v._v("HTTP 1.0")]),v._v("引入了请求头和响应头，它们都是以为"),_("code",[v._v("Key-Value")]),v._v("形式保存的，在"),_("code",[v._v("HTTP")]),v._v("发送请求时，会带上请求头信息，服务器返回数据时，会先返回响应头信息。")]),v._v(" "),_("h3",{attrs:{id:"特点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),_("ul",[_("li",[v._v("协议版本信息会随着每个请求发送，即"),_("code",[v._v("HTTP 1.0")]),v._v("被追加到了"),_("code",[v._v("GET")]),v._v("行。")]),v._v(" "),_("li",[v._v("引入请求头，在发起请求时候会通过"),_("code",[v._v("HTTP")]),v._v("请求头告诉服务器它期待服务器返回什么类型的文件、采取什么形式的压缩、提供什么语言的文件以及文件的具体编码。")]),v._v(" "),_("li",[v._v("引入响应头，服务器以请求头中信息准备数据，并以响应头的信息告诉客户端数据采用何种格式返回，倘若遇到不支持的格式，只能返回服务器支持的格式，并在响应头中体现，也就是说最终浏览器是以响应头的信息解析数据。")]),v._v(" "),_("li",[v._v("引入状态码，状态码会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为。")]),v._v(" "),_("li",[v._v("引入了缓存机制，通过状态码与"),_("code",[v._v("If-Modified-Since")]),v._v("、"),_("code",[v._v("Expires")]),v._v("等控制更新或使用本地缓存。")]),v._v(" "),_("li",[v._v("引入了"),_("code",[v._v("Content-Type")]),v._v("头，使"),_("code",[v._v("HTTP")]),v._v("具备了传输除纯文本"),_("code",[v._v("HTML")]),v._v("文件以外其他类型文档的能力。")])]),v._v(" "),_("h2",{attrs:{id:"http-1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[v._v("#")]),v._v(" HTTP 1.1")]),v._v(" "),_("p",[_("code",[v._v("HTTP 1.1")]),v._v("是标准化的协议，"),_("code",[v._v("HTTP 1.1")]),v._v("消除了大量歧义内容并引入了多项改进。")]),v._v(" "),_("h3",{attrs:{id:"特点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),_("ul",[_("li",[v._v("缓存处理，"),_("code",[v._v("HTTP 1.1")]),v._v("引入了更多的缓存控制策略，例如"),_("code",[v._v("Entity tag")]),v._v("、"),_("code",[v._v("If-Unmodified-Since")]),v._v("、"),_("code",[v._v("If-Match")]),v._v("、"),_("code",[v._v("If-None-Match")]),v._v("等更多可供选择的缓存头来控制缓存策略。")]),v._v(" "),_("li",[v._v("带宽优化以及网络连接的使用，在请求头中引入了"),_("code",[v._v("range")]),v._v("，它允许只请求资源的某一个部分，即返回"),_("code",[v._v("206")]),v._v("状态码，这样方便了开发者自由选择以便充分利用带宽和链接，并且可以使用"),_("code",[v._v("Range")]),v._v("和"),_("code",[v._v("Content-Range")]),v._v("制作断点续传功能。")]),v._v(" "),_("li",[v._v("错误通知的管理，在"),_("code",[v._v("HTTP 1.1")]),v._v("中新增了"),_("code",[v._v("24")]),v._v("个错误状态码。")]),v._v(" "),_("li",[v._v("增加"),_("code",[v._v("Host")]),v._v("请求头，能够使不同域名配置在同一个"),_("code",[v._v("IP")]),v._v("地址的服务器上。")]),v._v(" "),_("li",[v._v("支持长连接，"),_("code",[v._v("HTTP 1.1")]),v._v("支持长连接，在一个"),_("code",[v._v("TCP")]),v._v("连接上可以传输多个"),_("code",[v._v("HTTP")]),v._v("请求和响应，减少了建立和关闭连接的消耗和延迟，在"),_("code",[v._v("HTTP 1.1")]),v._v("中默认开启"),_("code",[v._v("Connection：keep-alive")]),v._v("，一般浏览器对于同一个域名允许同时建立"),_("code",[v._v("6")]),v._v("个长链接。")]),v._v(" "),_("li",[v._v("增加管线化技术，允许在第一个应答被完全发送之前就发送第二个请求，以改善队头阻塞问题，但响应的顺序还是会按照请求的顺序返回。")]),v._v(" "),_("li",[v._v("支持响应分块，通过设置"),_("code",[v._v("Transfer-Encoding: chunked")]),v._v("进行分块响应，允许响应的数据可以分成多个部分，配合服务端尽早释放缓冲可以获得更快的响应速度。")])]),v._v(" "),_("h2",{attrs:{id:"http-2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[v._v("#")]),v._v(" HTTP 2.0")]),v._v(" "),_("p",[_("code",[v._v("HTTP 2.0")]),v._v("拥有更优异的表现，现网页愈渐变得的复杂，甚至演变成了独有的应用，媒体的播放量，增进交互的脚本大小也增加了许多，更多的数据通过"),_("code",[v._v("HTTP")]),v._v("请求被传输，由此"),_("code",[v._v("HTTP 2.0")]),v._v("为网络效率做了大量的优化。")]),v._v(" "),_("h3",{attrs:{id:"特点-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-4"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),_("ul",[_("li",[v._v("二进制分帧，"),_("code",[v._v("HTTP 2.0")]),v._v("是二进制协议而不是文本协议，将所有传输的信息分割为更小的消息和帧,并对它们采用二进制格式的编码。")]),v._v(" "),_("li",[v._v("多路复用，并行的请求能在同一个链接中处理，在同一域名下所有访问都是从同一个"),_("code",[v._v("TCP")]),v._v("连接中走，"),_("code",[v._v("HTTP")]),v._v("消息被分解为独立的帧，服务端根据标识符和首部将消息重新组装起来，移除了"),_("code",[v._v("HTTP 1.1")]),v._v("中顺序和阻塞的约束。")]),v._v(" "),_("li",[v._v("压缩"),_("code",[v._v("header")]),v._v("，"),_("code",[v._v("header")]),v._v("在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。")]),v._v(" "),_("li",[v._v("服务端推送，服务器可以主动地向客户端推送资源，而无需客户端明确的请求。")])]),v._v(" "),_("h2",{attrs:{id:"http-3-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-3-0"}},[v._v("#")]),v._v(" HTTP 3.0")]),v._v(" "),_("p",[_("code",[v._v("HTTP 3.0")]),v._v("目前处于制订和测试阶段，是未来的全新的"),_("code",[v._v("HTTP")]),v._v("协议，"),_("code",[v._v("HTTP 3.0")]),v._v("协议运行在"),_("code",[v._v("QUIC")]),v._v("协议之上，是在"),_("code",[v._v("UDP")]),v._v("的基础上实现了可靠传输，权衡传输速度与传输可靠性并加以优化，使用"),_("code",[v._v("UDP")]),v._v("将避免"),_("code",[v._v("TCP")]),v._v("的队头阻塞问题，并加快网络传输速度，但同样需要实现可靠传输的机制，"),_("code",[v._v("HTTP 3.0")]),v._v("不是"),_("code",[v._v("HTTP 2.0")]),v._v("的拓展，"),_("code",[v._v("HTTP 3.0")]),v._v("将会是一个全新的协议。")]),v._v(" "),_("h2",{attrs:{id:"每日一题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[v._v("#")]),v._v(" 每日一题")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("https://github.com/WindrunnerMax/EveryDay\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("https://www.cnblogs.com/heluan/p/8620312.html\nhttps://www.lizenghai.com/archives/67621.html\nhttps://juejin.im/post/5ce37660f265da1bb13f05f0\nhttps://www.chainnews.com/zh-hant/articles/401950499827.htm\nhttps://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])])])}),[],!1,null,null,null);_.default=a.exports}}]);