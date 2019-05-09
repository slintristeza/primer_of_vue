var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        show: false,
        message: 'Hello Vue.js'
    },
    methods: {
        handleClick: function() {
            alert('クリックしたよ')
        },
        handlerScloll: function() {
            alert('スクロールしたよ')
        },
        handlerMouseWheel: function() {
            alert('マウスホイールしたよ')
        },
        handlerDragStart: function() {
            alert('ドラッグしたよ')
        },
        handleInput: function(event) {
            event.target.value += '!'
            this.message = event.target.value
        },
        handler: function(comment) {
            console.log(comment)
        },
        close: function() {
            console.log('close')
        }
    }
})