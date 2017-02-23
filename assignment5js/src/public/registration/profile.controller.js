(function () {
"use strict";

angular.module('public')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['MenuService'];
function ProfileController(MenuService) {
var $ctrl=this;
$ctrl.path='https://ymtt42-course5.herokuapp.com/images/';

var user=MenuService.getUser();

$ctrl.userNotDefined=function() {
  if(user.length==0) {
    return true;
//    console.log("User not defined");
  }
  else {
//    console.log ("user defined?");
    return false;
  }
}


  $ctrl.firstname=user.firstname;
  $ctrl.lastname=user.lastname;
  $ctrl.email=user.email;
  $ctrl.phone=user.phone;
  $ctrl.favoritedish=user.favoritedish;
  var promise = MenuService.getItem($ctrl.favoritedish)
  promise.then(function(result) {
    if(!(result=="Wrong item")){

      $ctrl.item=result;
  //    console.log(result);

    }
    else {
      $ctrl.message="No such menu number exists";
    }
  });


;




  }

})();


    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish));
    // console.log(MenuService.getMenuItem($ctrl.user.favoritedish).$$state);
