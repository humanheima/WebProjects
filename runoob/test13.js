var vm = new Vue({
  el: '#databinding',
  data: {

  },
  methods: {

  }
})
// 定义一个混入对象
var myMinxin = {
  created: function () {
    this.startmixin();
  },
  methods: {
    startmixin: function () {
      //return "欢迎来到混入实例" + "<br>";
      document.write("欢迎来到混入实例" + "<br>");
    }
  }
}

var Component = Vue.extend({
  mixins: [myMinxin]
})

var component = new Component()

var mixin = {
  created: function () {
    document.write('混入调用' + '<br>')
  }
}

new Vue({
  ef: "#databinding1",
  mixins: [mixin],
  created: function () {
    document.write('组件调用' + '<br>')
  }
})

var mixin = {
  methods: {
    hellworld: function () {
      document.write('HelloWorld 方法' + '<br>');
    },
    samemethod: function () {
      document.write('Mixin：相同方法名' + '<br>');
    }
  }
};
var vm = new Vue({
  el: '#databinding2',
  mixins: [mixin],
  methods: {
    start: function () {
      document.write('start 方法' + '<br>');
    },
    samemethod: function () {
      document.write('Main：相同方法名' + '<br>');
    }
  }
});
vm.hellworld();
vm.start();
vm.samemethod();

Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if(myOption){
      console.log(myOption)
    }
  }
})
new Vue({
  el:'#databinding3',
  myOption:'hello',
})