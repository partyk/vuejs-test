import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue

global.app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '/ui/images/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: '/ui/images/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: '/ui/images/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0
        // sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeToCart() {
            this.cart = this.cart > 0 ? this.cart - 1 : 0;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
});