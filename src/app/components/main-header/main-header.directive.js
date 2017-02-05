(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .directive('mainHeader', mainHeader);

  /** @ngInject */
  function mainHeader($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/main-header/main-header.html',
      link: function (scope, element, attr) {

      }
    };
  }

})();

