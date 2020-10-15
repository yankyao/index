(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{399:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_1-输入网址发生什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入网址发生什么"}},[a._v("#")]),a._v(" 1.输入网址发生什么")]),a._v(" "),s("h2",{attrs:{id:"经典面试题-输入网址发什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经典面试题-输入网址发什么"}},[a._v("#")]),a._v(" 经典面试题：输入网址发什么")]),a._v(" "),s("ol",[s("li",[a._v("浏览器的地址栏输入URL并按下回车：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("域名由三部分组成：协议名、域名、端口号;\nURL还会包含一些路径、查询;\nHTTP协议，除此之外还有加密的HTTPS协议、FTP协议、FILe协议;\nURL的中间部分为域名或者是IP，之后就是端口号了。通常端口号不常见是因为大部分的都是使用默认端口，如HTTP默认端口80，HTTPS默认端口443;\n同源策略，以及更深层次的跨域；\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("浏览器查找当前URL是否存在缓存，并比较缓存是否过期")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("强制缓存判断HTTP首部字段：cache-control，Expires;\n对比缓存通过HTTP的last-modified，Etag字段进行判断;\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("DNS解析URL对应的IP")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("域名只是与IP地址的一个映射;\n检查本地hosts文件是否有这个网址映射关系，如果有就调用这个IP地址映射，完成域名解析;\n如果没找到则会查找本地DNS解析器缓存，如果查找到则返回;\n如果还是没有找到则会查找本地DNS服务器，如果查找到则返回;\n最后迭代查询，按根域服务器 ->顶级域,.cn->第二层域，hb.cn ->子域，www.hb.cn的顺序找到IP地址;\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("根据IP建立TCP连接（三次握手）")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("通过DNS域名解析后，获取到了服务器的IP地址;\n第一次握手： 建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认;\n第二次握手： 服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态;\n第三次握手： 客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手;\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("HTTP发起请求")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("HTTP请求包含请求起始行、请求头部、请求主体三部分;\nTODO: 分开整理三部分；\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("服务器处理请求，浏览器接收HTTP响应")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("包括状态码，响应头，响应报文三个部分;\nTODO: 分开整理三部分；\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("渲染页面，构建DOM树")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("整个过程涉及两个方面：解析和渲染。在渲染页面之前，需要构建DOM树和CSSOM树;\n\n")])])]),s("ol",{attrs:{start:"8"}},[s("li",[a._v("关闭TCP连接（四次挥手）")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("通过四次挥手关闭连接(FIN ACK, ACK, FIN ACK, ACK);\n第一次挥手是浏览器发完数据后，发送FIN请求断开连接;\n第二次挥手是服务器发送ACK表示同意，如果在这一次服务器也发送FIN请求断开连接似乎也没有不妥，但考虑到服务器可能还有数据要发送，所以服务器发送FIN应该放在第三次挥手中;\n这样浏览器需要返回ACK表示同意，也就是第四次挥手;\n")])])]),s("h2",{attrs:{id:"资源加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源加载"}},[a._v("#")]),a._v(" 资源加载")]),a._v(" "),s("p",[a._v("1.html\n2.css\n3.js")]),a._v(" "),s("blockquote",[s("p",[a._v("3.1 script标签上添加async、defer属性的区别")])])])}),[],!1,null,null,null);t.default=r.exports}}]);