/**
 * Created by zhaofeng on 16/3/15.
 */
var Vue = require('vue'),
    VueModal = require('../index'),
    modalTemplate = require('./modal-template.html');

Vue.use(VueModal);
var app = new Vue({
    el: '#app',
    methods: {
        open: function () {
            vm.open();
        }
    }
});
var vm = Vue.modal({
    template: modalTemplate,
    data: {
        modal: {
            title: 'this is modal title',
            content: 'this is modal content'
        }
    }
});