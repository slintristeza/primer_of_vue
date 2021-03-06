var state = { count:0 }
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue.js!",
        scroll: 0,
        list: ['apple', "banana", 'orange'],
        num: 1,
        show: true,
        show2: true,
        state: state,
        count: 0,
        radius: 50,
        ok: false,
        type: 1,
        loaded: true,
        monsterList: [
            { id: 1, name: 'スライム', hp:100 },
            { id: 2, name: 'ゴブリン', hp:200 },
            { id: 3, name: 'ドラゴン', hp:500}
        ],
        monsterInputName: "",
        show2_11: true,
        url: "https://jp.vuejs.org/",
        toggle: true
    },
    created() {
        // リストの全要素にactiveプロパティを追加
        this.monsterList.forEach(item => {
            // item.active = false　ではリアクティブにならない
            this.$set(item, 'active', false)
        }, this)
    },
    methods: {
        handleClick(event) {
            alert(event.target)
        },
        increment() {
            this.count ++
        },
        increment2_11() {
            var count = this.$refs.count
            if (count) {
                count.innerText = parseInt(count.innerText,10) + 1
            }
        },
        // 追加ボタンクリック時のハンドラ
        doAdd() {
            // リスト内で1番大きいIDを取得
            var max =this.monsterList.reduce(a, b => {
                return a > b.id ? a : b.id
            }, 0)
            // 新しいモンスターをリストに追加
            this.monsterList.push({
                id: max + 1,
                name: this.monsterInputName,
                hp: 500
            })
        },
        doRemove(index) {
            this.monsterList.splice(index, 1)
        },
        
        changeSlime(){
            this.$set(this.monsterList, 0, { id: 1, name: 'キングスライム', hp: 500 })
        },
        doAttack(index) {
            this.monsterList[index].hp -= 10
        }
    },
    mounted() {
        this.scroll = 100
        console.log(this.$el)
        console.log(this.$refs.message)
    }
})
state.count++

// const array
const array = [1, 2]
array.push(3)
console.log(array)
array.length = 0
console.log(array)

// 分割代入
const [a, b] = [1, 2]
console.log(a)
const { name } = { id: 1, name: 'りんご'}
console.log(name)

// スプレッド演算子
const spreadArray = [1, 2, 3]
console.log(spreadArray)
const newArray = [...spreadArray, 4]
console.log(newArray)

// 配列メソッド
const methodArray = [
    { id: 1, name: 'hoge' },
    { id: 2, name: 'fuga' }
]
const result = methodArray.find(el => el.id === 2)
console.log(result)
const resultIndex = methodArray.findIndex(el => el.id === 2)
console.log(resultIndex)

function myFunction(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 10){
                resolve('success')
            } else {
                reject('error!')
            }    
        }, 1000)
    })
}

myFunction(100).then(value => {
    console.log(value)
}).catch(value => {
    console.log(value)
}).finally()

myFunction(9).then(value => {
    console.log(value)
}).catch(value => {
    console.log(value)
}).finally({
    
})