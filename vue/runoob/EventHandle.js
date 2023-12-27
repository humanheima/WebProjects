var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

// 也可以用 JavaScript 直接调用方法
//example2.greet() // => 'Hello Vue.js!'

new Vue({
    el: '#example-3',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})

new Vue({
    el: '#example-5',
    methods: {
        one(event) {
            alert("第一个事件处理器逻辑...")
        },
        two(event) {
            alert("第二个事件处理器逻辑...")
        }
    }
})


new Vue({
    el: '#example-4',
    methods: {
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        }
    }
})