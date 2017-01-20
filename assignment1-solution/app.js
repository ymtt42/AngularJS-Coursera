(function() {
'use strict';

angular.module ('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject=['$scope'];

function LunchCheckController($scope) {
  $scope.input="";
  $scope.message="";

  $scope.displayMessage = function () {
    var outputMessage =calculateMessage($scope.input);
    $scope.message=outputMessage;
    console.log($scope.message)

  };

}

function calculateMessage(string) {

  var fullMessage=string.split(',');
  var itemCount=0;
  for (var i=0; i<fullMessage.length; i++) {
    var str = fullMessage[i].replace(/\s+/g, '');
    if(str.length>0) {
      itemCount+=1;
    }
  }

  if (itemCount==0) {
    var outputMessage="Please Enter data first";
  }
  else if (itemCount<=3) {
    var outputMessage= "Enjoy !";
  }
  else {
    var outputMessage= "Too Much!";
  }
  return outputMessage;
}

})();
