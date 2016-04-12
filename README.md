# vue-modal-plugin
#### Usage
```
npm install vue-modal-plugin --save
```

#### init modal
```javascript
var Vue = require('vue'),
    VueModal = require('vue-modal-plugin');

// regist vue-modal plugin    
Vue.use(VueModal);

// initial vue-modal
var modal = Vue.modal({
  target: element // insert modal element into target element which is child element of target element.
  template: template, // vue-modal template, type string.
  data: {

  },
  methods:{

  },
  autoDestroy: false // when the value is true, you won't need to invoke destroy().
});
```

#### template
```html
<div class="modal-mask" v-show="show" transition="bg" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="modal-wrapper">
        <div v-show="show" transition="modal" class="transition-wrapper">
            <div class="modal-container">
                <content select=".modal-header">
                	<!-- please don't change this expression -->
                    <div class="modal-header">
                        {{modal.title}}<span v-on:click="close()"></span>
                    </div>
                </content>
                <content select=".modal-body">
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="items notify-warn">
                                <p>{{modal.content}}</p>
                            </div>
                        </div>
                    </div>
                </content>
                <content select=".modal-footer">
                    <div class="modal-footer">
                        <button class="modal-button modal-cancel-button" v-on:click="updateData()">更新</button>
                        <button class="modal-button modal-cancel-button" v-on:click="confirm()">确定</button>
                    </div>
                </content>
            </div>
        </div>
    </div>
</div>
```

#### open
```javascript
modal.open();
```

#### close
```javascript
modal.close();
```

####destroy
```javascript
modal.destroy();
```

#### update
```javascript
modal.udpate({
  // data
})
```

####demo
http://demo.zfeng.net/vue-modal/index.html
