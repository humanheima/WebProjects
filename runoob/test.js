var vm = new Vue(
    {
        el: '#vue_det',
        data: {
            site: '菜鸟教程',
            url: "www.runoob.com",
            alexa: '10000',
        },
        methods: {
            details: function () {
                return this.site + "- 学的不仅是技术，更是梦想！"
            }
        }
    }
)

new Vue({
    el: '#app',
    data: {
        message: '<h1>菜鸟教程</>'
    }
})

new Vue({
    el: '#app1',
    data: {
        use: false
    }
})

new Vue({
    el: '#app2',
    data: {
        ok: true,
        message: 'RUNOOB',
        id: 1
    }
})

new Vue({
    el: '#app3',
    data: {
        seen: true,
        ok: true
    }
})

new Vue({
    el: '#app4',
    data: {
        url: 'http://www.runoob.com'
    }
})

new Vue({
    el: '#app5',
    data: {
        message: 'Runoob!'
    }
})

new Vue({
    el: '#app6',
    data: {
        message: 'Runoob!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

new Vue({
    el: '#app7',
    data: {
        message: 'runoob'
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})