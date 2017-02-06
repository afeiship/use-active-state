(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .controller('PermissionListController', PermissionListController);

  /** @ngInject */
  function PermissionListController($log, $scope, $state, toastr) {
    var vm = this;

    vm.keywords = '';
    vm.list = [];
    vm.doCreate = doCreate;


    init();

    function doCreate() {
      $state.go('permission.create');
    }

    function init() {
      $log.log('do list!')
    }
  }

})();
