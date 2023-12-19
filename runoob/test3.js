new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
new Vue({
  el: '#app1',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})

new Vue({
  el: '#app2',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})

new Vue({
  el: '#app3',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})
new Vue({
  el: '#app4'
})

new Vue({
  el: '#app5',
  data: {
    message: 'Runoob!',
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})
