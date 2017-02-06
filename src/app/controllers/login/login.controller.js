(function() {
  'use strict';

  angular
    .module('webAdminUi')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, toastr, $state) {
    var vm = this;

    vm.submit=submit;

    function submit(){
      $state.go('dashboard');
    }

    function logout() {
      $log.debug('logout');
    }
  }
})();
