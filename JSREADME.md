# JavaSCript
*JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译。*
JavaScript web 开发人员必须学习的 3 门语言中的一门：

1. HTML 定义了网页的内容
2. CSS 描述了网页的布局
3. JavaScript 网页的行为


### 重新声明 JavaScript 变量
如果重新声明 JavaScript 变量，该变量的值不会丢失,在以下两条语句执行后，变量 carname 的值依然是 "Volvo"。
```
var carname="Volvo"; 
var carname;
```

**规则:如果把数字与字符串相加，结果将成为字符串！**

**闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。**

### 事件冒泡或事件捕获？
事件传递有两种方式：冒泡与捕获。
事件传递定义了元素事件触发的顺序。 如果你将 `<p>` 元素插入到 `<div>` 元素中，用户点击 `<p>` 元素, 哪个元素的 "click" 事件先被触发呢？

在 *冒泡* 中，内部元素的事件会先被触发，然后再触发外部元素，即： `<p>` 元素的点击事件先触发，然后会触发 `<div>` 元素的点击事件。

在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： `<div>` 元素的点击事件先触发 ，然后再触发 `<p>`元素的点击事件。

addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：
```
addEventListener(event, function, useCapture);
```
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。


### JavaScript 对象

JavaScript 是面向对象的语言，但 JavaScript 不使用类。

### JavaScript 计时事件
在 JavaScritp 中使用计时事件是很容易的，两个关键方法是:
* setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
* setTimeout() - 在指定的毫秒数后执行指定代码。
  
**注意: setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。**

### JavaScript Cookie

#### 什么是 Cookie？
Cookie 是一些数据, 存储于你电脑上的文本文件中。当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。Cookie 的作用就是用于解决 "如何记录客户端的用户信息"。

* 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
* 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
