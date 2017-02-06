(function() {
  'use strict';

  angular
    .module('webAdminUi')
    .controller('PayController', PayController);

  /** @ngInject */
  function PayController($log, toastr, $state) {
    var vm = this;

    vm.submit=submit;

    function submit(){
      $log.log('submit!');
      $state.go('permission.list');
    }

    function logout() {
      $log.debug('logout');
    }
  }
})();
