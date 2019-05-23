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
        ],
        parentsData: ''
    },  
    methods: {
        handleAttack: function(id) {
            var item = this.list.find(function(el) {
                return el.id ===id
            })
            if (item !== undefined && item.hp > 0) item.hp -= 10
        },
        parentsMethod: function(childArg, parentArg) {

        }
    }
})