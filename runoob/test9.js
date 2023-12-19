Vue.component('runoob', {
  template: '<h1>自定义组件！</h1>'
})
new Vue({
  el: '#app',
})


var Child = {
  template: '<h1>自定义组件！</h1>'
}

// 创建根实例

new Vue({
  el: '#app1',
  components: {
    // <runoob> 将只在父模板可用
    //注册局部组件，组件名叫做'runoob1'
    'runoob1': Child
  }
})


Vue.component('site-name', {
  props: ['title'],
  template: '<h4>title :{{ title }}</h4>',
})

new Vue({
  el: '#app2',
})

Vue.component('child1', {
  props: ['message'],
  template: '<span>{{ message }}</span>'
})

new Vue({
  el: '#app3',
  data: {
    parentMsg: '父组件内容'
  }
})

// Vue.component('todo-item',{
//   props:['todo'],
//   template:'<li>{{todo.text}}</li>'
// })

// new Vue({
//   el:'#app4',
//   data:{
//     sites:[
//       { text: 'Runoob' },
//       { text: 'Google' },
//       { text: 'Taobao' }
//     ]
//   }
// })
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
new Vue({
  el: '#app4',
  data: {
    sites: [
      { text: 'Runoob' },
      { text: 'Google' },
      { text: 'Taobao' }
    ],
  }
})

Vue.component('example', {
  props: {
    // 基础类型检测 （`null` 意思是任何类型都可以）
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组／对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})

Vue.component('button-counter', {
  template: '<button v-on:click="incrementHandler">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementHandler: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

var buttonCounter2Data = {
  count: 0
}

Vue.component('button-counter2', {

  data: function () {
    // data 选项是一个函数，组件不相互影响
    return {
      count: 0
    }
  },
  // data: function () {
  //     // data 选项是一个对象，会影响到其他实例
  //     return buttonCounter2Data
  // },
  template: '<button v-on:click="count++">点击了 {{ count }} 次。</button>'
})
new Vue({ el: '#components-demo3' })