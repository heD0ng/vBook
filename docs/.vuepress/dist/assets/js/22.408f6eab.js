(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{335:function(a,r,s){"use strict";s.r(r);var t=s(7),v=Object(t.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("https://juejin.cn/post/7116153752310153247")]),a._v(" "),r("h1",{attrs:{id:"垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[a._v("#")]),a._v(" 垃圾回收机制")]),a._v(" "),r("p",[a._v("浏览器的垃圾回收机制是指自动管理内存的一种机制，它能够自动检测和回收不再使用的内存，以避免内存泄漏和浪费。")]),a._v(" "),r("h2",{attrs:{id:"浏览器垃圾"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器垃圾"}},[a._v("#")]),a._v(" 浏览器垃圾")]),a._v(" "),r("p",[a._v("当一个对象（在堆-Heap里）没有任何变量或属性（在栈中）对它进行引用，此时将永远无法操作此对象。 "),r("strong",[a._v("讲人话就是：需要使用时就不是垃圾，用完不要了就是垃圾。")]),a._v("\n按照V8浏览器的标准，垃圾又分2种类型：")]),a._v(" "),r("ol",[r("li",[a._v("新生代的垃圾：生存时间短的对象（如内部声明的变量，或者块级作用域中的变量等），使用完马上可以回收。")]),a._v(" "),r("li",[a._v("老生代的垃圾：生存时间久的对象（如挂载在windows下面的变量、JS一些API、DOM、闭包等），持久性强，需要等待用完才能回收。\n![image-20230616144839422](/Users/hedong/Library/Application Support/typora-user-images/image-20230616144839422.png)\nV8 中会把堆分为新生代和老生代两个区域（如上图所示），新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象，\n新生区通常只支持 1～8M 的容量，而老生区支持的容量就大很多了。\n对于这两块区域，V8 分别使用两个不同的垃圾回收器，以便更高效地实施垃圾回收；")])]),a._v(" "),r("h2",{attrs:{id:"新生代垃圾回收"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新生代垃圾回收"}},[a._v("#")]),a._v(" 新生代垃圾回收")]),a._v(" "),r("p",[a._v("负责新生代的垃圾回收，其对象有2个特点：")]),a._v(" "),r("ul",[r("li",[a._v("内存占用比较小，通常只支持 1~8 M 的容量。")]),a._v(" "),r("li",[a._v("新生代被分为两个区域：一般是对象区域 - From 空间，一半是空闲区域 - To 空间。\n新生代垃圾回收采用的是复制算法，具体实现过程如下：")])]),a._v(" "),r("ol",[r("li",[a._v("将新生代内存空间分为两个区域：From 空间和 To 空间。")]),a._v(" "),r("li",[a._v("在 From 空间中分配内存，当 From 空间被占满时，就需要进行垃圾回收。")]),a._v(" "),r("li",[a._v("垃圾回收器会遍历 From 空间中的所有对象，将存活的对象复制到 To 空间中。")]),a._v(" "),r("li",[a._v("当所有存活的对象都被复制到 To 空间中后，From 空间就可以被清空。")]),a._v(" "),r("li",[a._v("最后，交换 From 空间和 To 空间的指针，使得 To 空间成为新的 From 空间。\n新生代垃圾回收机制的缺点是需要频繁进行垃圾回收。因为新生代中的对象存活时间较短，所以需要经常进行垃圾回收。而为了执行效率，一般新生区的空间会被设置得比较小。一旦检测到空间装满了，就执行垃圾回收。")])]),a._v(" "),r("h2",{attrs:{id:"老生代垃圾回收"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#老生代垃圾回收"}},[a._v("#")]),a._v(" 老生代垃圾回收")]),a._v(" "),r("p",[a._v("负责老生代的垃圾回收，其对象有2个特点：")]),a._v(" "),r("ul",[r("li",[a._v("对象占用空间大。")]),a._v(" "),r("li",[a._v("存活时间长，通常包括全局变量和长时间存活的对象。\n老生代垃圾回收通常采用的是标记清除法、标记整理算法，具体实现过程如下：")])]),a._v(" "),r("ol",[r("li",[a._v("标记清除算法：垃圾回收器会遍历所有对象，将所有被引用的对象标记为“存活”状态，然后清除未被标记的对象。")]),a._v(" "),r("li",[a._v("标记整理算法：垃圾回收器会将所有存活的对象移动到内存空间的一端，然后清除未被标记的对象。\n需要注意的是，因为老生代中的对象存活时间较长，所以需要占用较大的内存空间，这也是老生代垃圾回收机制的缺点之一。")])]),a._v(" "),r("h2",{attrs:{id:"新生代与老生代之间的转化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新生代与老生代之间的转化"}},[a._v("#")]),a._v(" 新生代与老生代之间的转化")]),a._v(" "),r("p",[a._v("在浏览器中，对象的存活时间会影响它们所处的内存空间。当一个对象存活时间较短时，它会被分配到新生代内存空间中；当一个对象存活时间较长时，它会被分配到老生代内存空间中。\n当一个对象在新生代内存空间中存活时间较长时，就会被转移到老生代内存空间中。具体实现过程如下：")]),a._v(" "),r("ol",[r("li",[a._v("当一个对象在新生代内存空间中存活一定的时间后，就会被认为是“老对象”。")]),a._v(" "),r("li",[a._v("当“老对象”占用的内存空间超过一定的阈值时，就会被转移到老生代内存空间中。")]),a._v(" "),r("li",[a._v("当老生代内存空间占用过多时，就需要进行垃圾回收。老生代垃圾回收采用的是标记清除算法和标记整理算法。\n需要注意的是，对象的存活时间和内存空间的划分是动态变化的，具体实现方式可能因浏览器而异。同时，开发者也可以通过手动释放内存、避免内存泄漏。")])]),a._v(" "),r("h2",{attrs:{id:"垃圾回收方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收方案"}},[a._v("#")]),a._v(" 垃圾回收方案：")]),a._v(" "),r("h3",{attrs:{id:"分代收集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分代收集"}},[a._v("#")]),a._v(" 分代收集")]),a._v(" "),r("p",[a._v("一句话总结分代回收就是：将堆分为新生代与老生代，多回收新生代，少回收老生代。\n这样就减少了每次需遍历的对象，从而减少每次垃圾回收的耗时。\nTODO：增加图片展示")]),a._v(" "),r("h3",{attrs:{id:"增量收集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增量收集"}},[a._v("#")]),a._v(" 增量收集")]),a._v(" "),r("p",[a._v("如果脚本中有许多对象，引擎一次性遍历整个对象，会造成一个长时间暂停。\n所以引擎将垃圾收集工作分成更小的块，每次处理一部分，多次处理。\n这样就解决了长时间停顿的问题。")]),a._v(" "),r("h3",{attrs:{id:"空闲收集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#空闲收集"}},[a._v("#")]),a._v(" 空闲收集")]),a._v(" "),r("p",[a._v("垃圾收集器只会在 CPU 空闲时尝试运行，以减少可能对代码执行的影响。")]),a._v(" "),r("h2",{attrs:{id:"内存泄漏-溢出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏-溢出"}},[a._v("#")]),a._v(" 内存泄漏（溢出）")]),a._v(" "),r("p",[a._v("浏览器环境中，垃圾过多但回收不及时，就会导致占用大量内存空间，进而导致程序运行变慢、电脑卡顿。")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("内存溢出")]),a._v("：一种程序运行出现的错误。当程序运行需要的内存超过了剩余的内存时，就会抛出内存溢出的错误。")]),a._v(" "),r("li",[r("strong",[a._v("内存泄漏")]),a._v("：占用的内存没有及时释放；内存泄露积累多了就容易导致内存溢出。\n常见造成内存泄漏的情况有：")]),a._v(" "),r("li",[a._v("意外的全局变量（如定义局部变量时忘了写var、使用完成之后未及时清除）；")]),a._v(" "),r("li",[a._v("没有及时清理的计数器、定时器、回调函数、监听器（这条也就是咱们最常说的闭包）；\n除去浏览器自身的垃圾回收机制，我们还可以手动清除：")])]),a._v(" "),r("ul",[r("li",[a._v("将不再使用的对象设置为null即可。如obj=null，浏览器垃圾回收算法会不定时清除;")])]),a._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),r("ul",[r("li",[a._v("浏览器中所有的对象都会先放入新生代内存空间中，再根据对象存活时间长短决定是否放入老生代内存空间吗？\n答：不是所有的对象都会先放入新生代内存空间中，再根据对象存活时间长短决定是否放入老生代内存空间。通常情况下，新生代内存空间是专门用来存放存活时间较短的对象的内存空间。当一个对象被创建时，如果它的存活时间较短，就会被分配到新生代内存空间中。如果它的存活时间较长，就会被分配到老生代内存空间中。\n但是，有些对象的大小超过了新生代内存空间的限制，或者它们的存活时间较长，就会直接被分配到老生代内存空间中。此外，还有一些特殊情况，例如大数组和大字符串等，也可能直接被分配到老生代内存空间中。")]),a._v(" "),r("li",[a._v("GC的缺陷\n答：和其他语言一样，javascript的GC策略也无法避免一个问题：GC时，停止响应其他操作，这是为了安全考虑。而Javascript的GC在100ms甚至以上，对一般的应用还好，但对于JS游戏，动画对连贯性要求比较高的应用，就麻烦了。这就是新引擎需要优化的点：避免GC造成的长时间停止响应。")]),a._v(" "),r("li",[a._v("为什么需要对调From空间和To空间\n答：副垃圾回收器没有碎片整理。因为空闲区域里此时是有序的，没有碎片，也就不需要整理了。\ncancelToken只是把axios请求设置为了rejected。")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function shuffle(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}\nconst arr = [1, 2, 3, 4, 5];\nconst shuffledArr = shuffle(arr);\nconsole.log(shuffledArr); // [3, 1, 5, 2, 4]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br")])]),r("p",[a._v("可以看出：老生代数据的大小要比新生代大一些。")]),a._v(" "),r("p",[a._v("谷歌账号：hedong7135@gmail.com\n谷歌密码：he123456789.?")])])}),[],!1,null,null,null);r.default=v.exports}}]);