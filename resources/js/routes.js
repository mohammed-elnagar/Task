
// window.Vue = require('vue');
// window.Router = require('vue-router');

// Vue.component('coursetro', require('./components/Coursetro.vue'));
// Vue.component('navbar', require('./components/Navbar.vue'));
// Vue.component('articles', require('./components/Articles.vue'));
// Vue.component('slider', require('./components/Slider.vue'));
// Vue.component('about', require('./components/About.vue'));

// Vue.use(Router);


import Home from './components/Home.vue';
import Example from './components/Example.vue';

export const routes = [
    { path: '/vue', component: Home, name: 'Home' },
    { path: '/vue/example', component: Example, name: 'Example' },
];


// export default new Router({
//     routes: [
//         {
//             path:'/',
//             name:'coursetro',
//             component:Coursetro
//         },
//         {
//             path:'/about',
//             name:'about',
//             component:About
//         }
//     ]
// })
