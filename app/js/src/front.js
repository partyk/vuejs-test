import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue

global.app = new Vue({
    el: '#app',
    data: {
        selectedVariant: 0,
        product: 'Socks',
        brand: 'Vue Mastery',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: '/ui/images/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: '/ui/images/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0
        // sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!';
            }
            return this.brand + ' ' + this.product + ' are not on sale';
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeToCart() {
            this.cart = this.cart > 0 ? this.cart - 1 : 0;
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    }
});