(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var item="";

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getUser = function () {

    // return $http.get(ApiPath + '/menu_items/'+short_name+'.json').then(function (response) {
    //   return response.data;
    //});
    return item;
    //console.log(item);

  };

  service.setUser=function(newItem){
    item=newItem;
  };

  service.checkItem=function(short_name) {
    return $http.get(ApiPath + '/menu_items/'+short_name+'.json')
    .then(function (response) {
      return response.data;
    },function (response){
      return "Wrong item";
      console.log("error");
    });

  };

}





})();
