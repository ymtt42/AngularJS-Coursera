(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
var $ctrl=this;
  $ctrl.submit=function() {
    //console.log("clicked");
    console.log($ctrl.user);
    MenuService.setUser($ctrl.user);
    console.log(MenuService.getUser());
  }
}

})();

    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish));
    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish).$$state);
