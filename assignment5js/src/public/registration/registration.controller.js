(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService','$q'];
function RegistrationController(MenuService,$q) {
var $ctrl=this;
$ctrl.message="";

  $ctrl.submit=function() {
    //console.log("clicked");
    // console.log($ctrl.user);
    // MenuService.setUser($ctrl.user);
    // console.log(MenuService.getUser());
    var promise = MenuService.checkItem($ctrl.user.favoritedish);
  promise.then(function(result) {
    if(!(result=="Wrong item")){
//      console.log(result);
//      console.log($ctrl.user);
      MenuService.setUser($ctrl.user);
      $ctrl.message="Your information has been saved"
//      console.log(MenuService.getUser());
    }
    else {
      $ctrl.message="No such menu number exists";
    }


    });
  }
}

})();

    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish));
    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish).$$state);
