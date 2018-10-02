<template>
    <div>
        <h1 class="text-center">{{ title }}</h1>
        <hr>
        <div v-for="(post, index) in postes.data" :key="index">
            <h3> {{ post.title }}</h3>
            <p> {{ post.body }}</p>
            <hr>
        </div>
    </div>

</template>

<script>

    export default {
        data(){
            return {
                title:'Hooks And Ajax',
                postes: [],
            }
        },
        methods:{
            getPosts(){
                this.$http.get('/api/articles').then(response => {
                    // get body data
                    this.postes = response.body;
                }, response => {
                    // error callback
                });
            }
        },
        created() {
          this.getPosts();
        },
    }
</script>
