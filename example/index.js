/**
 * Created by zhaofeng on 16/3/15.
 */
var Vue = require('vue'),
    VueModal = require('../index'),
    modalTemplate = require('./modal-template.html');

//regist vue-modal plugin
Vue.use(VueModal);

//initial vue-modal
var modal = Vue.modal({
    template: modalTemplate,
    data: {
        modal: {
            title: 'this is modal title',
            content: 'this is modal content'
        }
    },
    methods: {
        updateData: function () {
            this.modal = {
                title: 'update title.',
                content: 'update content.'
            };
        }
    }
});

// vue app
var app = new Vue({
    el: '#app',
    methods: {
        open: function () {
            modal.open();
        },
        confirm: function () {
            modal.close();
        }
    }
});
