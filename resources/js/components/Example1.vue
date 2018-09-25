<template>
    <div>
        <div><h1>Test</h1></div>
        <!-- <div>
            <div v-for="(item, key) in list" :key='key'>
                {{ item }}
            </div>
            <form @submit.prevent="addItem">
                <input v-model="newVal">
            </form>
        </div> -->
        <div v-if="false">
            <div v-for="(item, key) in list2" :key='key'> {{ item.name }} </div>
        </div>
        <hr>
        <div>
            <div v-for="(item, key) in list2"  :key='key' v-if="item.age > 20">
                <span>Name : {{ item.name }} </span>
                <span>Age :  {{ item.age }} </span>
            </div>
        </div>
        <hr>
        <div>
            <div v-for="(item, key) in list2"  :key='key'>
                <span >Name : {{ item.name }} </span>
                <span v-if="item.age > 20">Age :  {{ item.age }} </span>
            </div>
        </div>
        <hr>
        <div>
            <div v-for="(item, key) in list2"  :key='key' v-if="key < 2">
                <span>Name : {{ item.name }} </span>
                <span>Age :  {{ item.age }} </span>
            </div>
        </div>
        <hr>
        <div>
            <div v-for="(item, index) in list2" :key='index'>
                <h3># {{ index+1 }} </h3>
                <div> Name : <input v-model="item.name"></div>
                <div> Age : <input v-model="item.age"></div>
                <button @click="deleteItem(index)">Delete this</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                list:[
                    1, 2, 3, 5
                ],
                list2:[
                    {name: "Mohammed", age:26},
                    {name: "Ahmed", age:20},
                    {name: "eslam", age:20}
                ],
                newVal : '',
            }
        },

        methods:{
            addItem(){
                this.list.push(this.newVal)
                this.newVal = '';
            },
	        deleteItem(index){
                this.list2.splice(index, 1);
            }
        }
    }

</script>
