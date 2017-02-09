(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('NarrowItDownService', NarrowItDownService)
//.service('MenuCategoriesService', MenuCategoriesService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective () {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      list: '=myList'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['NarrowItDownService'];
function NarrowItDownController(NarrowItDownService) {
  var menu = this;

  menu.getMatchMenuItems = function () {
    var searchTerm=menu.searchTerm;
    var foundItems=[];
    var promise = NarrowItDownService.getMatchMenuItems(searchTerm);
    promise.then(function (response) {

      for (var i=0; i<response.data.menu_items.length;i++) {
        var description=response.data.menu_items[i].description;
        var index=description.search(searchTerm);
        if (index>-1){
          foundItems.push(response.data.menu_items[i]);
        }
      }
      //return foundItems;
      menu.foundItems=foundItems;
      //console.log(menu.foundItems);
    })
    .catch(function (error) {
      console.log(error);
    })


  }

  menu.removeItem = function(itemIndex) {
    menu.foundItems.splice(itemIndex,1);
  };
}

NarrowItDownService.$inject = ['$http', 'ApiBasePath'];
function NarrowItDownService($http, ApiBasePath) {
  var service = this;

  service.getMatchMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();
