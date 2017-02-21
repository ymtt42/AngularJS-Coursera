(function () {
"use strict";

angular.module('public')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['MenuService'];
function ProfileController(MenuService) {
var $ctrl=this;
var user=MenuService.getUser();
  $ctrl.firstname=user.firstname;
  $ctrl.lastname=user.lastname;
  $ctrl.email=user.email;
  $ctrl.phone=user.phone;
  $ctrl.favoritedish=user.favoritedish;

  }

})();

    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish));
    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish).$$state);
