Vue.component('my-component-a', {
    template: '<div class="my-component-a">component A</div>'
})
Vue.component('my-component-b', {
    template: '<div class="my-component-b">component B</div>'
})
Vue.component('comp-board', {
    template: '<div>Message Board</div>'
})
Vue.component('comp-form', {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data: function() {
        return { message: '' }
    }
})