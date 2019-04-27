new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  }
})
var vm = new Vue({
  el: '#app1',
  data: {
    message: 'Hello world!'
  },
  computed: {
    // 计算属性的 getter
    reverseMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessage2: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var vm2 = new Vue({
  el: '#app2',
  data: {
    name: 'Google',
    url: 'http://www.google.com'
  },
  computed: {
    site:{
      get: function () {
        return this.name + " " + this.url
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
})

// 调用 setter， vm.name 和 vm.url 也会被对应更新
vm2.site = '菜鸟教程 http://www.runoob.com';
document.write('name: ' + vm2.name);
document.write('<br>');
document.write('url: ' + vm2.url);

