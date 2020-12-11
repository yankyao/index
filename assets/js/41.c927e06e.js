(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{470:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1-一些概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-一些概念"}},[t._v("#")]),t._v(" 1.一些概念")]),t._v(" "),a("h2",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),a("p",[t._v("MVVM 是Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对View 和 ViewModel 的双向数据绑定，这使得ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。")]),t._v(" "),a("p",[t._v("MVVM 由 Model,View,ViewModel 三部分构成，Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。")]),t._v(" "),a("p",[t._v("在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。")]),t._v(" "),a("p",[t._v("ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。")]),t._v(" "),a("p",[a("strong",[t._v("在前端框架中，React和Vue是典型的MVVM架构。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个Vue实例就是一个VM")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),a("p",[t._v("在前端框架中，组件分为：视图组件、业务组件、通用组件、全局性组件。")]),t._v(" "),a("ul",[a("li",[t._v("视图组件：路由链接的主入口。")]),t._v(" "),a("li",[t._v("业务组件：页面中主要的内容。")]),t._v(" "),a("li",[t._v("通用组件：不同页面相同的UI或数据结构，遵循数据驱动视图，JSON数据模型映射UI组件，UI和数据模型遵循相同的信息结构；\n职责单一原则，展示型状态自管理；\n确定UI相关的state(状态)的最小但完整表示，确定组件的颗粒度；")]),t._v(" "),a("li",[t._v("全局性组件：模态组件，弹窗、信息提示框、Loading组件、日期弹窗等，要注意封装的共性和个性，从样式、事件、事件回调三方面考虑；")])]),t._v(" "),a("h2",{attrs:{id:"模块化开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发"}},[t._v("#")]),t._v(" 模块化开发")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("广义模块化开发：就是不要在一个js文件中写所有业务，应该拆分。比如我们没有学模块化思想之前，俄罗斯方块就已经模块化开发了。比如Block是一个类，这个类有update方法、checkDown方法、goDown方法，这个类可以和Map类并行开发，就是两个工程师可以一起开发，增加开发效率，每人负责一块业务，就是模块化开发了。")])]),t._v(" "),a("li",[a("p",[t._v("狭义模块化开发：现在说到的模块化开发指的是要有标准的import（或者require）和export的js文件，这个js文件是独立作用域的。根据模块同步加载还是异步加载，有CMD和AMD两种规范:")])])]),t._v(" "),a("ol",[a("li",[t._v("cmd规范：NodeJS式的开发模式，有require、module.exports、exports.**等写法；实现方式commonjs、webpack打包、sea.js；")]),t._v(" "),a("li",[t._v("amd规范：RequireJS、AngularJS等；")])]),t._v(" "),a("h2",{attrs:{id:"前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[t._v("#")]),t._v(" 前端路由")]),t._v(" "),a("p",[t._v("前端web页面设置路由的本质是便于分享网址。无论是react还是vue，必要的知识点：")]),t._v(" "),a("ul",[a("li",[t._v("安装路由")]),t._v(" "),a("li",[t._v("获取路由实例params、query")]),t._v(" "),a("li",[t._v("编程式导航")]),t._v(" "),a("li",[t._v("路由嵌套、路由重定向")]),t._v(" "),a("li",[t._v("路由的模式")])]),t._v(" "),a("h2",{attrs:{id:"diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" Diff算法")]),t._v(" "),a("p",[t._v("所有的节点按层级比较，只会遍历一次。")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度O(n);")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("     prev                      last   \n\n       "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("   \\                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("   \\\n   "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")])]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("                                  \\\n "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("                                     "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 按叶子节点位置比较 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" lA     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相同，不理会")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" lB     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不同，删除pD，添加lB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" lD     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不同，删除pB，添加lD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Null   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// last树没有该节点，直接删除pC")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" lC   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prev树没有该节点，添加lC到该位置")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);