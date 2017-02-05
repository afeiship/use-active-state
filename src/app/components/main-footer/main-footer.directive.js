(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .directive('mainFooter', mainFooter);

  /** @ngInject */
  function mainFooter($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/main-footer/main-footer.html',
      link: function (scope, element, attr) {

      }
    };
  }

})();

