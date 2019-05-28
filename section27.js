var app = new Vue({
    el: '#app',
    data: {
        componentTypes: ['my-component-a', 'my-component-b'],
        current: 0,
        boardCurrent: 'comp-board'
    },  
    computed: {
        component: function() {
            return this.componentTypes[this.current]
        }
    }
})