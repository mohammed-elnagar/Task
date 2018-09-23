<template>
    <div class="wrapper">


        <h1 class="text-center">{{ title }}</h1>
        <hr>
        <div class="text-center" style="width:50% ;margin:auto">
            <h4 class="text-center"> {{ subjectLesson4 }}</h4>
            <form @submit.prevent="addSkill">
                <input class="mb-1" type="text" style="width:100%" v-model="skill" v-validate="'min:5'" name="skill" placeholder="Enter skill you have...">
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">

                    <p style="background:#ddd" v-if="errors.has('skill')">{{ errors.first('skill')}}</p>
                </transition>
                <!-- <input type="checkbox" id="checkbox" v-model="checked"/> -->
            </form>
            <!-- <br> -->
            <!-- {{ skill }} -->
            <div>
                <ul>
                    <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                        <li v-for="(skill, index) in skills" :key='index'> {{ index + 1}} - {{  skill.skill }}</li>
                    </transition-group>
                </ul>
            </div>
            <p style="background:#ddd"> This are the skills that you possess. </p>
        </div>
        <hr>
        <b>// Conditional (ternary) Operator</b>
        {{ btnState ? 'The button is disabled' : 'Te button is active' }}
        <br>
        <button v-on:click="changeName" v-bind:disabled="btnState">Change name</button>
        <hr>
        <h4 class="text-center"> {{ subjectLesson2 }}</h4>
        <div class="holder">
            <p v-if="skills.length >= 1"> You have more than 1 skills </p>
            <p v-else> You have les than or equal to 1 skills </p>
        </div>
        <hr>
        <div v-bind:class="{'alert': showAlert, 'another-class': showAnotherClass}"></div>
        <div v-bind:class="classObject"></div>
        <div v-bind:style="{width: divWidth, height: divHeight,  backgroundColor: divBG}"></div>
    </div>
</template>


<script>
export default {
    data(){

        return{
            // form
            // checked:false,

            title:"My Course",
            btnState:true,
            subjectLesson4: "Model binding",
            skill:"",

           // Loops
            subjectLesson2: "Loops and condetion",
            skills: [
                {'skill': "VueJs"},
                {'skill': "Laravel"}
            ],

            subjectLesson3:"V-bind:class",

            // bind class
            showAlert:true,
            showAnotherClass: true,
            // another tricks
            classObject:{
                'alert': true, 'another-class': true
            },
            divWidth: '100%',
            divHeight: '50px',
            divBG: '#222'
        }
    },

    methods:{
        changeName(){

        },
        addSkill(){
            this.$validator.validateAll().then((result) => {
                if(result){
                    console.log(this.$validator.validateAll());
                    this.skills.push({skill: this.skill})
                    this.skill = '';
                }else{
                    console.log('Not valid')
                }
            })
            // console.log('This checkbox value is ..' + this.checked)
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        padding-bottom: 50px
    }
    .alert{
        background-color: black;
        height: 50px;
        width: 100%
    }
    .another-class{
        border:yellow dotted     5px
    }
    /* *{
        color: brown;
    } */

    @import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
    body {
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    padding-top: 50px;
    }
    body, html {
    margin: 0;
    height: 100%;
    }
    #app {
        width: 50%;
    }
    nav {
    padding: 20px 20px 20px 0;
    }
    nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
    }

    /* // skills */

  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i{
  float:right;
  cursor:pointer;
}
</style>
