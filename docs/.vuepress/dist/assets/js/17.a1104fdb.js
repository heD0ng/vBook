(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{331:function(t,v,_){"use strict";_.r(v);var a=_(7),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"有哪些可能引起前端安全的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有哪些可能引起前端安全的问题"}},[t._v("#")]),t._v(" 有哪些可能引起前端安全的问题？")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("跨站脚本攻击（Cross-Site Scripting，XSS）")]),t._v("：一种代码注入方式，为了与 CSS 区分所以被称为 XSS。早期常见于网络论坛，起因是网站没有对用户的输入进行严格的限制，使得攻击者可以将脚本上传到帖子让其他啊人在浏览到有恶意脚本的页面。其注入方式很简单，包括但不限于 JavaScript / VBScript / CSS / Flash 等；")]),t._v(" "),v("li",[v("strong",[t._v("iframe滥用")]),t._v("：iframe 中的内容是由第三方来提供的，默认情况下它们不受我们控制，它们可以在 iframe 中运行 JavaScript 脚本、Flash 插件、弹出对话框等，这些可能会破坏前端用户的体验；")]),t._v(" "),v("li",[v("strong",[t._v("跨站请求伪造（Cross-Site Request Forgeries，CSRF）")]),t._v("：指攻击者通过设置好的陷阱，强制对于完成认证的用户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击；")]),t._v(" "),v("li",[v("strong",[t._v("恶意第三方库")]),t._v("：无论开发服务端还是客户端，绝大多数时候我们都在借助开发框架和各种第三方工具库进行快速开发，一旦第三方库被植入恶意代码人容易引起安全问题。")])]),t._v(" "),v("h2",{attrs:{id:"xss-攻击-跨站脚本攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS 攻击（跨站脚本攻击）")]),t._v(" "),v("blockquote",[v("p",[t._v("英文全称：Cross Site Script，XSS 攻击，通常指黑客通过 HTML 注入篡改了网页，插入恶意脚本，从而在用户浏览网页时，控制用户浏览器的一种行为")])]),t._v(" "),v("h3",{attrs:{id:"xss分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss分类"}},[t._v("#")]),t._v(" XSS分类")]),t._v(" "),v("p",[t._v("根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM型三种。")]),t._v(" "),v("ul",[v("li",[t._v("存储区：恶意代码存放的位置；")]),t._v(" "),v("li",[t._v("插入点：由谁取得恶意代码，并插入到网站。")])]),t._v(" "),v("h4",{attrs:{id:"存储型xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储型xss"}},[t._v("#")]),t._v(" 存储型XSS")]),t._v(" "),v("blockquote",[v("p",[t._v("原理：一般是攻击者输入的恶意代码存储在服务端，主要是将 XSS 代码发送到服务器（不管是数据库、内存还是文件系统），只要受害者浏览包含次恶意代码的网页就会执行恶意代码")])]),t._v(" "),v("p",[t._v("存储型攻击步骤：")]),t._v(" "),v("ol",[v("li",[t._v("攻击者将恶意代码提交到目标服务器中；")]),t._v(" "),v("li",[t._v("用户打开目标网站时，网站服务器取出包含恶意代码的数据，拼接在 HTML 中返回给浏览器；")]),t._v(" "),v("li",[t._v("用户浏览器接收到相应后解析执行，混在其中的恶意代码也被执行；")]),t._v(" "),v("li",[t._v("恶意代码窃取用户数据并发送到攻击者网站；或冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),v("p",[t._v("这种攻击常见于带有用户保存数据的网站，比如论坛发帖、商品评论、用户私信等。")]),t._v(" "),v("h4",{attrs:{id:"反射型xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#反射型xss"}},[t._v("#")]),t._v(" 反射型XSS")]),t._v(" "),v("blockquote",[v("p",[t._v("原理：反射型 XSS，也叫非持久型 XSS，是指发生请求时，XSS 代码出现在请求 URL 中，作为参数提交到服务器中，服务器解析并响应。响应结果中包含 XSS 代码，最后浏览器解析并执行")])]),t._v(" "),v("p",[t._v("反射型攻击步骤：")]),t._v(" "),v("ol",[v("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码；")]),t._v(" "),v("li",[t._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器；")]),t._v(" "),v("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行；")]),t._v(" "),v("li",[t._v("恶意代码窃取用户数据并发送到攻击者网站；或冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),v("p",[t._v("反射型 XSS 漏洞常见于通过 URL 传参的功能，比如网站搜索、跳转等。")]),t._v(" "),v("p",[t._v("由于需要用户主动打开恶意的 URL 才能生效，因此攻击者往往会结合多种手段诱导用户点击。")]),t._v(" "),v("h4",{attrs:{id:"dom型xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom型xss"}},[t._v("#")]),t._v(" DOM型XSS")]),t._v(" "),v("blockquote",[v("p",[t._v("原理：同以上反射型XSS 攻击一样。")])]),t._v(" "),v("p",[t._v("DOM型攻击步骤：")]),t._v(" "),v("ol",[v("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码；")]),t._v(" "),v("li",[t._v("用户打开带有恶意代码的 URL；")]),t._v(" "),v("li",[t._v("用户浏览器接收到相应后解析执行，前端 js 取出 URL 中的恶意代码并执行；")]),t._v(" "),v("li",[t._v("恶意代码窃取用户数据并发送到攻击者网站；或冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),v("p",[t._v("DOM型XSS 和前两种 XSS 的区别：DOM型取出和执行恶意代码由浏览器完成，属于前端自身的安全漏洞；而其他两种则属于服务端的安全漏洞。")]),t._v(" "),v("h3",{attrs:{id:"xss防御"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss防御"}},[t._v("#")]),t._v(" XSS防御")]),t._v(" "),v("p",[t._v("XSS 攻击有两大要素：")]),t._v(" "),v("ul",[v("li",[t._v("攻击者提交恶意代码；")]),t._v(" "),v("li",[t._v("浏览器执行恶意代码。")])]),t._v(" "),v("h4",{attrs:{id:"输入过滤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#输入过滤"}},[t._v("#")]),t._v(" 输入过滤")]),t._v(" "),v("p",[t._v("在用户提交时，由前端过滤输入，然后提交到后端，是否可行？")]),t._v(" "),v("p",[t._v("答案是 "),v("strong",[t._v("不可行")]),t._v("。一旦攻击者绕过前端过滤，直接构造请求，这样就可以提交恶意代码了。")]),t._v(" "),v("p",[t._v("那换一个过滤时机：后端在写入数据库前进行过滤，然后把 "),v("em",[t._v("安全的")]),t._v(" 内容返回给前端，是否可行？")]),t._v(" "),v("p",[t._v("答案是 "),v("strong",[t._v("不可行")]),t._v("。因为，在写入数据库前进行输入过滤虽然可以过滤掉一部分内容，但是用户的使用场景是很复杂的，我们很难判断出内容会输出到哪里，一旦用户输入的内容经过了转码，客户端就需要进行反转码，而前端不同的位置所需要的编码也是不同的。因此输入侧过滤虽然能够在某些情况下解决 XSS 问题，但是会引入很大的不确定性和乱码问题，所以应当尽量避免使用这种方法。")]),t._v(" "),v("p",[t._v("当然，对于明确的输入类型，例如数字、URL、电话号码、邮件地址等内容，进行输入过滤还是必要的。")]),t._v(" "),v("h4",{attrs:{id:"防止执行恶意代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防止执行恶意代码"}},[t._v("#")]),t._v(" 防止执行恶意代码")]),t._v(" "),v("p",[t._v("存储型和反射型XSS 都是在服务端取出恶意代码后，插入到响应 HTML 中，攻击者可以编写的 "),v("em",[t._v("数据")]),t._v(" 被内嵌到 "),v("em",[t._v("代码")]),t._v(" 中，被浏览器执行。")]),t._v(" "),v("p",[t._v("预防这两种漏洞，有两种常见的做法：")]),t._v(" "),v("ul",[v("li",[t._v("改成纯前端渲染，把代码和数据分隔开；")]),t._v(" "),v("li",[t._v("对 HTML 做充分转义。")])]),t._v(" "),v("h4",{attrs:{id:"纯前端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#纯前端渲染"}},[t._v("#")]),t._v(" 纯前端渲染")]),t._v(" "),v("p",[t._v("目前主流框架采用的 SPA 的方式，我们会明确告诉浏览器：下面要设置的内容是文本（"),v("code",[t._v(".innerText")]),t._v("），还是属性（"),v("code",[t._v(".setAttribute")]),t._v("），还是样式（"),v("code",[t._v(".style")]),t._v("）等等。浏览器不会轻易被欺骗，执行与其外的代码。")]),t._v(" "),v("p",[t._v("但纯前端渲染仍需要避免 DOM型 XSS攻击。")]),t._v(" "),v("p",[t._v("在很多内部、管理系统中，纯前端渲染是非常合适的，但对于高性能要求，或者是有 seo 需求的页面，我们仍然要面对拼接 HTML 的问题。")]),t._v(" "),v("h4",{attrs:{id:"转义-html"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#转义-html"}},[t._v("#")]),t._v(" 转义 HTML")]),t._v(" "),v("p",[t._v("如果拼接 HTML 是必要的，就需要采用合适的转义库对 HTML 模版的各处插入点进行充分的转义。")]),t._v(" "),v("p",[t._v("常见的模版引擎有 ejs 等，对于 HTML 转义通常只有一个规则，就是把 "),v("code",[t._v("& < > \" ' /")]),t._v(" 这几个字符转义掉。当然这确实可以起到一定的防护作用，但还不够完善。")]),t._v(" "),v("h3",{attrs:{id:"预防-dom型-xss-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#预防-dom型-xss-攻击"}},[t._v("#")]),t._v(" 预防 DOM型 XSS 攻击")]),t._v(" "),v("p",[t._v("在使用 "),v("code",[t._v(".innerHTML")]),t._v("、"),v("code",[t._v(".outerHTML")]),t._v("、"),v("code",[t._v("document.write()")]),t._v(" 是要特别小心，不要把不可信的数据作为 HTML 插入到网页，尽量使用 "),v("code",[t._v(".textContent")]),t._v("、"),v("code",[t._v(".setAttribute()")]),t._v(" 等。")]),t._v(" "),v("p",[t._v("如果是使用 Vue / React 时，不要使用 "),v("code",[t._v("v-html")]),t._v(" / "),v("code",[t._v("dangerouslySetInnerHTML")]),t._v(" ，在前端避免 innerHTML、outerHTML 的 XSS 隐患。")]),t._v(" "),v("p",[t._v("另外，DOM 中的内联事件监听器，如 "),v("code",[t._v("location")]),t._v("、"),v("code",[t._v("onclick")]),t._v("、"),v("code",[t._v("onerror")]),t._v("、"),v("code",[t._v("onload")]),t._v("，"),v("code",[t._v("<a>")]),t._v(" 标签的 href 属性，JavaScript 的 "),v("code",[t._v("eval()")]),t._v("、"),v("code",[t._v("setTimeout()")]),t._v("、"),v("code",[t._v("setInterval()")]),t._v(" 等都能把字符串作为代码运行，如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，务必谨慎使用。")]),t._v(" "),v("h3",{attrs:{id:"其它-xss-防范措施"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它-xss-防范措施"}},[t._v("#")]),t._v(" 其它 XSS 防范措施")]),t._v(" "),v("p",[t._v("虽然在渲染页面和执行 JavaScript 时，通过谨慎的转义可以防止 XSS 的发生，但完全依靠开发的谨慎仍然是不够的。")]),t._v(" "),v("p",[t._v("以下介绍一些通用的方案，可以降低 XSS 带来的风险和后果。")]),t._v(" "),v("h4",{attrs:{id:"内容安全策略-content-security-policy-csp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内容安全策略-content-security-policy-csp"}},[t._v("#")]),t._v(" 内容安全策略（Content Security Policy，CSP）")]),t._v(" "),v("p",[t._v("严格的 CSP 在 XSS 的防范中可以起到以下的作用：")]),t._v(" "),v("ul",[v("li",[t._v("禁止加载外域代码，防止复杂的攻击逻辑；")]),t._v(" "),v("li",[t._v("禁止外域提交，网站被攻击后，用户的数据不会泄漏到外域；")]),t._v(" "),v("li",[t._v("禁止内联脚本执行；")]),t._v(" "),v("li",[t._v("禁止未授权的脚本执行；")]),t._v(" "),v("li",[t._v("合理使用上报可以及时发现 XSS，利于尽快修复问题。")])]),t._v(" "),v("p",[t._v("可以使用以下两种方式开启内容安全策略：")]),t._v(" "),v("ul",[v("li",[t._v("HTTP Header 中的 "),v("code",[t._v("Content-Security-Policy")])]),t._v(" "),v("li",[v("code",[t._v('<meta http-equiv="Content-Security-Policy">')])])]),t._v(" "),v("h4",{attrs:{id:"输入内容长度控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#输入内容长度控制"}},[t._v("#")]),t._v(" 输入内容长度控制")]),t._v(" "),v("p",[t._v("对于不受信任的输入，都应该先定一个合理的长度。虽然无法完全防止 XSS 的发生，但是可以增加 XSS 攻击的难度。")]),t._v(" "),v("h4",{attrs:{id:"httponly"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" HttpOnly")]),t._v(" "),v("p",[t._v("对敏感的 cookie 设置 HttpOnly，禁止 JavaScript 访问这些信息，攻击者在完成 XSS 攻击后也无法窃取敏感信息。")]),t._v(" "),v("h2",{attrs:{id:"csrf攻击-跨站请求伪造"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF攻击（跨站请求伪造）")]),t._v(" "),v("blockquote",[v("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造：攻击者又到受害者进入第三方网站，在第三方网站中向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")])]),t._v(" "),v("p",[t._v("一个典型的 CSRF攻击流程如下：")]),t._v(" "),v("ol",[v("li",[t._v("受害者登录网站A，保留了登录凭证（cookie）；")]),t._v(" "),v("li",[t._v("攻击者诱导受害者访问危险网站B；")]),t._v(" "),v("li",[t._v("危险网站B向网站A发送一个正常的请求，浏览器会默认携带存放在网站A下的 cookie；")]),t._v(" "),v("li",[t._v("网站A在接收到请求后，对请求进行验证，确认是受害者的凭证，误以为是受害者自己发送的请求；")]),t._v(" "),v("li",[t._v("网站A以受害者的名义，执行了危险请求中请求的操作；")])]),t._v(" "),v("h3",{attrs:{id:"csrf分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf分类"}},[t._v("#")]),t._v(" CSRF分类")]),t._v(" "),v("h4",{attrs:{id:"get-类型的-csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-类型的-csrf"}},[t._v("#")]),t._v(" GET 类型的 CSRF")]),t._v(" "),v("p",[t._v("GET 类型的 CSRF 实现方式非常简单，只需要一个普通的 HTTP 请求，一般会放在图片等资源里面，受害者在打开危险网站后，危险网站的图片加载就发出了一个危险的 GET 请求，这样就完成了一个 GET 类型的 CSRF 攻击。")]),t._v(" "),v("h4",{attrs:{id:"post-类型的-csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#post-类型的-csrf"}},[t._v("#")]),t._v(" POST 类型的 CSRF")]),t._v(" "),v("p",[t._v("这种方式通常会使用一个自动提交的表单。当访问该页面时，表单会自动提交，相当于模拟用户完成了一个 POST 操作。")]),t._v(" "),v("p",[t._v("POST 类型的攻击通常会比 GET 类型的更加严格一点，但仍并不复杂，所以后端的接口并不能将安全寄托在仅允许 POST 上面。")]),t._v(" "),v("h4",{attrs:{id:"链接类型的-csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链接类型的-csrf"}},[t._v("#")]),t._v(" 链接类型的 CSRF")]),t._v(" "),v("p",[t._v("这种方式并不常见，实现思路和 GET 类型一致，但是需要用户手动点击才能触发，因此攻击者通常会以广告的形式诱导用户中招。")]),t._v(" "),v("h3",{attrs:{id:"csrf防御"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf防御"}},[t._v("#")]),t._v(" CSRF防御")]),t._v(" "),v("p",[t._v("CSRF攻击通常发生在第三方网站，被攻击的网站无法防止攻击发生，只能提高自己的安全性。")]),t._v(" "),v("p",[t._v("CSRF的两个特点：")]),t._v(" "),v("ul",[v("li",[t._v("发生在第三方域名；")]),t._v(" "),v("li",[t._v("攻击者不能获取 cookie 信息，只能使用。")])]),t._v(" "),v("p",[t._v("针对这两点，我们可以专门指定防护策略：")]),t._v(" "),v("ul",[v("li",[t._v("阻止部名外域的访问\n"),v("ul",[v("li",[t._v("同源检测")]),t._v(" "),v("li",[t._v("Samesite Cookie")])])]),t._v(" "),v("li",[t._v("提交时要求附加本域才能获取的信息\n"),v("ul",[v("li",[t._v("Token")]),t._v(" "),v("li",[t._v("双重 Cookie 验证")])])])]),t._v(" "),v("h4",{attrs:{id:"同源检测"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同源检测"}},[t._v("#")]),t._v(" 同源检测")]),t._v(" "),v("p",[t._v("既然大多数 CSRF 都发生在第三方网站，那么我们就直接禁止外域对我们发起的请求：")]),t._v(" "),v("ul",[v("li",[t._v("使用 Origin Header 确定来源域名：在部分与 CSRF 相关的请求中，请求头不会携带 Origin 字段，如果 Origin 字段存在则可以使用它来确定来源域名；")]),t._v(" "),v("li",[t._v("使用 Referer Header 来确定来源域名：根据 HTTP 协议，在请求的头部会有一个 Referer 字段，记录了请求的来源地址。")])]),t._v(" "),v("h4",{attrs:{id:"csrf-token"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf-token"}},[t._v("#")]),t._v(" CSRF Token")]),t._v(" "),v("p",[t._v("CSRF 的另一个特征是攻击者无法直接窃取用户的信息，仅仅是冒用而已。")]),t._v(" "),v("p",[t._v("而 CSRF 之所以能成功，是因为服务器误把攻击者发送的请求当成用户自己的请求。那么我们可以要求所有的用户请求都携带一个 CSRF 无法获取到的 Token，服务器判断 Token 是否正确，从而将正常的请求和攻击的请求区分开。")]),t._v(" "),v("p",[t._v("防护策略分为三个步骤：")]),t._v(" "),v("ol",[v("li",[t._v("将 CSRF Token 输出到页面；")]),t._v(" "),v("li",[t._v("页面提交的请求携带这个 Token；")]),t._v(" "),v("li",[t._v("服务器验证 Token 是否正确。")])]),t._v(" "),v("h4",{attrs:{id:"双重-cookie-验证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双重-cookie-验证"}},[t._v("#")]),t._v(" 双重 Cookie 验证")]),t._v(" "),v("p",[t._v("原理和 Token 相似，在请求接口时，在请求参数中附带上对应的 cookie，服务端在接收到请求时对参数中的 cookie 和 cookie 中的值进行对比判断是否为攻击请求。")]),t._v(" "),v("h4",{attrs:{id:"samesite-cookie-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#samesite-cookie-属性"}},[t._v("#")]),t._v(" Samesite Cookie 属性")]),t._v(" "),v("p",[t._v("Google起草了一份草案来改进HTTP协议，那就是为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值:")]),t._v(" "),v("ul",[v("li",[t._v("Samesite=Strict: 这种称为严格模式，表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie")]),t._v(" "),v("li",[t._v("Samesite=Lax: 这种称为宽松模式，比 Strict 放宽了点限制,假如这个请求是这种请求且同时是个GET请求，则这个Cookie可以作为第三方Cookie")])]),t._v(" "),v("h2",{attrs:{id:"网络劫持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络劫持"}},[t._v("#")]),t._v(" 网络劫持")]),t._v(" "),v("h3",{attrs:{id:"网络劫持的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络劫持的分类"}},[t._v("#")]),t._v(" 网络劫持的分类")]),t._v(" "),v("ul",[v("li",[t._v("DNS劫持：输入京东被强制跳转到淘宝就属于 DNS劫持。\n"),v("ul",[v("li",[t._v("DNS强制解析：通过修改运营商本地 DNS 记录，来引导用户流量到缓存服务器；")]),t._v(" "),v("li",[t._v("302 跳转：通过监控网络出口的流量，分析判断哪些内容是可以进行劫持处理，在对劫持的内存发起 302 跳转的回复，引导用户获取内容。")])])]),t._v(" "),v("li",[t._v("HTTP劫持：例如访问百度，但是一直有贪玩蓝月的广告。由于 HTTP 是明文传输，运营商会修改你的 HTTP 响应内容（即加广告）。")])]),t._v(" "),v("h3",{attrs:{id:"网络劫持防御"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络劫持防御"}},[t._v("#")]),t._v(" 网络劫持防御")]),t._v(" "),v("p",[t._v("DNS劫持由于涉嫌违法，已经被监管起来，现在很少会遇到 DNS 劫持。")]),t._v(" "),v("p",[t._v("但是 HTTP 劫持依然非常盛行，最有效的方法就是使用 HTTPS，将 HTTP 加密起来，运营商无法获取明文，就无法劫持你的响应内容。")]),t._v(" "),v("h2",{attrs:{id:"中间人攻击-man-in-the-middle-attack-mitm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击-man-in-the-middle-attack-mitm"}},[t._v("#")]),t._v(" 中间人攻击（Man-in-the-middle attack，MITM）")]),t._v(" "),v("p",[t._v("中间人是指攻击者与通讯两端分别创建独立的联系，并交换其所收到的数据，使通讯的两端都认为他们正在一个私密的连接与对方直接对话，但实际上整个会话都被攻击者完全控制。在中间人攻击中，攻击者可以拦截通讯双方的通话，并插入新的内容。")]),t._v(" "),v("p",[t._v("一般流程如下：")]),t._v(" "),v("ul",[v("li",[t._v("服务端请求客户端，请求被中间人拦截；")]),t._v(" "),v("li",[t._v("服务器向客户端发送公钥；")]),t._v(" "),v("li",[t._v("中间人截取公钥，保留在自己手上，并伪造一个公钥发送给客户端；")]),t._v(" "),v("li",[t._v("客户端收到伪造的公钥后，生成加密密钥发送给服务端；")]),t._v(" "),v("li",[t._v("中间人通过私钥解密得到真密钥，同时生成假的密钥，用服务端的公钥加密后发送给服务端；")]),t._v(" "),v("li",[t._v("服务端收到请求后用私钥解密得到假的密钥，然后用假的密钥加密明文数据传输给客户端。")])]),t._v(" "),v("h2",{attrs:{id:"iframe-滥用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#iframe-滥用"}},[t._v("#")]),t._v(" Iframe 滥用")]),t._v(" "),v("p",[t._v("严格来说这个不算是安全问题，但是如果是要防范自己网站被人用 iframe 嵌套的话，可以使用这几种方法：")]),t._v(" "),v("h3",{attrs:{id:"添加响应头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加响应头"}},[t._v("#")]),t._v(" 添加响应头")]),t._v(" "),v("p",[t._v("在响应头中加一个 "),v("code",[t._v("X-Frame-Options")])]),t._v(" "),v("p",[t._v("取值有三种，大部分浏览器都支持：")]),t._v(" "),v("ul",[v("li",[t._v("DENY：拒绝当前页面加载任何 Frame 页面；")]),t._v(" "),v("li",[t._v("SAMEORIGIN：Frame 页面只能加载在同源网站下；")]),t._v(" "),v("li",[t._v("ALLOW-FROM origin：origin 为允许 Frame 页面加载的地址。")])]),t._v(" "),v("h3",{attrs:{id:"js-脚本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js-脚本"}},[t._v("#")]),t._v(" js 脚本")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" window"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是直接代替外窗，你也可以干别的")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h2",{attrs:{id:"jsonp-安全问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-安全问题"}},[t._v("#")]),t._v(" jsonp 安全问题")]),t._v(" "),v("h3",{attrs:{id:"csrf-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[t._v("#")]),t._v(" CSRF 攻击")]),t._v(" "),v("p",[t._v("前端构造一个恶意页面，请求 JSONP 接口，收集服务端的敏感信息。如果 JSONP 接口还涉及一些敏感操作或信息（如登陆、删除等操作）就更不安全了。")]),t._v(" "),v("p",[v("strong",[t._v("解决办法")]),t._v("：验证 JSONP 的调用来源（Referer），服务端判断 Referer 是否是白名单，或者部署随机 Token 来防御；避免敏感接口使用 JSONP 方法。")]),t._v(" "),v("h3",{attrs:{id:"xss-漏洞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss-漏洞"}},[t._v("#")]),t._v(" XSS 漏洞")]),t._v(" "),v("p",[t._v("不严谨的 content-type 导致的 XSS 漏洞，如果没有严格定义好 content-type（content-type：application/json），再加上没有过滤 callback 的参数，直接当 html 解析，就是一个赤裸裸的 XSS。")]),t._v(" "),v("p",[v("strong",[t._v("解决办法")]),t._v("：严格定义 content-type：application/json，然后严格过滤 callback 后的参数并限制长度（进行字符转译），这样返回的脚本内容会变成文本格式，脚本将不会执行）")])])}),[],!1,null,null,null);v.default=s.exports}}]);