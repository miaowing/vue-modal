# vue-modal plugin

####init modal
```javascript
var vm = Vue.modal({
  target: element // insert modal element into target element which is child element of target element.
  template: template, // vue-modal template, type string.
  data: {

  },
  autoDestroy: false // when the value is true, you won't need to invoke destroy().
});
```

####open
```javascript
vm.open();
```

####close
```javascript
vm.close();
```

####destroy
```javascript
vm.destroy();
```

####update
```javascript
vm.udpate({
  // data
})
```
