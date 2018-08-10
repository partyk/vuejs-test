import 'babel-polyfill'; // polyfill
import Vue from 'vue'; // vue
// import App from '.././components/ui/App';

import '../module/arrayMethods';

global.Vue = Vue;
// global.jQuery = jQuery;

global.app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
    // render: h => h(App)
});