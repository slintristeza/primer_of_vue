var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        show: false
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
        }
    }
})