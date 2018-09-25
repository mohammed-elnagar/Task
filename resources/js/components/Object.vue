<template>
    <div>
        <div><h1>Object and nested loop & Vue.set</h1></div>
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
                list:[1, 2, 3, 5],

                user:{name: "Mohammed", age:26},
                user2:{name: "Mohammed", age:26},

                users: [
                    {name: "Mohammed", age:26},
                    {name: "Ahmed", age:26},
                    {name: "Ramy", age:26}
                ],
            }
        },
        methods:{
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
