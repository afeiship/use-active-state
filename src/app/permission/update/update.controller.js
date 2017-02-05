(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .controller('PermissionUpdateController', PermissionUpdateController);

  /** @ngInject */
  function PermissionUpdateController($state,$log, toastr) {
    var vm = this;
    var userId = $state.params.user_id;
    vm.doUpdate = doUpdate;
    vm.user = {
      realname: '',
      mobile: '',
      extension_number: '',
      orgId: 115
    };


    init();


    function init() {
      $log.log('update init!')
    }


  }

})();
