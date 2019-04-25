
var example1 = new Vue({

    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
}
)
var example2 = new Vue({

    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
}
)

var example3 = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})
var example4 = new Vue({
    el: '#v-for-object1',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})
var example5 = new Vue({
    el: '#v-for-object2',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})
var example6 = new Vue({
    el: '#example-6',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    // 计算属性
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    //方法
    methods: {
        old: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 != 0
            })
        }
    }
})

var example7 = new Vue({
    el: '#example-7',
    data: {
        items: [{ text: '蔬菜' },
        { text: '奶酪' },
        { text: '随便其它什么人吃的东西' }]
    }
})
var example8 = new Vue({
    el: '#example-8',
    data: {
        todos: [{ text: '蔬菜' ,isComplete:false},
        { text: '奶酪',isComplete:false },
        { text: '随便其它什么人吃的东西',isComplete:true }]
    }
})
var example9 = new Vue({
    el: '#example-9',
    data: {
        todos: [{ text: '蔬菜' ,isComplete:false},
        { text: '奶酪',isComplete:false },
        { text: '随便其它什么人吃的东西',isComplete:true }]
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app = new Vue({
    el: '#example-10',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});

Vue.component('item-todo', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })

  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
  