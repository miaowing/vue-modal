/**
 * Created by zfeng217 on 9/22/15.
 */
(function () {
    function install(Vue) {
        function extend(target, source) {
            for (var p in source) {
                if (source.hasOwnProperty(p)) {
                    target[p] = source[p];
                }
            }
            return target;
        }

        Vue.modal = function (config) {
            var modal = {};
            var defaultConfig = {
                target: document.body,
                data: {
                    show: false
                },
                methods: {},
                template: '',
                autoDestroy: false
            };

            config = extend(defaultConfig, config);

            // default config
            config.data.show = false;
            config.methods.close = function() {
                this.show = false;
                if (defaultConfig.autoDestroy) {
                    setTimeout(destroy, 300);
                }
            };

            var vm = new Vue({
                replace: true,
                data: config.data,
                methods: config.methods
            });

            //insert into target element
            var divEl = document.createElement('div');
            divEl.innerHTML = config.template;
            vm.$mount(divEl);
            vm.$appendTo(config.target);


            modal.vm = vm;
            modal.config = config;
            modal.open = open;
            modal.close = close;
            modal.destroy = destroy;
            modal.update = update;

            /**
             * open the modal
             */
            function open() {
                vm.show = true;
            }

            /**
             * close the modal
             */
            function close() {
                vm.show = false;
                if (modal.config.autoDestroy) {
                    setTimeout(destroy, 300);
                }
            }

            /**
             * destory the modal
             */
            function destroy() {
                if (vm.show) {
                    vm.show = false;
                    setTimeout(destroy, 300);
                } else {
                    vm.$remove();
                    vm.$destroy();
                }
            }

            /**
             * update data
             * @param data
             */
            function update(data) {
                for(key in data) {
                    vm[key] = data[key];
                }
            }

            return modal;
        }
    }

    if (typeof exports == "object") {
        module.exports = install
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return install
        })
    } else if (window.Vue) {
        Vue.use(install)
    }

})();