(function() {
'use strict';

angular.module ('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
   var list=this;
   list.items=ShoppingListCheckOffService.getToBuyItems();
   list.tickItem= function (itemIndex) {
     ShoppingListCheckOffService.tickItem(itemIndex);
   }
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought=this;
  bought.items=ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service=this;

  var itemToBuy=[{name: "cookies", quantity: 10 }, { name: "Donuts", quantity: 10 }, { name: "bottles", quantity: 10 }, { name: "Candies", quantity: 10 }, { name: "snacks", quantity: 10 }];
  //console.log(itemToBuy);
  var itemBought=[];

  service.tickItem=function(itemIndex) {
    var item = {
      name: itemToBuy[itemIndex].name,
      quantity: itemToBuy[itemIndex].quantity
    };
    itemBought.push(item);
    itemToBuy.splice(itemIndex,1);
  };

  service.getToBuyItems=function () {
    return itemToBuy;
  };

  service.getBoughtItems=function () {
    return itemBought;
  };



}


})();
