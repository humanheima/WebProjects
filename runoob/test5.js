var vm = new Vue({
  el: '#app',
  data: {
    counter: 1
  }
});
vm.$watch('counter', function (newVal, oldValue) {
  alert('计数器值的变化 :' + oldValue + ' 变为 ' + newVal + '!');
})

var vm1 = new Vue({
  el: '#computed_props',
  data: {
    kilometers: 0,
    meters: 0,
  },
  methods: {

  },
  computed: {

  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = this.kilometers * 1000;
    },
    meters: function (val) {
      this.meters = val;
      this.kilometers = val / 1000;
    }
  }
});
// $watch 是一个实例方法
vm1.$watch('kilometers', function (newValue, oldValue) {
  // 这个回调将在 vm.kilometers 改变后调用
  document.getElementById('info').innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
})

var vm2 = new Vue({
  el: '#app1',
  data: {
    Ip_Json: [
      {
        id: 1,
        name: 'iphone 8',
        price: '6000',
        count: 1

      },
      {
        id: 2,
        name: 'iphone xs',
        price: 8699,
        count: 1
      },
      {
        id: 3,
        name: 'iphone xr',
        price: 6499,
        count: 1
      }
    ]
  },
  methods: {
    totalPrice: function () {
      var totalP = 0;
      for (var i = 0, len = this.Ip_Json.length; i < len; i++) {
        totalP += this.Ip_Json[i].price * this.Ip_Json[i].count;
      }
      return totalP;
    }
  }
})
