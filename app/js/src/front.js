import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue

Vue.component('product', {
    template: `
        <div class="product">

            <div class="product-image">
                <img :src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p
                    v-else
                    v-bind:class="{ outOfStock: !inStock }"
                    >Out of Stock</p>
                <p>{{ sale }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <!--<ul>-->
                    <!--<li v-for="size in sizes">{{ size }}</li>-->
                <!--</ul>-->

                <div
                    class="color-box"
                    v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    :data-id="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)"
                    >
                    <!--<p>-->
                        <!--{{ variant.variantColor }}-->
                    <!--</p>-->
                </div>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>

                <button
                    v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock}"
                >Add to cart</button>
                <button v-on:click="removeToCart" v-show="this.cart > 0">Remove to cart</button>


            </div>

        </div>
    `,
    data() {
        return {
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
        };
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

global.app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
});