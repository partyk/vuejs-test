import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue

global.app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '/ui/images/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: true,
        onSale: true
    }
});