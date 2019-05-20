Vue.component('my-component', {
    template: '<p>MyComponent</p>'
})
var localMyComponent = {
    template: '<p>LocalMyComponent</p>'
}
var app = new Vue({
    el: '#app',
    components: {
        'local-my-component': localMyComponent
    },
    template: '<p>{{ message }}</p>',
    data: function() {
        return {
            message: 'Hello Vue.js'
        }
    },  
    methods: {
        
    }
})
