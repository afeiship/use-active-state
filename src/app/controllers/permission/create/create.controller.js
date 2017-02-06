(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .controller('PermissionCreateController', PermissionCreateController);

  /** @ngInject */
  function PermissionCreateController($state,$log, toastr) {
    var vm = this;
    vm.user = {
      realname: '',
      mobile: '',
      extension_number: '',
      orgId: 115
    };

    vm.doCreate = doCreate;

    function doCreate() {
      $log.log('do create!')
    }
  }

})();
