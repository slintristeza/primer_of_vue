var app = new Vue({
    el: '#app',
    data: {
        price: 19800,
        message: 'メッセージ',
        foo: 'a'
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString()
        },
        filter: function(message, foo, num) {
            console.log(message, foo, num)
        },
        round: function(val) {
            return Math.round(val * 100) / 100
        },
        radian: function(val) {
            return val * Math.PI / 100
        }
    },
    methods: {

    }
})
// グローバルへの登録
Vue.filter('localeNum', function(val) {
    return val.toLocaleString(val)
}) 