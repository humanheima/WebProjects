var data = { a: 1 }

var vm = new Vue({
    data: data
})

vm.$watch('a',function(newValue,oldValue){
    console.log('vm a changed to:'+newValue)
})

console.log(vm.a=data.a)

vm.a=2

console.log(data.a)

data.a=3

console.log(vm.a)


var obj = {
    foo: 'bar'
}
// 使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
Object.freeze(obj)

var app1 = new Vue({
    el: '#app-1',
    data: obj
})

var app2=new Vue({
    el:'#app2',
    data:{
        a:1
    },
    created:function(){
        console.log('a is:'+this.a)
    }
})
