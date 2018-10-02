
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue          = require('vue');
window.veeValidate  = require('vee-validate');
window.VueResource  = require('vue-resource');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(veeValidate);
Vue.use(VueResource);

Vue.component('exampleone', require('./components/Example1.vue'));
Vue.component('coursetro', require('./components/Coursetro.vue'));
Vue.component('navbar', require('./components/Navbar.vue'));
Vue.component('articles', require('./components/Articles.vue'));
Vue.component('slider', require('./components/Slider.vue'));
Vue.component('objects', require('./components/Object.vue'));
Vue.component('todolist', require('./components/TodoList.vue'));
Vue.component('component-course', require('./components/ComponentCourse.vue'));
Vue.component('hooks-and-ajax', require('./components/HookAndAjax.vue'));

const app = new Vue({
    el: '#app',
    // router,
    data(){
        return {
            courses : [],
            firstCourse: {
                "id": "PL1FWK-sgJ9ek59ylOuaS8Ggjz9oBVM8Hb",
                "name": "VueJS \u0625\u0633\u0623\u0644\u0646\u064a \u0639\u0646",
                "url": "https:\/\/www.youtube.com\/watch?v=TQQVt3CbSCw&list=PL1FWK-sgJ9ek59ylOuaS8Ggjz9oBVM8Hb",
                "description": "معلومات عن الكورس ",
                "thumbnails": "https:\/\/i.ytimg.com\/vi\/TQQVt3CbSCw\/sddefault.jpg",
                "statistics": {
                    "viewCount": 111,
                    "likeCount": 11,
                    "commentCount": 7,
                    "duration": "00:04:18",
                    "lessons": 2
                }
            },
        }
    },

    created: function() {
        this.getCourses();
    },

    methods:{
        getCourses(){
            this.$http.get('/courses.json').then(response => {

                // get body data
                this.courses = response.body;

              }, response => {
                // error callback
            });
        }
    }
});
