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
        ],
        monsterInputName: ""
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        },
        increment: function() {
            this.count ++
        },
        // 追加ボタンクリック時のハンドラ
        doAdd: function() {
            // リスト内で1番大きいIDを取得
            var max =this.monsterList.reduce(function(a, b) {
                return a > b.id ? a : b.id
            }, 0)
            // 新しいモンスターをリストに追加
            this.monsterList.push({
                id: max + 1,
                name: this.monsterInputName,
                hp: 500
            })
        },
        doRemove: function(index) {
            this.monsterList.splice(index, 1)
        },
        changeSlime: function(){
            this.$set(this.monsterList, 0, { id: 1, name: 'キングスライム', hp: 500 })
        }
    },
    mounted: function() {
        this.scroll = 100
    }
})
state.count++