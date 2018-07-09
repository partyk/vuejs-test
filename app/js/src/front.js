import "babel-polyfill"; //polyfill
import Vue from 'vue'; //vue

global.Vue = Vue;
global.jQuery = jQuery;

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

console.log('xxx1');
