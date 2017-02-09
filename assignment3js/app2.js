(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('NarrowItDownService', NarrowItDownService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

NarrowItDownController.$inject =['NarrowItDownService'];
function NarrowItDownController(NarrowItDownService) {
  var list=this;
  var searchTerm="";

  var promise = NarrowItDownService.getMatchMenuItems(searchTerm);

  promise.then(function (response) {
    list.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}

NarrowItDownService.$inject = ['$http', 'ApiBasePath'];
function NarrowItDownService ($http, ApiBasePath){
  var service=this;
  var items= [];

  service.getMatchMenuItems = function (searchTerm) {
    var response = $http ({
      method:"GET",
      url: ApiBasePath
    });
    return response;
    console.log(response);

  };



}



}) ();
