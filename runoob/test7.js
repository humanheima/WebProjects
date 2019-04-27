var vm = new Vue(
  {
    el: '#app',
    data: {
      counter: 0
    }
  }
)
var vm1 = new Vue(
  {
    el: '#app1',
    data: {
      name: 'Vue.js'
    },
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  }
)

var vm2 = new Vue({
  el: '#app2',
  data: {

  },
  methods: {
    say: function (message) {
      alert(message)
    }
  }

})
