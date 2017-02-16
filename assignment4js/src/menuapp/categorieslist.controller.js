(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var categorieslist = this;
  categorieslist.items = items.data;
//  console.log(categorieslist.items);
}

})();
