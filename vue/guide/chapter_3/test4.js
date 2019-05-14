new Vue({
    el: '#example',
    data: {
        age: '0',
        msg: '内容是在change事件后才改变的',
        msg1: '内容是在5000ms后才改变的'
    }
});

new Vue({
    el: '#debounce-search-demo',
    data: {
        searchQuery: '',
        searchQueryIsDirty: false,
        isCalculating: false
    },
    computed: {
        searchIndicator: function () {
            if (this.isCalculating) {
                return '⟳ Fetching new results'
            } else if (this.searchQueryIsDirty) {
                return '... Typing'
            } else {
                return '✓ Done'
            }
        }
    },
    // 监听searchQuery属性的改变，执行相应的操作
    watch: {
        searchQuery: function () {
            this.searchQueryIsDirty = true
            this.expensiveOperation()
        }
    },
    methods: {
        // This is where the debounce actually belongs.
        expensiveOperation: _.debounce(function () {
            this.isCalculating = true
            setTimeout(function () {
                this.isCalculating = false
                this.searchQueryIsDirty = false
            }.bind(this), 1000)
        }, 1500)
    }
})