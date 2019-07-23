'use strict';

$(document).ready(function() {
    shoppingList.bindEventListeners();
    shoppingList.render();
    api.getItems((items)=>{
      items.forEach((item) => store.addItem(item));
      /* test code */
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'stuff' });
      // console.log('new name: ' + item.name);
      shoppingList.render();
    });
  });



