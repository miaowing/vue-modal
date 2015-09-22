/**
 * Created by zfeng217 on 9/22/15.
 */
(function () {
    function install(Vue) {
        Vue.modal = function (config) {
            var vm = null;
            var defaultConfig = {
                target: document.body,
                data: {
                    show: false,
                    modal: {
                        title: 'default title',
                        content: 'default body'
                    }
                },
                template: '',
                autoDestroy: false
            };

            config = extend(defaultConfig, config);
            config.data.show = false;

            vm = new Vue({
                replace: true,
                data: config.data
            });

            var divEl = document.createElement('div');
            divEl.innerHTML = config.template;

            vm.$mount(divEl);

            vm.$appendTo(config.target);

            vm.config = config;
            vm.open = open;
            vm.close = close;
            vm.destroy = destroy;
            vm.update = update;

            function extend(target, source) {
                for (var p in source) {
                    if (source.hasOwnProperty(p)) {
                        target[p] = source[p];
                    }
                }
                return target;
            }

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
                if (vm.config.autoDestroy) {
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
                extend(vm, data);
            }

            return vm;
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