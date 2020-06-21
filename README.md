# 封装 DOM

* 封装代码在 src/dom.js
* 方便学习和查看
* 通过如下方法使用

## 增

* dom.create(`<div>hi</div>`) 创建节点

* dom.after(node,node2) 新增弟弟

* dom.before(node,node2) 新增哥哥

* dom.append(parent,child) 新增儿子

* dom.wrap(`<div></div>`) 新增爸爸

## 删

* dom.remove(node) 删除节点

* dom.empty(parent) 删除后代

## 改

* dom.attr(node,'title',?) 读写属性

* dom.text(node,?) 读写文本内容

* dom.html(node,?) 读写 HTML 内容

* dom.style(node,{color:'red'}) 修改 style

* dom.addClass(node,'blue') 添加 class

* dom.remove(node,'blue') 删除 class

* dom.on(node,'click',fn) 添加事件监听

* dom.off(node,'click',fn) 删除事件监听

## 查

* dom.find('选择器') 获取标签

* dom.parent(node) 获取父元素

* dom.children(node) 获取子元素

* dom.siblings(node) 获取兄弟姐妹元素

* dom.next(node) 获取弟弟

* dom.previous(node) 获取哥哥

* dom.index(node) 获取自己排行老几