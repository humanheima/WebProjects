var vm = new Vue({

  el: '#app',
  data: {
    counter: 1
  }
});

vm.$watch('counter', function (newVal, oldVal) {
  alert('计数器值的变化 :' + oldVal + ' 变为 ' + newVal + '!');
});
setTimeout(
  function () {
    vm.counter += 20;
  }, 1000
)

var my_product={
  "id":1, name:"book", "price":"20.00"
};

var vm1=new Vue({
  el:'#app1',
  data:{
    counter:1,
    products:my_product
  }
})

//vm1.products.qty="1";
Vue.set(my_product,'qty',1);
Vue.delete(my_product, 'price');
console.log(vm1)
vm1.$watch('counter', function(nval, oval) {
  alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});