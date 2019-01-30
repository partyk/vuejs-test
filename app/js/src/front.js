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

global.app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

global.app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

global.app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

global.app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

global.app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

global.app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }} ({{ todo.id }})</li>'
});

global.app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});