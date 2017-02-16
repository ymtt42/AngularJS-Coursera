(function () {
'use strict';

angular.module('data')
  .service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // List of menu categories

  service.getAllCategories = function() {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
      });

    return response;

  };

  //List of items in categories

  service.getItemsForCategory= function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?"),
      params: {
        category: categoryShortName
      }
    });

    return response;

  };
}

})();
