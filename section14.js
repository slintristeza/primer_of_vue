var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!',
        val: "yes",
        valArray: [],
        valRadio: '',
        valSelect: '',
        valSelectArray: [],
        preview: '',
        valRange: 50,
        price: 100,
        text: 'moon side'
    },
    methods: {
        handleChange: function(event) {
            var file = event.target.files[0]
            if (file && file.type.match('image.*')) {
                this.preview = window.URL.createObjectURL(file)
            }
        }
    }
})