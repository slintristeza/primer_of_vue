var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    data: {
        scrollY: 0,
        timer: null
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    breforeDestroy: function () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll: function () {
            if (this.timer === null) {
                this.timer = setTimeout(function() {
                    this.scrollY = window.scrollY
                    this.timer = null
                }.bind(this), 200)
            }
        },
        scrollTop: function() {
            scroll.animateScroll(0)
        }
    }
})