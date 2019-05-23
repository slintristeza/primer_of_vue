Vue.component('comp-child', {
    template: '<p>{{ val }}</p>',
    props: ['val']
})
Vue.component('comp-child-over-ride', {
    template: '<p id="child" class="child">ChildComponent OverRide</p>',
})
Vue.component('comp-child-list-selfish-attack', {
    template: '<li>{{ name }} HP.{{ hp }} <button v-on:click="doSelfisfAttack">攻撃する</button></li>',
    props: ['name', 'hp'],
    methods: {
        // 勝手に攻撃！
        doSelfisfAttack: function() {
            this.hp -= 10
        }
    }
})
Vue.component('comp-child-list', {
    template: '<li>{{ name }} HP.{{ hp }} <button v-on:click="doAttack">攻撃する</button></li>',
    props: { id: Number, name: String, hp: Number },
    methods: {
        doAttack: function() {
            this.$emit('attack', this.id)
        }
    }
})