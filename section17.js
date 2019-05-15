var app = new Vue({
    el: '#app',
    data: {
        watchVal: '',
        list: [],
        edited: false,
        highCostVal: '',
        watchTarget: ''
    },
    watch: {
        watchVal: function(newVal, oldVal) {
            // 値変更時に行う処理
        },
        'item.val': function(newVal, oldVal) {
            // オブジェクトのプロパティの監視
        },
        list: {
            handler: function(newVal, oldVal) {
                // list変更時に行う処理
                // this.list[0].name = 'changeVal' のような変更でも呼び出される
            },
            depp: true, // ネストされたオブジェクトの監視
            immedilate: true // 書記読み込み時の呼び出し
        },
        highCostVal: _.debounce(function(newVal) {
            // コストの高い処理を記述
        },
        // waiting time mm/sec
        500),
        watchTarget: function() {
            // 
        }
    },
    created: function() {
        // メソッド内でのウォッチャ登録例
        this.$watch('value', function(newVal, oldVal) {
        }, {
            immedilate: true
        })
        // ウォッチャの解除
        var unwatch = this.$watch('value', handler)
        unwatch()

        // １度だけ動作するウォッチャ
        var unwatch = this.$watch('list', function() {
            this.edited = true
            unwatch()
        }, {deep: true })
    },
    computed: {
        // 複数の値の監視
        watchTarget: function() {
            return [this.width, this.height]
        }
    },
    methods: {

    }
})