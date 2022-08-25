## 项目简介

使用 react ,react-router,react-redux,@redux.js/tookit 搭建个人博客

### 项目规范

1. 在页面顶层 import 引用时 `核心模块引用 ==> 其他模块引用`

   - 核心模块引用顺序为 `react ==> react-redux ==> react-router-dom ==>其他`
   - 其他模块引用顺序为 `距离当前页面近的 ==> 距离当前页面远的`

2. Css 编写顺序

   - Css 命名应符合`主文件的命名方式`
   - 引入文件和声明文件应在文件最上方
   - 对当前元素的样式操作
   - 对当前元素的位置操作
   - 对子元素的位置操作

3. 文件命名规范

   - 文件命名应遵循`语义化命名`
   - 对于组件命名应以`大驼峰方式命名`
   - 对普通页面组件命名应`小驼峰方式命名`

### 项目仍未完成,仅在开发阶段........
