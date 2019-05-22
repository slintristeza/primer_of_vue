Vue.component('comp-child', {
    template: '<p>{{ val }}</p>',
    props: ['val']
})
Vue.component('my-component', {
    template: '<p><comp-child></comp-child></p>'
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'hoge'
    },  
    methods: {
        
    }
})