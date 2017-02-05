(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('pay', {
        url: '/pay',
        templateUrl: 'app/pay/pay.html',
        controller: 'PayController',
        controllerAs: 'pay'
      })
      .state('notice', {
        url: '/notice',
        templateUrl: 'app/notice/notice.html',
        controller: 'NoticeController',
        controllerAs: 'notice'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .state('permission', {
        url: '/permission',
        abstract: true,
        templateUrl: 'app/permission/permission.html',
        controller: 'PermissionController',
        controllerAs: 'permission'
      })
      .state('permission.list', {
        url: '/list',
        views: {
          'permission': {
            templateUrl: 'app/permission/list/list.html',
            controller: 'PermissionListController',
            controllerAs: 'list'
          }
        }
      })
      .state('permission.create', {
        url: '/create',
        views: {
          'permission': {
            templateUrl: 'app/permission/create/create.html',
            controller: 'PermissionCreateController',
            controllerAs: 'create'
          }
        }
      })
      .state('permission.update', {
        url: '/update/:user_id',
        views: {
          'permission': {
            templateUrl: 'app/permission/update/update.html',
            controller: 'PermissionUpdateController',
            controllerAs: 'update'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
