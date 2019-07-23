'use strict';

const api = (function () {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ahadgeorge';
    function getItems(callback) {
      // callback('api module works!');
      $.getJSON(`${BASE_URL}/items`,callback);

    }
    function createItem(name, callback) {
      const newItem = {name: name};
      $.ajax({
        url: `${BASE_URL}/items`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newItem),
        success: function(response) {
          callback(response);
        }
    });
  }

  function updateItem(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  }
  return {
    getItems,
    createItem,
    updateItem
  };
})(); 