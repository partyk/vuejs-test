import Vue from 'vue'; // vue

global.Vue = Vue;
global.jQuery = jQuery;

const myComponent = {
    name: 'my-component',
    template: `
        <h1>{{ count }}</h1>
    `,
    data: () => {
        return {
            count: 'aaaa'
        };
    }
};

global.app = new Vue({
    el: '#app', // ID elementu
    components: {
        myComponent
    },
    data: {
        msg: 'Hello Vue!'
    }
});