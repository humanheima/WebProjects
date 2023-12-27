// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  inserted: function (el) {
    //获取焦点
    el.focus();
  }
})

new Vue({
  el: '#app'
})

new Vue({
  el: '#app1',
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  }
})

Vue.directive('runoob', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: ' + s(binding.name) + '<br>' +
      'value: ' + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: ' + s(binding.arg) + '<br>' +
      'modifiers: ' + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  },

  inserted: function(el){
    console.log('runoob 元素 inserted')
  }

})

new Vue({
  el:'#app2',
  data:{
    message:'菜鸟教程'
  }
})

Vue.directive('runoob1',function(el,binding){
  // 简写方式设置文本及背景颜色
  el.innerHTML = binding.value.text
  el.style.backgroundColor=binding.value.color
})

new Vue({
  el:'#app3'
})