var vm = new Vue(
  {
    el: '#app',
    data: {
      isActive: true,
      hasError: false,
    }
  }
)
var vm1 = new Vue(
  {
    el: '#app1',
    data: {
      classObject: {
        active: true,
        'text-danger': true
      }
    }
  }
)
var vm2 = new Vue(
  {
    el: '#app2',
    data: {
      isActive: true,
      error: {
        value: true,
        type: 'fatal'
      },
    },
    computed: {
      classObject: function () {
        return {
          base: true,
          active: this.isActive && !this.error.value,
          'text-danger': this.error.value && this.error.type === 'fatal',
        }
      }
    }
  }
)

var vm3 = new Vue({
  el: '#app3',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

var vm4 = new Vue({
  el: '#app4',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

new Vue({
  el: '#app5',
  data: {
    activeColor: 'green',
    fontSize: 30
  }
})
new Vue({
  el: '#app6',
  data: {
    styleObject: {
      color: 'green',
      fontSize: '30px'
    }
  }
})
new Vue({
  el: '#app7',
  data: {
    baseStyles: {
      color: 'red',
      fontSize: '30px'
    },
    overridingStyles: {
      'font-weight': 'bold'
    }
  }
})