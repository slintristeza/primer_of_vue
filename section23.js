Vue.component('comp-child', {
    template: '<p>{{ val }}</p>',
    props: ['val']
})
Vue.component('comp-child-over-ride', {
    template: '<p id="child" class="child">ChildComponent OverRide</p>',
})
Vue.component('my-component', {
    template: '<p><comp-child></comp-child></p>'
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'hoge',
        list: [
            { id: 1, name: 'スライム', hp:100 },
            { id: 2, name: 'ゴブリン', hp:200 },
            { id: 3, name: 'ドラゴン', hp:500}
        ]
    },  
    methods: {
        
    }
})