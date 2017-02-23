(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.sign-up', {
      url: '/sign-up',
      templateUrl: 'src/public/registration/signup.html',
      controller: 'RegistrationController',
      controllerAs: 'reg',
      // resolve: {
      //   item: ['MenuService', function (MenuService) {
      //     return MenuService.getMenuItem("SO1");
      //   }]
      // }
    })

      .state('public.myinfo', {
        url: '/myinfo',
        templateUrl: 'src/public/registration/myprofile.html',
        controller: 'ProfileController',
        controllerAs: 'profileCtrl',
        // resolve: {
        //   itemDetails: ['MenuService', function (MenuService) {
        //     return MenuService.getItem("SO1");
        //   }]
        // }
        resolve: {
          menuCategories: ['MenuService', function (MenuService) {
            return MenuService.getCategories();
          }]
        }
      })

    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
