var app = new Vue({
    el: '#app',
    data: {
        value: '',
        video1: false,
        video2: false
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        },
        video(el, binding) {
            if (binding.value != binding.oldValue) {
                binding.value ? el.play() : el.pause()
            }
        }
    },
    methods: {

    }
})
// グローバルへの登録
Vue.directive('focus', {
    inserted: function(el) {
        el.focus()
    }
})

// フックをすべて使用する例
Vue.directive('example', {
    bind: function(el, binding) {
        console.log('v-examle bind')
    },
    inserted: function(el, binding) {
        console.log('v-examle inserted')
    },
    update: function(el, binding) {
        console.log('v-examle update')
    },
    componentUpdated: function(el, binding) {
        console.log('v-examle componentUpdated')
    },
    unbind: function(el, binding) {
        console.log('v-examle unbind')
    }
})

// 関数を利用した省略記法
Vue.directive('example'), function(el, binding, vnode, oldVnode) {

}