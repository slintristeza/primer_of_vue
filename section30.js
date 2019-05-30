var app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'ばなな', price: 200 },
            { id: 3, name: 'いちご', price: 300 }
        ],
        listNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    methods: {
        doShuffle: function() {
            this.listNumber = _.shuffle(this.listNumber)
        },
        doAdd: function() {
            const newNumber = Math.max.apply(null, this.listNumber) + 1
            const index = Math.floor(Math.random() * (this.list.length + 1))
            this.listNumber.splice(index, 0, newNumber)
        },
        doRemove: function(index) {
            this.listNumber.splice(index, 1)
        },
        beforeLeave: function (el) {
            var style = window.getComputedStyle(el)
            el.style.left = el.offsetLeft - parseFloat(style.marginLeft, 10) + 'px'
            el.style.top = el.offsetTop - parseFloat(style.marginTop, 10) + 'px'
        }
    },
    computed: {
        sortedList: function() {
            return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
        }
    }  
})