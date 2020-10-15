(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{419:function(s,t,a){"use strict";a.r(t);var e=a(25),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1-前端工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端工程化"}},[s._v("#")]),s._v(" 1.前端工程化")]),s._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("ul",[a("li",[s._v("在前端开发的初始阶段，开发者通常只用关心html，css，javascript。")])]),s._v(" "),a("ol",[a("li",[s._v("早期的前端只需要适配桌面浏览器，而现在的前端，需要适配不同类型和尺寸的设备，包括移动端网页，app应用等；")]),s._v(" "),a("li",[s._v("早期的前端只是后端 MVC 框架的一层模块， 而现在的前端普遍是从后端接口获取数据，编写处理逻辑，各种前端mvc前端框架也层出不穷；")])]),s._v(" "),a("ul",[a("li",[s._v("现在的前端开发不再是从零写起、重复造轮子")])]),s._v(" "),a("ol",[a("li",[s._v("是会引用大量内部和外部的组件和模块，这也导致前端必须进行模块管理；")]),s._v(" "),a("li",[s._v("为了提高效率，前端工程往往不会直接写html,css,和js代码，而是改用其他格式书写，再用转码器工具编译为目标格式；")])]),s._v(" "),a("p",[s._v("广义的前端工程化，是软件工程的一个子类，指的是将软件工程的方法和原理运用在前端开发中, 目的是实现 高效开发，有效协同，质量可控。")]),s._v(" "),a("p",[s._v("狭义的前端工程化，是指将 开发阶段 的代码转变成 生产环境 的代码的 一系列步骤。主要包括 构建 , 分支管理 , 自动化测试, 部署 等。平时提到的前端，一般指的就是狭义上的前端工程。前端工程化的具体内容：")]),s._v(" "),a("ol",[a("li",[s._v("代码规范: 保证团队所有成员以同样的规范开发代码。")]),s._v(" "),a("li",[s._v("分支管理: 不同的开发人员开发不同的功能或组件，按照统一的流程合并到主干。")]),s._v(" "),a("li",[s._v("模块管理: 一方面，团队引用的模块应该是规范的;另一方面，必须保证这些模块可以正确的加入到最终编译好的包文件中。")]),s._v(" "),a("li",[s._v("自动化测试：为了保证和并进主干的代码达到质量标准，必须有测试，而且测试应该是自动化的，可以回归的。")]),s._v(" "),a("li",[s._v("构建：主干更新以后，自动将代码编译为最终的目标格式，并且准备好各种静态资源，")]),s._v(" "),a("li",[s._v("部署。 将构建好的代码部署到生产环境。")])]),s._v(" "),a("p",[s._v('工程化的事情，逐步形成了很多"最佳实践"。有很多免费的工具可以使用。这些工具大都是依赖NodeJS。他们的实现原理，都是Node.js的程序，利用Node.js中的fs模块对less文件进行识别，进行正则表达式的处理，变为css。')]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("前端包管理工具：bower npm yarn\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包管理工具：依赖越来越复杂（实际上没有那么复杂），所以此时就利用bower和npm可以有效管理依赖。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json文件和bower.json文件很好用，可以看见项目的后台依赖、前端依赖。")]),s._v("\n前端工作流工具：gulp grunt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前端工作流工具：比如gulp、grunt，这两个工具可以用gulp.config.js文件或者grunt.config.js文件列出清单，让这两个工具做什么，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 比如混淆一个js文件，合并多个js文件，都是用数组表示工程步骤，一个接一个执行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译less也能自动watch观测less的改变，自动生成css文件。")]),s._v("\n代码预处理编译工具：Babel less sass stylus\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 预处理编译工具：比如less的编译用lessc，sass的编译用sass，jsx的编译用babel。他们都可以提交给gulp、grunt来自动完成编译。")]),s._v("\n前端模块编打包工具：webpack fis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack是一个本质上是一个CMD模块编译工具，就是把多个具有import、require、export写出来的模块可以编译为普通浏览器能够识别的普通JavaScript程序。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 里面集成loader的东西，让webpack可以一统babel、lessc、sass、jpg压缩等等。webpack越来越强大，甚至拥有了工作流的功能，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 比如合并js、压缩个js等等。")]),s._v("\n代码风格管理工具：ESlint stylint\n前端代码测试工具：karma mock\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 大公司、大项目在用。")]),s._v("\n")])])]),a("p",[a("strong",[s._v("目前webpack处于一统江湖的地步。")])]),s._v(" "),a("h2",{attrs:{id:"版本管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[s._v("#")]),s._v(" 版本管理")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("git")])]),s._v(" "),a("li",[a("p",[s._v("svn")])])]),s._v(" "),a("h2",{attrs:{id:"ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd"}},[s._v("#")]),s._v(" CI/CD")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("jenkins")])]),s._v(" "),a("li",[a("p",[s._v("git web hook")])])]),s._v(" "),a("h2",{attrs:{id:"架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[s._v("#")]),s._v(" 架构设计")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("交互设计")])]),s._v(" "),a("li",[a("p",[s._v("可扩展性")])]),s._v(" "),a("li",[a("p",[s._v("安全性")])]),s._v(" "),a("li",[a("p",[s._v("性能")])])]),s._v(" "),a("h2",{attrs:{id:"模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[s._v("#")]),s._v(" 模块化")]),s._v(" "),a("ul",[a("li",[s._v("CSS Module")]),s._v(" "),a("li",[s._v("ES6 Module")]),s._v(" "),a("li",[s._v("CommonJS")]),s._v(" "),a("li",[s._v("SeaJS/CMD")]),s._v(" "),a("li",[s._v("RequireJS/AMD")])])])}),[],!1,null,null,null);t.default=v.exports}}]);