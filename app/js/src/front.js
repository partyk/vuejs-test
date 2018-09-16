import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue

global.app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm fuzzy socks'
    }
});