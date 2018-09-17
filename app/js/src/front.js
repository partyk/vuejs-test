import Vue from 'vue'; // vue
import App from '.././components/ui/App';

console.log(App);

global.Vue = Vue;
global.jQuery = jQuery;

global.app = new Vue({
    el: '#app',
    components: {
        'app': App
    },
    data: {
        message: 'Hello Vue!',
        title: 'Ja jsem title',
        show: true,
        listObject: {
            1: 'ahoj',
            2: 'kuk',
            3: 'vyhul'
        },
        listArray: [
            'a',
            'b',
            'c'
        ]
    },
    methods: {
        reverseMessage: function (event) {
            console.log('Click');
            let text = jQuery('#text').text();
            jQuery('#text').text(text.split('').reverse().join(''));
            this.message = this.message.split('').reverse().join('');
        }
    }
});