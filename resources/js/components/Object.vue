<template>
    <div>
        <div><h1>Object and nested loop & Vue.set</h1></div>
        <hr>
        <input v-model="rate"><br>
        <span class="glyphicon glyphicon-star" v-for="item in parseInt(rate)" :key="item">1</span><span class="fa fa-star-o" :key="item" v-for="item in 5-rate">0</span>
        <hr>
        <!-- <input @keyup.enter=" evenNumbers()" > -->
        <h4> Filter data </h4>
        <ul>
            <li v-for="(number, index) in evenNumbers(numbers)" :key="index"> {{ number }}</li>
        </ul>
        <hr>
        <input v-model="search">
        <ul>
            <li v-for="(user, index) in searchList()" :key="index"> {{ user.name }}, {{ user.age }}</li>
        </ul>
        <hr>
        <h4> Use key with for</h4>
        <div v-for="user in users" :key="user.name" class="user">
            <input v-model="user.name">
        </div>
        <button @click="reverse">Reverse</button>
        <button @click="addClassToFirstInput">Add Class To First Input</button>
        <hr>
        <div v-for="(item, index) in list" :key="index"> {{ item }}</div>
        <button @click="addValue"> Add </button>
        <button @click="changeList"> Change list </button>
        <button @click="change2nd"> Change 2nd  </button>
        <hr>
        <div>
            <div v-for="(item, key, index) in user"  :key='index'>
                <span> {{ index+1 }} {{ key }} {{ item }}  </span>
            </div>
            <button @click="addNewValue">addNewValue</button>
        </div>
        <hr>
        <div>
            <div v-for="(item, key, index) in user2"  :key='index'>
                <span> {{ index+1 }} {{ key }} {{ item }}  </span>
            </div>
        </div>
        <hr>
        <div>
            <div v-for="(user, index) in users"  :key='index'>
                #{{ index+1 }}
                <span v-for="(item, key, index) in user" :key='index'>
                    {{ key }} {{ item }}
                </span>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                rate:3,
                search : '',
                numbers : [1, 2, 3, 4, 5, 6, 7, 8, 9],

                list:[1, 2, 3, 5],

                user:{name: "Mohammed", age:26},
                user2:{name: "Mohammed", age:26},

                users: [
                    {name: "Mohammed", age:5},
                    {name: "Ahmed", age:10},
                    {name: "Ramy", age:15}
                ],
                x:'',

            }
        },
        computed:{
            evenNum(){
                return this.numbers.filter(function(number){
                    return app.x = number%2 == 0;
                });
            },
        },
        methods:{
            searchList(){
                var app = this;
                return this.users.filter(function(user){
                    return user.name.indexOf(app.search) !== -1;
                });
            },
            userUnderAge(){
                var app = this;
                return this.users.filter(function(user){
                    return user.age > 10;
                })
            },
            pushNum(){
                this.numbers.push(this.newVal);
            },
            evenNumbers(numbers){
                return numbers.filter(function(number){
                    return  number%2 == 0;
                });
            },
            addClassToFirstInput(){
                document.querySelector('.user').classList.add('error')
            },
            reverse(){
                this.users.reverse();
            },
            addValue(){
                this.list.push(10);
            },
            changeList(){
                this.list = [10, 20, 30, 50];

            },
            change2nd(){
                Vue.set(this.list, 2, 200);
            },
            addNewValue(){
                Vue.set(this.user, 'new', "new value");
            }
        }
    }

</script>

<style>
    .error{
        border: 1px solid red;
    }
</style>
