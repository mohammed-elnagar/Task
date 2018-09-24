<template>
    <div>
        <div><h1>Test</h1></div>
        <div v-if="true">
            <div v-for="(item, key) in list2" :key='key'> {{ item.name }} </div>
            <input v-model="newVal" />
            <button @click="addItem(newVal)">Add</button>
        </div>
        <div>
            <div v-for="(item, key) in list2"  :key='key' v-if="item.age > 20">
                <span>Name : {{ item.name }} </span>
                <span>Age :  {{ item.age }} </span>
            </div>
        </div>
        <div>
            <div v-for="(item, index) in list2" :key='index'>
                <h3># {{ index+1 }} </h3>
                <div> Name : <input v-model="item.name"></div>
                <div> Age : <input v-model="item.age"></div>
                <button @click="delteItem(index)">Delete this</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                list2:[
                    {name: "Mohammed", age:26},
                    {name: "Ahmed", age:20},
                    {name: "eslam", age:20}
                ],
                newVal : '',
            }
        },

        methods:{
            addItem(newVal){
                this.list2.push(newVal)
                this.newVal = '';
            },
	        deleteItem: function(index){
                this.list2.splice(index, 1);
            }
        }
    }

</script>
