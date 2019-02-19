import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue
// import App from '.././components/ui/App';
//
// global.Vue = Vue;
// global.jQuery = jQuery;
//
// global.app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     },
//     render: h => h(App)
// });

// simple

global.Vue = Vue;

const obj = global.obj = {
    foo: 'bar'
};

// Object.freeze(obj);

global.app = new Vue({
    el: '#app',
    data: obj
});

const data = global.data = { a: 1 };
const vm = global.vm = new Vue({
    el: '#example',
    data: data
});

// vm.$data === data // => true
// vm.$el === document.getElementById('example'); // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
    console.log(newValue, oldValue);
    // This callback will be called when `vm.a` changes
});