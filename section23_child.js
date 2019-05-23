Vue.component('comp-child-list', {
    template: '<li>{{ name }} HP.{{ hp }}</li>',
    props: ['name', 'hp']
})