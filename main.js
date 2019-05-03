var state = { count:0 }
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue.js!",
        scroll: 0,
        list: ['apple', "banana", 'orange'],
        num: 1,
        show: true,
        show2: true,
        state: state,
        count: 0,
        radius: 50,
        ok: false,
        type: 1,
        loaded: true,
        monsterList: [
            { id: 1, name: 'スライム', hp:100 },
            { id: 2, name: 'ゴブリン', hp:200 },
            { id: 3, name: 'ドラゴン', hp:500}
        ]
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        },
        increment: function() {
            this.count ++
        }
    },
    mounted: function() {
        this.scroll = 100
    }
})
state.count++